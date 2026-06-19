export default function System001() {

  return (

    <main className="mx-auto max-w-5xl px-6 py-20">

      <p className="text-xs uppercase tracking-[0.25em] text-red-300 mb-2">

        Recently Sold

      </p>

      <h1 className="text-4xl font-bold mb-4">System #001</h1>

      <div className="mb-8 rounded-xl border border-red-900/50 bg-red-950/20 p-5">

        <p className="text-sm uppercase tracking-[0.2em] text-red-300 mb-2">

          Build Status

        </p>

        <p className="text-3xl font-bold text-white">Sold</p>

        <p className="text-gray-400 text-sm mt-2">

          Compact Mini-ITX gaming build featuring a Ryzen 5 5500, XFX Radeon RX 6600 XT,

          32GB DDR4 memory, 2TB WD_BLACK NVMe storage, and an integrated system monitoring display.

        </p>

      </div>

      <p className="text-gray-400 max-w-2xl mb-10">

        System #001 was designed as a compact performance-focused build with dedicated Radeon graphics,

        efficient airflow, clean cable management, custom detailing, and integrated system monitoring.

        Despite its small footprint, it delivers strong 1080p gaming performance while maintaining a clean,

        professional appearance.

      </p>

      <div className="relative mb-10">

        <img

          src="/images/SYS001SHOPBG-1.PNG.png"

          alt="System #001 featured hero image"

          className="rounded-xl w-full object-cover aspect-[16/9] border border-gray-800 shadow-[0_0_60px_rgba(59,130,246,0.16)]"

        />

        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/50">

          <span className="rotate-[-14deg] border-4 border-white px-12 py-4 text-5xl md:text-7xl font-black tracking-[0.2em] text-white">

            SOLD

          </span>

        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-10">

        <img

          src="/images/SYS001SHOPBG-1.PNG.png"

          alt="System #001 shop background product photo"

          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"

        />

        <img

          src="/images/SYS001SHOPBG-1.PNG.png"

          alt="System #001 alternate product photo"

          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"

        />

        <img

          src="/images/SYS001SHOPBG-1.PNG.png"

          alt="System #001 compact gaming PC detail photo"

          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"

        />

        <img

          src="/images/SYS001SHOPBG-1.PNG.png"

          alt="System #001 airflow and lighting photo"

          className="rounded-lg w-full object-cover aspect-[4/3] border border-gray-800"

        />

      </div>

      <section className="grid gap-8 md:grid-cols-2">

        <div className="border border-gray-800 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">Core Specs</h2>

          <div className="text-sm text-gray-400 space-y-2">

            <p><span className="text-gray-300">CPU:</span> AMD Ryzen 5 5500</p>

            <p><span className="text-gray-300">Motherboard:</span> Gigabyte A520I AC Mini-ITX WiFi</p>

            <p><span className="text-gray-300">Graphics:</span> XFX Radeon RX 6600 XT 8GB</p>

            <p><span className="text-gray-300">Memory:</span> 32GB DDR4 RAM</p>

            <p><span className="text-gray-300">Storage:</span> WD_BLACK SN7100 2TB NVMe M.2 SSD</p>

            <p><span className="text-gray-300">Power Supply:</span> MSI MAG 650W 80+ Gold Power Supply</p>

            <p><span className="text-gray-300">Case:</span> Compact Mini-ITX Performance Chassis</p>

            <p><span className="text-gray-300">Cooling:</span> Thermalright Low-Profile CPU Cooler</p>

            <p><span className="text-gray-300">Display:</span> Integrated system monitoring screen</p>

            <p><span className="text-gray-300">Status:</span> Sold</p>

          </div>

        </div>

        <div className="border border-gray-800 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">Build Direction</h2>

          <p className="text-sm text-gray-400 leading-6">

            System #001 was built around compact performance, clean presentation, dedicated graphics,

            and thoughtful airflow. The build was designed to feel intentional from every angle,

            with a small footprint, strong component selection, and details that reward a closer look.

          </p>

          <p className="mt-4 text-sm text-blue-300 leading-6">

            This build has sold, but similar compact gaming systems can be built around budget,

            performance goals, preferred case style, and upgrade plans.

          </p>

          <div className="mt-6 border-t border-gray-800 pt-5">

            <p className="text-sm uppercase tracking-[0.2em] text-red-300">

              Build Status

            </p>

            <p className="text-3xl font-bold mt-2">Sold</p>

            <p className="text-gray-500 text-sm mt-2">

              Recently completed AZPrimePC build.

            </p>

          </div>

        </div>

      </section>

    </main>

  );

}