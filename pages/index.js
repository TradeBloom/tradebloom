import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TradeBloom</title>
      </Head>
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold text-yellow-400">TradeBloom</h1>
        <p className="mt-4">Automate. Profit. Bloom.</p>
        <div className="mt-10 space-x-4">
          <a href="https://zignaly.com" className="bg-yellow-400 px-4 py-2 text-white rounded">Copy on Zignaly</a>
          <a href="https://wundertrading.com" className="bg-yellow-400 px-4 py-2 text-white rounded">Copy on WunderTrading</a>
        </div>
        <form className="mt-10" action="https://sheetdb.io/api/v1/33cvpka7flq3t" method="post">
          <input type="email" name="data[email]" placeholder="Enter your email" required className="p-2 rounded border"/>
          <button type="submit" className="ml-2 bg-yellow-400 px-4 py-2 text-white rounded">Subscribe</button>
        </form>
      </main>
    </div>
  )
}
