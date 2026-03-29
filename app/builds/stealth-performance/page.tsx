export default function StealthPerformance() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-semibold tracking-wide">AZPrimePC</div>
        <a href="/#builds" className="text-sm text-gray-400 hover:text-white">
          ← Back to Builds
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* MAIN IMAGE (smaller now) */}
        <img
          src="/images/stealth-performance.jpg"
          alt="Stealth Performance Build"
          className="rounded-xl w-full max-w-md mx-auto"
        />

        {/* TEXT */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Stealth Performance</h1>

          <p className="text-xl text-gray-300 mb-4">$1,199</p>

          <p className="text-gray-400 max-w-xl">
            Compact, efficient, and clean. This build delivers strong 1080p / 1440p gaming performance
            with excellent thermals and a minimal footprint — perfect for desks that need power without bulk.
          </p>

          {/* 🔥 FEATURE CALLOUT */}
          <p className="text-gray-300 mt-4 max-w-xl">
            Includes a built-in 8.8" smart display showing real-time system stats for a clean, high-end aesthetic.
          </p>

          {/* BUTTON */}
          <a
            href="/#contact"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full text-sm hover:opacity-80 transition"
          >
            Request This Build
          </a>
        </div>
      </section>

      {/* SECOND IMAGE (fixed + smaller) */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <img
          src="/images/stealth-performance-3.jpg"
          alt="Stealth Performance Interior"
          className="rounded-xl w-full max-w-4xl mx-auto"
        />
      </section>

      {/* SPECS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Build Specifications</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-400">
          <div>
            <p><span className="text-white">CPU:</span> AMD Ryzen 5 5500 (6-Core, 12-Thread)</p>
            <p><span className="text-white">GPU:</span> XFX Radeon RX 6600 XT 8GB</p>
            <p><span className="text-white">RAM:</span> 16GB Corsair DDR4 (2x8GB)</p>
            <p><span className="text-white">Storage:</span> 2TB WD_Black SN7100 NVMe M.2 SSD</p>
            <p><span className="text-white">Display:</span> TURZX 8.8" Smart Monitoring Screen</p>
          </div>

          <div>
            <p><span className="text-white">Motherboard:</span> Gigabyte A520I AC (Mini-ITX, WiFi)</p>
            <p><span className="text-white">Cooler:</span> Thermalright AXP90 X36 Low Profile</p>
            <p><span className="text-white">Case:</span> JoyJom Micro ATX</p>
            <p><span className="text-white">Power Supply:</span> MSI MAG A650BE 650W 80+ Bronze</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 AZPrimePC. Built Different.
      </footer>

    </main>
  );
}