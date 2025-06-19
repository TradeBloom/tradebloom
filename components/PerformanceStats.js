export default function PerformanceStats() {
  return (
    <section className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-4">Bot Performance</h2>
      <p>Live ROI: 12.5%</p>
      <p>Trade Stats: 85 closed, 90.2% win rate</p>
      <div className="mt-4">
        <a href="https://zignaly.com" className="bg-yellow-400 text-black px-4 py-2 rounded mr-2">Copy on Zignaly</a>
        <a href="https://wundertrading.com" className="bg-blue-400 text-white px-4 py-2 rounded">Copy on WunderTrading</a>
      </div>
    </section>
  );
}