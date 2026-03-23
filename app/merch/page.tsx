"use client";

import { useEffect, useState } from "react";

export default function MerchPage() {
  const [pos, setPos] = useState({ x: 200, y: 200 });
  const [vel, setVel] = useState({ x: 3, y: 2 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [screen, setScreen] = useState({ width: 1000, height: 1000 });

  // safe window size (client only)
  useEffect(() => {
    const updateSize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // mouse tracking
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // movement loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => {
        const dx = prev.x - mouse.x;
        const dy = prev.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        let repelX = 0;
        let repelY = 0;

        if (dist < 150) {
          const force = (150 - dist) / 150;
          repelX = (dx / dist) * force * 6;
          repelY = (dy / dist) * force * 6;
        }

        let newX = prev.x + vel.x + repelX;
        let newY = prev.y + vel.y + repelY;

        if (newX <= 0 || newX >= screen.width - 100) {
          setVel((v) => ({ ...v, x: -v.x }));
        }

        if (newY <= 0 || newY >= screen.height - 100) {
          setVel((v) => ({ ...v, y: -v.y }));
        }

        return { x: newX, y: newY };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [vel, mouse, screen]);

  const handleCatch = () => {
    alert("🎉 YOU CAUGHT IT! DM me for a free sticker 😂");
  };

  const scale = 0.6 + (pos.y / screen.height) * 0.8;

  return (
    <div
      className="min-h-screen text-white p-6"
      style={{
        background:
          "radial-gradient(circle at center, #ff00ff, #000000)",
      }}
    >
      {/* fake marquee */}
      <div className="overflow-hidden whitespace-nowrap text-xl font-bold text-yellow-300">
        <div className="inline-block animate-marquee">
          🔥 AZPRIMEPC MERCH 🔥 LIMITED DROP 🔥 BUILT NOT BOUGHT 🔥
        </div>
      </div>

      {/* header */}
      <h1 className="text-4xl font-bold text-center mt-6 animate-pulse">
        🛒 Dumb Stuff We Made
      </h1>

      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="border-4 border-pink-500 p-4 bg-black/60">
          <h2 className="text-xl">+10 FPS Sticker</h2>
          <p className="text-sm">
            Scientifically proven to do nothing.
          </p>
          <a
            href="#"
            className="block mt-4 bg-yellow-400 text-black p-2 text-center animate-pulse"
          >
            Buy ($5)
          </a>
        </div>

        <div className="border-4 border-green-400 p-4 bg-black/60">
          <h2 className="text-xl">3D Printed Logo Flex</h2>
          <p className="text-sm">
            Impress absolutely nobody but yourself.
          </p>
          <a
            href="#"
            className="block mt-4 bg-cyan-400 text-black p-2 text-center animate-pulse"
          >
            Buy ($20)
          </a>
        </div>

        <div className="border-4 border-purple-400 p-4 bg-black/60">
          <h2 className="text-xl">Cable Mgmt Optional Pack</h2>
          <p className="text-sm">
            For the brave.
          </p>
          <a
            href="#"
            className="block mt-4 bg-pink-400 text-black p-2 text-center animate-pulse"
          >
            Buy ($8)
          </a>
        </div>
      </div>

      {/* visitor counter lol */}
      <div className="text-center mt-10 text-green-400 font-mono">
        Visitors: 0001337
      </div>

      {/* bouncing logo */}
      <img
        src="/logo.png"
        onClick={handleCatch}
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: 80,
          transform: `scale(${scale})`,
          cursor: "pointer",
          zIndex: 9999,
        }}
      />
    </div>
  );
}
