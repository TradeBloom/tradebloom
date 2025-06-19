export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-yellow-400">TradeBloom</h1>
        <p className="text-sm mt-2">Automate. Profit. Bloom.</p>
      </header>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Bot Performance</h2>
        <p className="text-sm text-gray-300">Live stats will be displayed here.</p>
      </section>
      <section className="mb-6">
        <input type="email" placeholder="Enter your email" className="p-2 rounded text-black" />
        <button className="ml-2 bg-yellow-400 text-black px-4 py-2 rounded">Subscribe</button>
      </section>
      <footer className="flex space-x-4">
        <a href="#" className="text-sm text-white hover:text-yellow-400">Twitter</a>
        <a href="#" className="text-sm text-white hover:text-yellow-400">Telegram</a>
      </footer>
    </div>
  )
}
