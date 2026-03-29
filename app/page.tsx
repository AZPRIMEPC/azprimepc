import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black">
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
            className="bg-white text-black px-4 py-2 rounded-full text-sm"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-semibold leading-tight mb-4">
          Custom PCs Built Right.
        </h1>
        <p className="text-gray-400 max-w-xl">
          Performance-focused builds with clean aesthetics, proper airflow, and no shortcuts.
        </p>
      </section>

      {/* ================= FEATURED BUILDS ================= */}
      <section id="builds" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs tracking-widest text-gray-400 mb-2">
          FEATURED BUILDS
        </p>

        <h2 className="text-3xl font-semibold mb-10">
          Built for real-world performance.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Stealth Performance",
              price: "$1,199",
              desc: "Balanced performance for gaming and productivity with clean airflow and cable management.",
              image: "/images/stealth-performance.jpg",
              link: "/builds/stealth-performance",
            },
            {
              title: "Prime Creator",
              price: "$1499+",
              desc: "High-core performance systems for content creation, editing, and heavy workloads.",
              image: "",
              link: "#",
            },
            {
              title: "Compact Power",
              price: "$1099+",
              desc: "Small form factor builds with strong thermal planning and premium layout.",
              image: "",
              link: "#",
            },
          ].map((b, i) => (
            <Link
              key={i}
              href={b.link}
              className="border border-gray-800 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition block"
            >
              {b.image && (
                <img
                  src={b.image}
                  alt={b.title}
                  className="rounded-lg mb-4"
                />
              )}

              <h3 className="font-semibold text-lg">{b.title}</h3>

              <p className="text-gray-400 mt-1">{b.price}</p>

              <p className="text-gray-500 mt-4 text-sm">{b.desc}</p>

              <span className="inline-block mt-4 text-sm underline">
                View Build →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold mb-6">Start Your Build</h2>

        <form className="max-w-xl space-y-4">
          <textarea
            placeholder="What are you looking for?"
            className="w-full bg-black border border-gray-800 p-4 rounded"
          />

          <button className="w-full bg-white text-black py-4 rounded">
            Submit Request
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 AZPrimePC. Built Different.
      </footer>

    </main>
  );
}