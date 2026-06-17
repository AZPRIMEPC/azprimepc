import Link from "next/link";import ContactForm from "./ContactForm";

export default function Home() {return (AZPrimePC

      <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#builds" className="hover:text-white transition">Builds</a>
        <Link href="/available" className="hover:text-white transition">Available</Link>
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#why" className="hover:text-white transition">Why Us</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>

      <a
        href="https://buy.stripe.com/cNi7sN3UWc7A3GQ7eV3Ru01"
        className="hidden sm:inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-blue-300 transition"
      >
        Start a Build
      </a>
    </div>
  </header>

  <section id="home" className="mx-auto max-w-6xl px-6 py-20">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-xs tracking-[0.35em] text-blue-300 mb-4">
          CUSTOM PERFORMANCE SYSTEMS
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Intentional by Design.
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          Precision-built systems with optimized airflow, clean cable management, and performance-focused components.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#builds" className="bg-white text-black px-6 py-3 rounded-lg">
            View Available Builds
          </a>

          <a
            href="https://buy.stripe.com/cNi7sN3UWc7A3GQ7eV3Ru01"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black"
          >
            Start Your Build
          </a>
        </div>
      </div>

      <img
        src="/images/SYS002SHOPBG-OG-1.PNG.jpg"
        alt="AZ Prime PC System 002"
        className="rounded-2xl border border-gray-800 shadow-[0_0_60px_rgba(239,68,68,0.18)]"
      />
    </div>
  </section>

  <section id="builds" className="mx-auto max-w-6xl px-6 py-20 border-t border-gray-800">
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
          src="/images/SYS001SHOPBG-1.PNG.png"
          alt="System 001"
          className="rounded-lg mb-4 w-full object-cover aspect-[4/3]"
        />

        <h3 className="text-lg font-semibold">System #001</h3>

        <p className="text-blue-300 font-semibold text-xl mt-2">$700</p>

        <div className="mt-4 text-sm text-gray-400 space-y-1">
          <p><span className="text-gray-300">CPU:</span> AMD Ryzen 5 5500</p>
          <p><span className="text-gray-300">Motherboard</span> Gigabyte A520I AC (Mini-ITX, WiFi)</p>
          <p><span className="text-gray-300">Graphics:</span> XFX Radeon RX 6600 XT</p>
          <p><span className="text-gray-300">Memory:</span> 32GB DDR4 RAM</p>
          <p><span className="text-gray-300">Storage:</span> 2TB WD_Black SN7100 NVMe M.2 SSD</p>
          <p><span className="text-gray-300">Display:</span> Integrated system monitoring screen</p>
        </div>

        <p className="text-gray-500 mt-4 text-sm">
          Clean, compact performance build with optimized airflow, dedicated Radeon graphics,
          and integrated display.
        </p>

        <span className="inline-block mt-4 text-sm underline">
          View Build →
        </span>
      </Link>

      <Link
        href="/builds/system-002"
        className="border border-gray-800 rounded-xl p-4 hover:border-white hover:-translate-y-1 transition block"
      >
        <img
          src="/images/SYS002SHOPBG-OG-1.PNG.jpg"
          alt="System 002"
          className="rounded-lg mb-4 w-full object-cover aspect-[4/3]"
        />

        <h3 className="text-lg font-semibold">System #002</h3>

        <p className="text-blue-300 font-semibold text-xl mt-2">$600</p>

        <div className="mt-4 text-sm text-gray-400 space-y-1">
          <p><span className="text-gray-300">CPU:</span> AMD Ryzen 7 5700G</p>
          <p><span className="text-gray-300">Motherboard:</span> ASUS TUF Gaming B550-PLUS WiFi II</p>
          <p><span className="text-gray-300">Memory:</span> 32GB Corsair Vengeance LPX DDR4</p>
          <p><span className="text-gray-300">Storage:</span> 2TB total WD Blue NVMe SSD storage</p>
          <p><span className="text-gray-300">Cooling:</span> Thermalright Phantom Spirit 120 Digital EVO</p>
        </div>

        <p className="text-gray-500 mt-4 text-sm">
          High-airflow NZXT H5 Flow RGB build with synchronized NZXT lighting,
          clean cable management, and a liquid cooling upgrade option.
        </p>

        <span className="inline-block mt-4 text-sm underline">
          View Build →
        </span>
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

        <p className="text-blue-300 font-semibold mt-1">$79.99</p>

        <p className="text-gray-500 mt-3 text-sm">
          Clean condition • Adjustable stand • Warranty through 2026
        </p>

        <span className="inline-block mt-4 text-sm underline">
          View →
        </span>
      </a>
    </div>
  </section>

  <section id="services" className="mx-auto max-w-6xl px-6 py-20 border-t border-gray-800">
    <p className="text-xs tracking-widest text-gray-500 mb-2">
      SERVICES
    </p>

    <h2 className="text-3xl font-semibold mb-10">
      What AZPrimePC offers.
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        [
          "Custom PC Builds",
          <>
            Purpose-built systems tailored for gaming, productivity, and content creation.
            <br />
            Designed for people who notice details.
          </>
        ],
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

  <section id="contact" className="mx-auto max-w-4xl px-6 py-20 border-t border-gray-800">
    <h2 className="text-3xl font-semibold text-center">
      Start the conversation.
    </h2>

    <p className="text-gray-400 text-center mt-4">
      Tell us what you need and we’ll help design the right system.
    </p>

    <ContactForm />
  </section>

  <footer className="border-t border-gray-800 py-8 text-sm text-gray-500 text-center space-y-4">
    <div>
      © 2026 Arizona Prime PC Co., LLC • Custom Performance Systems • Intentional by Design.
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
