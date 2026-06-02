import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export function SakuraPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const petals: Petal[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 40; i++) {
      petals.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight - window.innerHeight,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 1.2 + 0.4,
        drift: Math.random() * 1.5 - 0.75,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function drawPetal(ctx: CanvasRenderingContext2D, p: Petal) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size, p.size * 1.2, -p.size, p.size, 0);
      ctx.bezierCurveTo(p.size * 1.2, p.size, p.size / 2, p.size, 0, 0);
      ctx.fillStyle = "#c62828";
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      petals.forEach((p) => {
        p.y += p.speed;
        p.x += p.drift;
        p.rotation += p.rotationSpeed;
        if (p.y > canvas!.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas!.width;
        }
        drawPetal(ctx!, p);
      });
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.15 }}
    />
  );
}
