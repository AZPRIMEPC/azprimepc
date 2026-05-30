what can we use other than "built different" right here.. 
had to change text-5xl and text-6xl to text-4xl and text-5xl so it'd be on one line
under Custom PC Builds (or somewhere) i'd like to add something about how the longer you look the more you see.. since i add the 3D printed covers etc.
how do I separate those lines?
visual question.. should I print a matte black piece that'll cover the MAG side of the PSU? I could make it to be all one piece with the shroud I designed under the PSU..
this failed to deploy
still not working
that's correct..
Pasted text(16).txt
Document
Drop the entire main page code again but with the images like they were before
Thought for a second

Yep — full app/page.tsx with build cards using photos and the same working image paths from your System #002 code.

export default function Home() {
  const builds = [
    {
      title: "System #001",
      price: "$849",
      image: "/images/system-001-hero.jpeg",
      desc: "Clean, ready-to-go gaming system with reduced pricing available now.",
      href: "/builds/system-001",
    },
    {
      title: "System #002",
      price: "$849",
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
man, it's all messed up. my entire header area is gone.. nav bar etc.
Thought for a few seconds

Yeah — that means your nav/header was inside the old app/page.tsx, and my replacement wiped it instead of preserving it. That’s on me.

Fastest fix in GitHub mobile:

Open the file you changed: app/page.tsx
Tap the clock/history icon or “View file history”
Open the version from before my paste
Copy the header/nav section from the top
Paste it above the homepage sections I gave you

Or easiest: revert that last commit, then send me the original full app/page.tsx, and I’ll modify only the build cards/photo areas without touching your nav/header.

Do not keep replacing the whole file until we have the original structure. That header/nav is probably custom code sitting above the homepage content.

Pasted text(17).txt
Document
this is the proper code i want.. just remove the memorial day stuff for me.. don't change anything else.. system 001 should be 849 and system 2 should be 799 now.. entire new code, go

Based on the code you uploaded, here's everything you need to change and nothing else.

Remove the entire Memorial Day banner section

Delete:

<section className="border-b border-red-900/40 bg-gradient-to-r from-red-950/60 via-black to-blue-950/50">
  <div className="mx-auto max-w-6xl px-6 py-3 text-center">
    <p className="text-sm md:text-base font-semibold tracking-wide">
      Memorial Day Sale • System #001 Now $849 • System #002 Listed at $849
    </p>
    <p className="text-xs text-gray-400 mt-1">
      Limited-time pricing through Friday 5/29.
    </p>
  </div>
</section>
Change hero section

Replace:

<p className="text-xs tracking-[0.35em] text-red-400 mb-4">
  MEMORIAL DAY SALE
</p>

with:

<p className="text-xs tracking-[0.35em] text-blue-300 mb-4">
  CUSTOM PERFORMANCE SYSTEMS
</p>

Replace:

View Sale Builds

with:

View Available Builds
System #001 card

Replace:

<div className="mt-2 flex items-center gap-3">
  <p className="text-gray-500 line-through">$1,099</p>
  <p className="text-red-400 font-semibold text-xl">$849</p>
</div>

<p className="text-xs uppercase tracking-wider text-red-300 mt-2">
  Memorial Day Sale
</p>

with:

<p className="text-blue-300 font-semibold text-xl mt-2">$849</p>
System #002 card

Replace:

<p className="text-red-400 font-semibold text-xl mt-2">$849</p>

<p className="text-xs uppercase tracking-wider text-red-300 mt-2">
  Memorial Day Sale
</p>

with:

<p className="text-blue-300 font-semibold text-xl mt-2">$799</p>
Dell monitor card

Replace:

<div className="mt-1 flex items-center gap-3">
  <p className="text-gray-500 line-through">$109</p>
  <p className="text-red-400 font-semibold">$79.99</p>
</div>

<p className="text-xs uppercase tracking-wider text-red-300 mt-2">
  Memorial Day Sale
</p>

with:

<p className="text-blue-300 font-semibold mt-1">$79.99</p>
Footer

Replace:

© 2026 Arizona Prime PC Co., LLC • Custom Performance Systems • Built Different.

with:

© 2026 Arizona Prime PC Co., LLC • Custom Performance Systems • Intentional by Design.

Those edits preserve your layout, navbar, images, links, cards, and styling while removing every Memorial Day reference and updating pricing to:

System #001 → $849
System #002 → $799
Dell Monitor → $79.99 (no sale wording)

without changing anything else.

Give me the full code so I don't have to hunt
Thought for a second

Yep — here’s the full updated main page code with Memorial Day removed, System #001 at $849, and System #002 at $799.

import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-blue-900/40 bg-black/70 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.12)]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-wide text-white hover:text-blue-300 transition">
            <span className="text-blue-300">AZ</span>PrimePC
          </Link>

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

            <p className="text-blue-300 font-semibold text-xl mt-2">$849</p>

            <p className="text-gray-500 mt-3 text-sm">
              Clean, compact performance build with optimized airflow and integrated display.
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

            <p className="text-blue-300 font-semibold text-xl mt-2">$799</p>

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
  );
}
can you add the specs for system 001 to match the layout for system 002? Drop the full code
Thought for a few seconds
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-blue-900/40 bg-black/70 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.12)]">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-wide text-white hover:text-blue-300 transition">
            <span className="text-blue-300">AZ</span>PrimePC
          </Link>

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

            <p className="text-blue-300 font-semibold text-xl mt-2">$849</p>

            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <p><span className="text-gray-300">CPU:</span> AMD Ryzen 5 5500</p>
              <p><span className="text-gray-300">Graphics:</span> XFX Radeon RX 6600 XT</p>
              <p><span className="text-gray-300">Memory:</span> 32GB DDR4 RAM</p>
              <p><span className="text-gray-300">Storage:</span> NVMe SSD storage</p>
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

            <p className="text-blue-300 font-semibold text-xl mt-2">$799</p>

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
  );
}
