import Link from "next/link";
import ContactForm from './ContactForm';

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= NAVBAR ================= */}
<header className="sticky top-0 z-50 border-b border-blue-900/40 bg-black/70 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.12)]">
  <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
    <Link href="/" className="font-bold tracking-wide text-white hover:text-blue-300 transition">
  <span className="text-blue-300">AZ</span>PrimePC
</Link>

    <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
      <a href="#home" className="hover:text-white transition">Home</a>
      <a href="#builds" className="hover:text-white transition">Builds</a>
      <Link href="/available" className="hover:text-white transition">
        Available
      </Link>
      <a href="#services" className="hover:text-white transition">Services</a>
      <a href="#why" className="hover:text-white transition">Why Us</a>
      <a href="#contact" className="hover:text-white transition">Contact</a>
    </nav>

    <a
      href="#contact"
      className="hidden sm:inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-blue-300 transition"
    >
      Start a Build
    </a>
  </div>
</header>

      {/* ================= HERO ================= */}
      <section id="home" className="mx-auto max-w-6xl px-6 py-24">

        <p className="text-xs tracking-[0.35em] text-gray-500 mb-4">
          ARIZONA PRIME PC CO.
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl">
          Built Different.
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          Custom PCs built with intention. Clean layouts, optimized airflow,
          and performance-focused parts — no wasted components.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#builds" className="bg-white text-black px-6 py-3 rounded-lg">
            View Builds
          </a>

          <a href="https://buy.stripe.com/cNi7sN3UWc7A3GQ7eV3Ru01"
             target="_blank"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black"
>
  Start Your Build
</a>
        </div>
      </section>



      {/* ================= FEATURED BUILDS ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
    Featured Builds
  </p>

  <h2 className="text-3xl font-bold mb-10">Available Now</h2>

  <div className="grid gap-8 md:grid-cols-3">
    <Link
  href="/builds/stealth-performance"
  className="border border-gray-800 rounded-xl p-4 hover:border-white hover:-translate-y-1 transition block"
>
  <img
    src="/images/stealth-performance.jpg"
    alt="Stealth Performance Build"
    className="rounded-lg mb-4 w-full object-cover aspect-[4/3]"
  />

  <h3 className="text-lg font-semibold">System #001</h3>
  <p className="text-blue-300 mt-2">$1,099</p>

  <p className="text-gray-500 mt-3 text-sm">
    Clean, compact performance build with optimized airflow and integrated display.
  </p>

  <span className="inline-block mt-4 text-sm underline">
    View Build →
  </span>
</Link>

    <Link
  href="/builds/system-002"
  className="border border-gray-800 rounded-xl p-6 opacity-80 hover:opacity-100 hover:border-white hover:-translate-y-1 transition block"
>
      <h3 className="text-lg font-semibold">System #002</h3>
      <p className="text-gray-500 mt-2 text-sm">Coming soon</p>

      <div className="mt-4 text-sm text-gray-400 space-y-1">
        <p><span className="text-gray-300">CPU:</span> Ryzen 7 5700G</p>
        <p><span className="text-gray-300">Motherboard:</span> ASUS TUF B550-Plus WiFi II</p>
        <p><span className="text-gray-300">Memory:</span> 32GB (4x8) Corsair Vengeance DDR4</p>
        <p><span className="text-gray-300">Graphics:</span> Custom-installed GPU</p>
      </div>

      <p className="text-gray-500 mt-4 text-sm">
        Stealth-focused performance build featuring precision airflow, clean cable management, synchronized aRGB lighting via NZXT CAM, and an upgrade-ready design.
      </p>

      <p className="mt-4 text-blue-300">
        Starting at: $XXX
      </p>
    </Link>

    <div className="border border-gray-800 rounded-xl p-6 opacity-40">
      <h3 className="text-lg font-semibold">System #003</h3>
      <p className="text-gray-500 mt-2 text-sm">Coming soon</p>
    </div>
  </div>
</section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
  <h2 className="text-xl font-semibold mb-6">Also Available</h2>

  <div className="grid md:grid-cols-3 gap-6">

    <a
      href="/available"
      className="border border-gray-800 rounded-xl p-4 hover:border-white hover:-translate-y-1 transition block"
    >
      <img
        src="/images/dell_monitor_hero.png"
        alt="Dell 27 Monitor"
        className="rounded-lg mb-4 w-full object-cover aspect-[4/3]"
      />

      <h3 className="text-lg font-semibold">27” Dell Monitor</h3>

      <p className="text-gray-400 mt-1">$109</p>

      <p className="text-gray-500 mt-3 text-sm">
        Clean condition • Adjustable stand • Warranty through 2026
      </p>

      <span className="inline-block mt-4 text-sm underline">
        View →
      </span>
    </a>

  </div>
</section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20 border-t border-gray-800">

        <p className="text-xs tracking-widest text-gray-500 mb-2">
          SERVICES
        </p>

        <h2 className="text-3xl font-semibold mb-10">
          What AZPrimePC offers.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            ["Custom PC Builds", "Purpose-built systems tailored for gaming, productivity, and content creation."],
            ["Part Sourcing", "Get help choosing high-value, compatible parts."],
            ["Build-Only Service", "Already have parts? Get a clean professional assembly."],
            ["PC Upgrades", "Upgrade storage, RAM, GPU, cooling, and more."],
          ].map(([title, desc], i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-500 mt-2">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY ================= */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-20 border-t border-gray-800">

        <p className="text-xs tracking-widest text-gray-500 mb-2">
          WHY AZPRIMEPC
        </p>

        <h2 className="text-3xl font-semibold mb-10">
          Built to stand out for the right reasons.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            ["Clean Builds", "Cable management and layout that looks as good as it performs."],
            ["Performance Focused", "Parts selected for real-world value, not hype."],
            ["Built for You", "Every system tailored to your needs and budget."],
          ].map(([title, desc], i) => (
            <div key={i} className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-500 mt-2">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-20 border-t border-gray-800">

        <h2 className="text-3xl font-semibold text-center">
          Start the conversation.
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Tell us what you need and we’ll help design the right system.
        </p>

        <ContactForm />
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-8 text-sm text-gray-500 text-center space-y-4">

  <div>
    © 2026 Arizona Prime PC Co., LLC • Custom Performance Systems • Built Different.
  </div>

  <div className="flex justify-center gap-6">
    <a
      href="https://instagram.com/azprimepc"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
        alt="Instagram"
        className="w-6 h-6 invert hover:opacity-80 transition"
      />
    </a>

    <a
      href="https://www.facebook.com/share/1Git8zJaJ9/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
        alt="Facebook"
        className="w-6 h-6 invert hover:opacity-80 transition"
      />
    </a>
  </div>

</footer>

    </main>
  );
}
