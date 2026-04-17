export default function AvailablePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-semibold mb-10">Available Now</h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-neutral-800 rounded-xl p-4 hover:border-neutral-600 transition">
          <img
            src="/images/dell_monitor_hero.png"
            alt="Dell 27 Monitor"
            className="rounded-lg mb-4 w-full"
          />

          <h3 className="text-lg font-semibold">27” Dell Monitor</h3>

          <p className="text-gray-400 text-sm mt-1">
            Clean condition • Adjustable stand • Warranty through 2026
          </p>

          <p className="text-white mt-3 font-semibold">$109</p>

          <a
            href="/contact"
            className="inline-block mt-3 text-sm text-white underline"
          >
            Inquire →
          </a>
        </div>

      </div>
    </section>
  );
}
