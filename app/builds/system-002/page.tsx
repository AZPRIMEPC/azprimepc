export default function System002() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-red-400 mb-2">
        Memorial Day Sale
      </p>

      <h1 className="text-4xl font-bold mb-4">System #002</h1>

      <div className="mb-8 rounded-xl border border-red-900/50 bg-red-950/20 p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-red-300 mb-2">
          Limited-Time Pricing Through Friday 5/29
        </p>

        <p className="text-3xl font-bold text-white">$899</p>

        <p className="text-gray-400 text-sm mt-2">
          NZXT H5 Flow RGB build with Ryzen 7 performance, 32GB RAM, 2TB NVMe storage,
          synchronized NZXT RGB lighting, and a liquid cooling upgrade option.
        </p>
      </div>

      <p className="text-gray-400 max-w-2xl mb-10">
        System #002 is a clean, performance-focused build assembled with precision airflow,
        organized cable management, synchronized NZXT aRGB lighting, and an upgrade-ready
        design built to evolve with the user.
      </p>

      <div className="mb-10">
        <img
          src="/images/SYS002SHOPBG-1.PNG.png"
          alt="System #002 featured workshop hero image"
          className="rounded-xl w-full object-cover aspect-[16/9] border border-gray-800 shadow-[0_0_60px_rgba(239,68,68,0.16)]"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-10">
        <img
          src="/images/SYS002WBG-2.PNG.png"
          alt="System #002 white background product photo"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />

        <img
          src="/images/SYS002WBG-1.PNG.png"
          alt="System #002 alternate white background product photo"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />

        <img
          src="/images/SYS002TECHBG-1.PNG.png"
          alt="System #002 neon tech background photo"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />

        <img
          src="/images/SYS002WGAMER-1.PNG.png"
          alt="System #002 white gamer room background photo"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />

        <img
          src="/images/system-002-build-3.jpeg"
          alt="System #002 NZXT case with front airflow fans"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />

        <img
          src="/images/system-002-build-1.jpeg"
          alt="System #002 ASUS TUF motherboard with Ryzen 7 and Corsair memory"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />

        <img
          src="/images/system-002-build-2.jpeg"
          alt="System #002 CPU cooler test fit"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />

        <img
          src="/images/system-002-build-4.jpeg"
          alt="System #002 motherboard detail shot"
          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"
        />
      </div>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Core Specs</h2>

          <div className="text-sm text-gray-400 space-y-2">
            <p><span className="text-gray-300">CPU:</span> AMD Ryzen 7 5700G</p>
            <p><span className="text-gray-300">Motherboard:</span> ASUS TUF Gaming B550-PLUS WiFi II AMD AM4</p>
            <p><span className="text-gray-300">Memory:</span> CORSAIR Vengeance LPX DDR4 RAM 32GB (4x8)</p>
            <p><span className="text-gray-300">Storage:</span> Western Digital WD Blue SN5000 1TB NVMe SSD x2</p>
            <p><span className="text-gray-300">Power Supply:</span> MSI MAG A850GL PCIE5, fully modular compact gaming 850W</p>
            <p><span className="text-gray-300">Case:</span> NZXT H5 Flow RGB 2024 Compact ATX Mid-Tower</p>
            <p><span className="text-gray-300">Fans:</span> NZXT F240 RGB Core 240mm Single-Frame Fan Unit x2</p>
            <p><span className="text-gray-300">Front Fans:</span> NZXT F360 RGB Core 360mm Single-Frame Fan Unit</p>
            <p><span className="text-gray-300">RGB Control:</span> NZXT Control Hub digital RGB lighting and PWM fan speed controller</p>
            <p><span className="text-gray-300">Cooling:</span> Thermalright Phantom Spirit 120 Digital EVO</p>
            <p><span className="text-gray-300">Upgrade Option:</span> Liquid cooled upgrade available</p>
          </div>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Build Direction</h2>

          <p className="text-sm text-gray-400 leading-6">
            System #002 is built around clean presentation, strong airflow,
            synchronized NZXT RGB lighting, and premium component visibility.
            The H5 Flow RGB case, NZXT single-frame fans, and Thermalright
            digital cooler give the system a high-end look while keeping the
            build practical, serviceable, and upgrade-ready.
          </p>

          <p className="mt-4 text-sm text-blue-300 leading-6">
            Optional GPU upgrade available. We actively source great-value
            graphics cards through Marketplace, open-box, and retail deals to
            maximize performance per dollar.
          </p>

          <div className="mt-6 border-t border-gray-800 pt-5">
            <p className="text-sm uppercase tracking-[0.2em] text-red-300">
              Memorial Day Sale Price
            </p>

            <p className="text-3xl font-bold mt-2">$899</p>

            <p className="text-gray-500 text-sm mt-2">
              Sale pricing available through Friday 5/29.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
