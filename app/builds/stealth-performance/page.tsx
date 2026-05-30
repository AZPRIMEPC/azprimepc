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
        <img
          src="/images/SYS001SHOPBG-1.PNG.png"
          alt="System #001 AZ Prime PC workshop hero photo"
          className="rounded-xl w-full border border-gray-800 shadow-[0_0_60px_rgba(168,85,247,0.18)]"
        />

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300 mb-2">
            Available Now
          </p>

          <h1 className="text-4xl font-bold mb-4">System #001</h1>

          <p className="text-3xl font-bold text-blue-300 mb-6">$849</p>

          <p className="text-gray-400 max-w-xl">
            Compact, efficient, and clean. This build delivers strong 1080p / 1440p gaming performance
            with excellent thermals and a minimal footprint — perfect for desks that need power without bulk.
          </p>

          <p className="text-gray-300 mt-4 max-w-xl">
            Includes an 8.8&quot; smart display showing real-time system stats for a clean,
            high-end aesthetic.
            <br />
            Windows 11 Pro installed with lifetime activation key.
          </p>

          <a
            href="/#contact"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-full text-sm hover:opacity-80 transition"
          >
            Request This Build
          </a>
        </div>
      </section>

      {/* PRICE CALLOUT */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="rounded-xl border border-blue-900/50 bg-blue-950/20 p-5">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300 mb-2">
            Current Price
          </p>

          <p className="text-3xl font-bold text-white">$849</p>

          <p className="text-gray-400 text-sm mt-2">
            Available now as a ready-to-go AZPrimePC build.
          </p>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="/images/SYS001WBG-1.PNG.png"
            alt="System #001 white background product photo"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/SYS001WBG-2.PNG.png"
            alt="System #001 alternate white background product photo"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/SYS001SHOPBG-1.PNG.png"
            alt="System #001 workshop product photo"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/stealth-performance.jpg"
            alt="Stealth Performance original hero"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/stealth-performance-2.png"
            alt="Stealth Performance Display"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/stealth-performance-3.jpg"
            alt="Stealth Performance Interior"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/IMG_0215.jpeg"
            alt="AZP #001 additional view"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/IMG_0216.jpeg"
            alt="AZP #001 additional view"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />

          <img
            src="/images/IMG_0219.jpeg"
            alt="AZP #001 additional view"
            className="rounded-xl w-full object-cover aspect-[4/3] border border-gray-800"
          />
        </div>
      </section>

      {/* SPECS */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">Build Specifications</h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-400">
          <div className="border border-gray-800 rounded-xl p-6">
            <p><span className="text-white">CPU:</span> AMD Ryzen 5 5500 (6-Core, 12-Thread)</p>
            <p><span className="text-white">GPU:</span> XFX Radeon RX 6600 XT 8GB</p>
            <p><span className="text-white">RAM:</span> 32GB Corsair DDR4 (2x16GB)</p>
            <p><span className="text-white">Storage:</span> 2TB WD_Black SN7100 NVMe M.2 SSD</p>
            <p><span className="text-white">Display:</span> WOWNOVA 8.8&quot; real-time system monitoring display</p>
          </div>

          <div className="border border-gray-800 rounded-xl p-6">
            <p><span className="text-white">Motherboard:</span> Gigabyte A520I AC (Mini-ITX, WiFi)</p>
            <p><span className="text-white">Cooler:</span> Thermalright AXP90 X36 Low Profile</p>
            <p><span className="text-white">Case:</span> JoyJom Micro ATX</p>
            <p><span className="text-white">Power Supply:</span> MSI MAG A650BE 650W 80+ Bronze</p>
            <p><span className="text-white">OS:</span> Windows 11 Pro installed with lifetime activation key</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 AZPrimePC. Intentional by Design.
      </footer>
    </main>
  );
}
