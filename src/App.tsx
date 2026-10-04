function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6 py-16 text-white">
      <section className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 sm:p-12">
        <div className="mb-8 inline-flex size-14 items-center justify-center rounded-2xl bg-lime-300 text-xl font-black text-gray-950">
          G
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-300">
          Admin dashboard
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to GymHood
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-300">
          Your React app is ready. Start building your gym management experience
          with Tailwind CSS.
        </p>
        <a
          className="mt-8 inline-flex rounded-xl bg-lime-300 px-5 py-3 font-semibold text-gray-950 transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          href="https://react.dev"
        >
          Explore React
        </a>
      </section>
    </main>
  )
}

export default App
