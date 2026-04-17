export default function AvailablePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div className="text-xl font-semibold">AZPrimePC</div>
        <a href="/" className="text-sm text-gray-400 hover:text-white">
          ← Back to AZ Prime
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src="/images/dell_monitor_hero.png"
            alt="Dell 27 Monitor"
            className="rounded-xl w-full object-cover mb-6"
          />

          <img
            src="/images/dell_monitor_frontback.png"
            alt="Dell 27 Monitor front and back"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold mb-4">27” Dell Monitor</h1>

          <p className="text-2xl text-white mb-6">$109</p>

          <p className="text-gray-300 leading-8 mb-6">
            Clean 27-inch Dell monitor with a modern look and adjustable stand.
            Great for work, gaming, or a clean dual-monitor setup.
          </p>

          <p className="text-gray-300 leading-8 mb-8">
            Includes height-adjustable stand and active Dell warranty through 2026.
            A solid standalone display or an easy add-on to any AZ Prime PC build.
          </p>

          <a
            href="/#contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm hover:opacity-90 transition"
          >
            Inquire About This Item
          </a>
        </div>
      </div>
    </section>
  );
}
