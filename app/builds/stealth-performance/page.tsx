import Link from "next/link";

export default function StealthPerformance() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ===== NAV ===== */}
      <header className="border-b border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-semibold tracking-wide">
            AZPrimePC
          </Link>

          <Link
            href="/#builds"
            className="text-sm text-gray-400 hover:text-white"
          >
            ← Back to Builds
          </Link>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="/images/stealth-performance.jpg"
          className="rounded-xl"
          alt="Stealth Performance Build"
        />

        <div>
          <h1 className="text-3xl font-semibold mb-4">
            Stealth Performance
          </h1>

          <p className="text-xl text-gray-300 mb-6">$1,199</p>

          <p className="text-gray-400 mb-6">
            Compact, efficient, and clean. This build delivers strong 1080p/1440p gaming performance 
            with excellent thermals and a minimal footprint — perfect for desks that need power without bulk.
          </p>

          <a
            href="/#contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-full"
          >
            Request This Build
          </a>
        </div>
      </section>

      {/* ===== SECOND IMAGE ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <img
          src="/images/stealth-performance-2.png"
          className="rounded-xl"
          alt="Stealth Performance Interior"
        />
      </section>

      {/* ===== THIRD IMAGE (DETAIL SHOT) ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <img
          src="/images/stealth-performance-3.jpg"
          className="rounded-xl"
          alt="Stealth Performance Detail"
        />
      </section>

      {/* ===== SPECS ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Build Specifications</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-400">
          <div>
            <p><span className="text-white">CPU:</span> AMD Ryzen 5 5500 (6-Core, 12-Thread)</p>
            <p><span className="text-white">GPU:</span> XFX Radeon RX 6600 XT 8GB</p>
            <p><span className="text-white">RAM:</span> 16GB Corsair DDR4 (2x8GB)</p>
            <p><span className="text-white">Storage:</span> 2TB WD_Black SN7100 NVMe M.2 SSD (Thermalright Heatsink)</p>
          </div>

          <div>
            <p><span className="text-white">Motherboard:</span> Gigabyte A520I AC (Mini-ITX, WiFi)</p>
            <p><span className="text-white">Cooler:</span> Thermalright AXP90 X36 Low Profile CPU Cooler</p>
            <p><span className="text-white">Case:</span> JoyJom Micro ATX</p>
            <p><span className="text-white">Power Supply:</span> MSI MAG A650BE 650W 80+ Bronze</p>
            <p><span className="text-white">Display:</span> TURZX 8.8" Smart Monitoring Screen (System Stats Display)</p>
          </div>
        </div>

        {/* ===== SELLING BLOCK ===== */}
        <div className="mt-10 p-6 border border-gray-800 rounded-xl">
          <p className="text-gray-400 text-sm">
            Built with optimized airflow, clean cable routing, and tuned for reliable daily performance.
            Every AZPrimePC system is assembled with attention to detail and tested before delivery.
          </p>
        </div>

      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 AZPrimePC. Built Different.
      </footer>

    </main>
  );
}