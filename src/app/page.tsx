export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/forside.png')",
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center text-center">
          <h1 className="text-[3em] md:text-[5em] font-great-vibes mt-48 mb-16">
            Helene og Mathias
          </h1>

          <div className="text-xl md:text-3xl grid gap-4">
            <p className="font-semibold">2. august 2025</p>
            <p className="font-[200]">Mer informasjon kommer</p>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
    </div>
  );
}
