import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/globals.css'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <Head>
        <title>TradeBloom</title>
      </Head>

      <header className="text-center mb-10">
        <img src="/logo.gif" alt="TradeBloom Logo" className="mx-auto w-32" />
        <h1 className="text-4xl font-bold mt-4">Automate. Profit. Bloom.</h1>
        <p className="text-lg mt-2">Join the future of smart crypto trading</p>
      </header>

      <section className="text-center my-10">
        <h2 className="text-2xl font-semibold mb-4">Bot Performance</h2>
        <p>Live ROI: +8.3%</p>
        <p>Trades Today: 12</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="bg-yellow-400 text-black px-4 py-2 rounded">Copy on Zignaly</a>
          <a href="#" className="bg-yellow-400 text-black px-4 py-2 rounded">Copy on WunderTrading</a>
        </div>
      </section>

      <section className="text-center my-10">
        <h2 className="text-2xl font-semibold mb-4">Get Updates</h2>
        <form action="https://sheetdb.io/api/v1/33cvpka7flq3t" method="POST" className="space-y-4">
          <input type="email" name="data[email]" placeholder="Enter your email" className="px-4 py-2 rounded text-black" required />
          <button type="submit" className="bg-yellow-400 text-black px-6 py-2 rounded">Subscribe</button>
        </form>
      </section>

      <footer className="text-center mt-20">
        <div className="flex justify-center gap-4">
          <a href="#"><img src="/twitter.svg" alt="X" className="w-6" /></a>
          <a href="#"><img src="/telegram.svg" alt="Telegram" className="w-6" /></a>
        </div>
        <p className="mt-4 text-sm">© 2025 TradeBloom. All rights reserved.</p>
      </footer>
    </div>
  )
}