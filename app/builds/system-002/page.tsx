export default function System002() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
        Build in Progress
      </p>

      <h1 className="text-4xl font-bold mb-4">System #002</h1>

      <p className="text-gray-400 max-w-2xl mb-10">
        System #002 is currently in production. This stealth-focused build is being assembled with precision airflow, clean cable management, synchronized aRGB via NZXT CAM, and an upgrade-ready design.
      </p>

      <div className="grid gap-4 md:grid-cols-2 mb-10">
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
            <p><span className="text-gray-300">CPU:</span> Ryzen 7 5700G</p>
            <p><span className="text-gray-300">Motherboard:</span> ASUS TUF B550-Plus WiFi II</p>
            <p><span className="text-gray-300">Memory:</span> 32GB (4x8) Corsair Vengeance DDR4</p>
            <p><span className="text-gray-300">Cooling:</span> Thermalright Phantom Spirit 120 Digital EVO</p>
            <p><span className="text-gray-300">Case:</span> NZXT H5 Flow RGB</p>
            <p><span className="text-gray-300">Graphics:</span> Custom-installed GPU</p>
          </div>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Build Direction</h2>

          <p className="text-sm text-gray-400 leading-6">
            System #002 is being built as a clean, stealth-focused performance platform with strong airflow, real-time system display integration, and room for a dedicated graphics card. Final GPU selection can be matched to the buyer’s performance goals and budget.
          </p>

          <p className="mt-4 text-blue-300">
            Starting at: $XXX
          </p>
        </div>
      </section>
    </main>
  );
}
