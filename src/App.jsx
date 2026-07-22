import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { SakuraPetals } from "./components/SakuraPetals";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";
import { AnimeTransition } from "./components/AnimeTransition";

import { HomePage } from "./pages/HomePage";
import { SponsorsPage } from "./pages/SponsorsPage";
import { TicketsPage } from "./pages/TicketsPage";
import { TeamsPage } from "./pages/TeamsPage";
import { EventsPage } from "./pages/EventsPage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { GalleryPage } from "./pages/GalleryPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [loaderState, setLoaderState] = useState(() => {
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
        } else if (hash === "#gallery") {
          setPage("gallery");
        } else {
          setPage("home");
        }
      } else if (path === "/sponsors") {
        setPage("sponsors");
      } else if (path === "/tickets") {
        setPage("tickets");
      } else if (path === "/teams") {
        setPage("teams");
      } else if (path === "/gallery") {
        setPage("gallery");
      } else if (path === "/events") {
        setPage("events");
        if (hash) {
          setSelectedClub(hash.substring(1));
        } else {
          setSelectedClub(null);
        }
      } else if (path === "/event") {
        setPage("event-detail");
        const id = searchParams.get("id");
        if (id) {
          setSelectedEventId(id);
        }
      } else {
        setPage("404");
      }
    };

    handleLocationChange();

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);


  const handleNavClick = (e) => {
    const target = e.target;
    const anchor = target.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href) return;

    if (href.startsWith("/")) {
      e.preventDefault();
      window.history.pushState(null, "", href);

      const [basePath, searchAndHash] = href.split("?");
      const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
      const searchParams = new URLSearchParams(searchAndHash || "");

      if (basePath === "/" || basePath === "/index.html") {
        setPage("home");
        setSelectedClub(null);
        setSelectedEventId(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
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
      } else if (basePath === "/gallery") {
        setPage("gallery");
        setSelectedClub(null);
        setSelectedEventId(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (basePath === "/events") {
        setPage("events");
        setSelectedEventId(null);
        if (hash) {
          setSelectedClub(hash.substring(1));
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
      className={`min-h-screen bg-[#0e100f] overflow-x-hidden text-stone-200 ${
        loaderState === "loading" ? "h-screen overflow-hidden" : ""
      }`}
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      onClick={handleNavClick}>
      <Loader
        loaderState={loaderState}
        onStartMorph={() => {}}
        onComplete={() => {
          setPage("home");
          setLoaderState("completed");
          sessionStorage.setItem("harshtal-loader-shown", "true");
        }}
      />

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
                {page === "gallery" && <GalleryPage />}
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