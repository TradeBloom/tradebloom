import Head from 'next/head';
import Navbar from '../components/Navbar';
import PerformanceStats from '../components/PerformanceStats';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TradeBloom</title>
      </Head>
      <Navbar />
      <main className="text-white p-8">
        <h1 className="text-4xl font-bold">Automate. Profit. Bloom.</h1>
        <PerformanceStats />
      </main>
    </div>
  );
}