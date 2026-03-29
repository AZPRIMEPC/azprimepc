export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-wide">AZPrimePC</div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#builds" className="hover:text-white transition">Builds</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#why" className="hover:text-white transition">Why Us</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded-full text-sm hover:opacity-80 transition"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="mx-auto max-w-6xl px-6 py-20 md:py-24">

        <p className="mb-6 text-xs tracking-[0.35em] text-gray-400">
          ARIZONA PRIME PC CO.
        </p>

        <h1 className="max-w-4xl text-5xl md:text-6xl font-semibold leading-tight">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Built Different.
          </span>
          <br />
          Precision-built PCs designed for performance, airflow, and clean aesthetics.
        </h1>

        <p className="mt-6 max-w-xl text-gray-400">
          Custom systems built with intention. Whether you need a clean productivity machine,
          a gaming rig, or a premium custom setup, AZPrimePC delivers hardware that feels refined,
          balanced, and worth the investment.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#builds"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            View Builds
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:border-white hover:scale-105 transition"
          >
            Start Your Build
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Built with intention. Clean layouts, optimized airflow, and zero wasted parts.
        </p>
      </section>

      {/* ================= BUILDS ================= */}
      <section id="builds" className="mx-auto max-w-6xl px-6 py-20 border-t border-gray-800">
        <p className="text-xs tracking-[0.3em] text-gray-400">FEATURED BUILDS</p>

        <h2 className="mt-4 text-3xl font-semibold">
          Built for real-world performance.
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Stealth Performance",
              price: "$1,199",
              desc: "Balanced performance for gaming and productivity with clean airflow and cable management.",
            },
            {
              title: "Prime Creator",
              price: "$1499+",
              desc: "High-core performance systems for content creation, editing, and heavy workloads.",
            },
            {
              title: "Compact Power",
              price: "$1099+",
              desc: "Small form factor builds with strong thermal planning and premium layout.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition"
            >

              {/* IMAGE (only for first card) */}
              {i === 0 && (
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src="/images/stealth-performance.jpg"
                    alt="Stealth Performance Build"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="text-gray-400 mt-1">From {b.price}</p>
              <p className="text-gray-500 mt-4">{b.desc}</p>

              <a
                href="#contact"
                className="inline-block mt-6 underline hover:text-white transition"
              >
                Ask About This Build →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20 border-t border-gray-800">

        <p className="text-xs tracking-[0.3em] text-gray-400">SERVICES</p>

        <h2 className="mt-4 text-3xl font-semibold">
          What AZPrimePC offers.
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          {[
            ["Custom PC Builds", "Purpose-built systems tailored for gaming, productivity, and content creation."],
            ["Part Sourcing", "Get help choosing high-value, compatible parts without wasting money."],
            ["Build-Only Service", "Already have parts? Get a clean, optimized professional assembly."],
            ["PC Upgrades", "Upgrade your system with storage, RAM, GPU, cooling, and more."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="text-gray-500 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-20 border-t border-gray-800">

        <p className="text-xs tracking-[0.3em] text-gray-400">WHY AZPRIMEPC</p>

        <h2 className="mt-4 text-3xl font-semibold">
          Built to stand out for the right reasons.
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {[
            ["Clean Builds", "Thoughtful cable management and airflow that looks as good as it performs."],
            ["Performance Focused", "Parts selected for real-world value, not hype."],
            ["Built for You", "Every system is tailored to your needs and budget."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition"
            >
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

        <form className="mt-10 space-y-4">

          <input
            placeholder="Name"
            className="w-full bg-black border border-gray-800 p-4 rounded-lg"
          />

          <input
            placeholder="Email"
            className="w-full bg-black border border-gray-800 p-4 rounded-lg"
          />

          <input
            placeholder="Budget range"
            className="w-full bg-black border border-gray-800 p-4 rounded-lg"
          />

          <textarea
            placeholder="What are you looking for?"
            className="w-full bg-black border border-gray-800 p-4 rounded-lg h-32"
          />

          <button className="w-full bg-white text-black py-4 rounded-lg font-medium hover:opacity-80 transition">
            Submit Request
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-8 text-sm text-gray-500 text-center">
        © 2026 AZPrimePC. Built Different.
      </footer>

    </main>
  );
}