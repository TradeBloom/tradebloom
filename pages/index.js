import Header from '../components/Header';
import BotPerformance from '../components/BotPerformance';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Header />
      <main className="px-6 py-10">
        <BotPerformance />
        <div className="flex space-x-4 mt-4">
          <a href="https://zignaly.com/copy-bot" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black font-bold">Copy on Zignaly</a>
          <a href="https://wundertrading.com/copy-bot" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 text-black font-bold">Copy on Wunder</a>
        </div>
        <About />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}