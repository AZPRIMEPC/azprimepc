export default function Home() {
  const builds = [
    {
      title: "System #001",
      price: "$849",
      image: "stealth-performance.jpg",
      desc: "Clean, ready-to-go gaming system with reduced pricing available now.",
      href: "/builds/system-001",
    },
    {
      title: "System #002",
      price: "$799",
      image: "/images/SYS002SHOPBG-1.PNG.png",
      desc: "NZXT H5 Flow RGB build with Ryzen 7 performance, 32GB RAM, 2TB NVMe storage, and upgrade-ready design.",
      href: "/builds/system-002",
    },
  ];

  const services = [
    [
      "Custom PC Builds",
      <>
        Purpose-built systems tailored for gaming, productivity, and content creation.
        <br />
        Designed for people who notice details.
      </>,
    ],
    ["Part Sourcing", "Get help choosing high-value, compatible parts."],
    ["Build-Only Service", "Already have parts? Get a clean professional assembly."],
    ["PC Upgrades", "Upgrade storage, RAM, GPU, cooling, and more."],
  ];

  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-red-400">
            Current Reduced Pricing
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Intentional by Design.
          </h1>

          <p className="mb-8 max-w-xl text-gray-400">
            Clean layouts, optimized airflow, carefully selected parts, and custom
            touches built into every system. Current pricing is reduced while
            available builds are in stock.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#available"
              className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View Available Builds
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-gray-700 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
            >
              Start Your Build
            </a>
          </div>
        </div>

        <div>
          <img
            src="/images/SYS002SHOPBG-1.PNG.png"
            alt="AZPrimePC custom PC build in workshop setting"
            className="aspect-[4/5] w-full rounded-xl border border-gray-800 object-cover shadow-[0_0_70px_rgba(239,68,68,0.14)]"
          />
        </div>
      </section>

      <section
        id="available"
        className="mx-auto max-w-6xl border-t border-gray-800 px-6 py-20"
      >
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-red-400">
          Available Builds
        </p>

        <h2 className="mb-10 text-3xl font-semibold">
          Reduced pricing. Ready systems.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {builds.map((build) => (
            <a
              key={build.title}
              href={build.href}
              className="group overflow-hidden rounded-xl border border-gray-800 transition hover:border-white"
            >
              <img
                src={build.image}
                alt={build.title}
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{build.title}</h3>
                  <p className="text-2xl font-bold text-white">{build.price}</p>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {build.desc}
                </p>

                <p className="mt-5 text-sm text-blue-300">View build details →</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-gray-800 px-6 py-20">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500">
          Gallery
        </p>

        <h2 className="mb-10 text-3xl font-semibold">Recent Build Details</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <img
            src="/images/SYS002SHOPBG-1.PNG.png"
            alt="System #002 workshop hero image"
            className="aspect-[4/3] w-full rounded-xl border border-gray-800 object-cover"
          />

          <img
            src="/images/SYS002WBG-1.PNG.png"
            alt="System #002 white background product photo"
            className="aspect-[4/3] w-full rounded-xl border border-gray-800 object-cover"
          />

          <img
            src="/images/SYS002WBG-2.PNG.png"
            alt="System #002 alternate white background product photo"
            className="aspect-[4/3] w-full rounded-xl border border-gray-800 object-cover"
          />

          <img
            src="/images/SYS002TECHBG-1.PNG.png"
            alt="System #002 neon tech background photo"
            className="aspect-[4/3] w-full rounded-xl border border-gray-800 object-cover"
          />

          <img
            src="/images/SYS002WGAMER-1.PNG.png"
            alt="System #002 gamer room background photo"
            className="aspect-[4/3] w-full rounded-xl border border-gray-800 object-cover"
          />

          <img
            src="/images/system-002-build-1.jpeg"
            alt="System #002 motherboard and memory detail"
            className="aspect-[4/3] w-full rounded-xl border border-gray-800 object-cover"
          />
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-6xl border-t border-gray-800 px-6 py-20"
      >
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500">
          Services
        </p>

        <h2 className="mb-10 text-3xl font-semibold">What AZPrimePC offers.</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(([title, desc]) => (
            <div
              key={title as string}
              className="rounded-xl border border-gray-800 p-6 transition hover:border-white"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="why"
        className="mx-auto max-w-6xl border-t border-gray-800 px-6 py-20"
      >
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500">
          Why AZPrimePC
        </p>

        <h2 className="mb-6 text-3xl font-semibold">More than a parts list.</h2>

        <p className="max-w-3xl leading-7 text-gray-400">
          Every build is assembled with airflow, cable management, component
          layout, serviceability, and presentation in mind. The longer you look,
          the more you see.
        </p>
      </section>
    </main>
  );
}
