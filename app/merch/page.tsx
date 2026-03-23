"use client";

import { useEffect, useState } from "react";

export default function MerchPage() {
  const [pos, setPos] = useState({ x: 200, y: 200 });
  const [vel, setVel] = useState({ x: 3, y: 2 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [screen, setScreen] = useState({ width: 1000, height: 1000 });

  // screen size
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
    alert("🎉 YOU CAUGHT IT! DM me for free merch 😂");
  };

  const scale = 0.6 + (pos.y / screen.height) * 0.8;

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-black font-sans">

      {/* TOP BAR */}
      <div className="bg-[#003399] text-white p-2 text-sm flex justify-between">
        <span>AZPrimePC</span>
        <span>Home | Merch | Builds</span>
      </div>

      {/* NAV */}
      <div className="bg-[#3366cc] text-white p-2 text-sm">
        Home | Browse | Builds | Merch | Friends
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto mt-4 flex gap-4">

        {/* LEFT SIDEBAR */}
        <div className="w-1/3 bg-[#d6e0f5] border border-gray-400 p-3">
          <h2 className="font-bold">AZPrimePC</h2>

          <img src="/logo.png" className="w-full mt-2 border" />

          <p className="text-sm mt-2">
            💻 Custom PC Builder <br />
            🎵 Now Playing: Dial-Up Tone <br />
            😎 Mood: Overclocked
          </p>

          <div className="mt-4 text-sm">
            <p>📍 Arizona</p>
            <p>🕒 Last Login: Today</p>
          </div>

          <div className="mt-4 border-t pt-2 text-sm">
            <p><b>Top Friends</b></p>
            <p>RTX 4090</p>
            <p>RX 6900 XT</p>
            <p>DDR5 RAM</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-2/3">

          {/* ANNOUNCEMENT */}
          <div className="border border-gray-400 bg-white p-4 mb-4 text-center">
            <b>🔥 AZPRIMEPC MERCH IS LIVE 🔥</b>
          </div>

          {/* PRODUCTS */}
          <div className="bg-white border border-gray-400 p-4">
            <h2 className="font-bold mb-3">Merch Drops</h2>

            <div className="border-t pt-3">
              <p><b>+10 FPS Sticker</b></p>
              <p className="text-sm">Adds zero FPS but looks fast.</p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1">
                Buy
              </button>
            </div>

            <div className="border-t pt-3 mt-3">
              <p><b>3D Printed Logo</b></p>
              <p className="text-sm">Flex on absolutely nobody.</p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1">
                Buy
              </button>
            </div>
          </div>

          {/* MARQUEE */}
          <div className="overflow-hidden whitespace-nowrap text-xl font-bold text-yellow-600 mt-6">
            <div className="inline-block animate-marquee">
              🔥 LIMITED DROP 🔥 BUILT NOT BOUGHT 🔥 LIMITED DROP 🔥
            </div>
          </div>

        </div>
      </div>

      {/* FLOATING LOGO GAME */}
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
