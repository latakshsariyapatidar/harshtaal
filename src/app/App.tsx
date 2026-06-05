import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { SponsorsPage } from "./components/SponsorsPage";
import { TicketsPage } from "./components/TicketsPage";
import { TeamsPage } from "./components/TeamsPage";
import { EventsPage } from "./components/EventsPage";
import { EventDetailPage } from "./components/EventDetailPage";
import { SakuraPetals } from "./components/SakuraPetals";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { NotFoundPage } from "./components/NotFoundPage";
import { AnimeTransition } from "./components/AnimeTransition";

export default function App() {
  const [page, setPage] = useState<"home" | "sponsors" | "tickets" | "teams" | "events" | "event-detail" | "404">("home");
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [loaderState, setLoaderState] = useState<"loading" | "completed">(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("harshtal-loader-shown") === "true" ? "completed" : "loading";
    }
    return "loading";
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(window.location.search);

      window.scrollTo(0, 0);

      if (path === "/" || path === "/index.html") {
        if (hash === "#sponsors") {
          setPage("sponsors");
        } else if (hash === "#tickets") {
          setPage("tickets");
        } else if (hash === "#teams") {
          setPage("teams");
        } else if (hash === "#events") {
          setPage("events");
        } else {
          setPage("home");
        }
      } else if (path === "/sponsors") {
        setPage("sponsors");
      } else if (path === "/tickets") {
        setPage("tickets");
      } else if (path === "/teams") {
        setPage("teams");
      } else if (path === "/events") {
        setPage("events");
        if (hash) {
          setSelectedClub(hash.substring(1));
        } else {
          setSelectedClub(null);
        }
      } else if (path === "/event") {
        setPage("event-detail");
        setSelectedEventId(searchParams.get("id"));
      } else {
        setPage("404");
      }
    };

    // Initial check
    handleLocationChange();

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // Locomotive Scroll smooth scrolling setup
  useEffect(() => {
    if (loaderState !== "completed") return;

    let locomotiveScroll: any;
    
    import("locomotive-scroll").then((LocomotiveScrollModule) => {
      const LocomotiveScroll = LocomotiveScrollModule.default;
      locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false,
        }
      });
    });

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [loaderState, page]);

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href) return;

    // Intercept client-side relative routing paths
    if (href.startsWith("/") && !href.startsWith("//")) {
      e.preventDefault();
      const [path, hash] = href.split("#");
      
      window.history.pushState(null, "", href);
      
      const [basePath, search] = path.split("?");
      const searchParams = new URLSearchParams(search);
      
      if (basePath === "/") {
        setPage("home");
        setSelectedClub(null);
        setSelectedEventId(null);
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            el?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else if (basePath === "/sponsors") {
        setPage("sponsors");
        setSelectedClub(null);
        setSelectedEventId(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (basePath === "/tickets") {
        setPage("tickets");
        setSelectedClub(null);
        setSelectedEventId(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (basePath === "/teams") {
        setPage("teams");
        setSelectedClub(null);
        setSelectedEventId(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (basePath === "/events") {
        setPage("events");
        setSelectedEventId(null);
        if (hash) {
          setSelectedClub(hash);
        } else {
          setSelectedClub(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else if (basePath === "/event") {
        setPage("event-detail");
        setSelectedEventId(searchParams.get("id"));
      } else {
        setPage("404");
      }
    } else if (href.startsWith("#")) {
      // Anchor links on the homepage
      if (page !== "home") {
        e.preventDefault();
        window.history.pushState(null, "", `/${href}`);
        setPage("home");
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#0e100f] overflow-x-hidden text-stone-200 ${loaderState === "loading" ? "h-screen overflow-hidden" : ""
        }`}
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      onClick={handleNavClick}
    >

      {/* Morphing Logo Loader */}
      <Loader
        loaderState={loaderState}
        onStartMorph={() => { }}
        onComplete={() => {
          setPage("home"); // Reset to home state on load completion
          setLoaderState("completed");
          sessionStorage.setItem("harshtal-loader-shown", "true");
        }}
      />

      {/* Main Website Content */}
      {loaderState === "completed" && (
        <>
          <SakuraPetals />
          <AnimeTransition page={page}>
            {page === "404" ? (
              <NotFoundPage onGoHome={() => { window.history.pushState(null, "", "/"); setPage("home"); }} />
            ) : (
              <>
                <Navbar />
                {page === "home" && <HomePage />}
                {page === "sponsors" && <SponsorsPage />}
                {page === "tickets" && <TicketsPage />}
                {page === "teams" && <TeamsPage />}
                {page === "events" && (
                  <EventsPage
                    selectedClub={selectedClub}
                    onSelectEvent={(id) => {
                      window.history.pushState(null, "", `/event?id=${id}`);
                      setPage("event-detail");
                      setSelectedEventId(id);
                    }}
                  />
                )}
                {page === "event-detail" && (
                  <EventDetailPage
                    eventId={selectedEventId}
                    onBack={() => {
                      window.history.pushState(null, "", "/events");
                      setPage("events");
                      setSelectedClub(null);
                    }}
                    onNavigateToTickets={() => {
                      window.history.pushState(null, "", "/tickets");
                      setPage("tickets");
                    }}
                  />
                )}
                <Footer />
              </>
            )}
          </AnimeTransition>
        </>
      )}
    </div>
  );
}
