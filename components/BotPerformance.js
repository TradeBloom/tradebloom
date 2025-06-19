
import React from 'react';

const BotPerformance = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white">Bot Performance</h2>
      <p className="text-sm text-gray-300 mb-4">Live stats will be displayed here.</p>
      <div className="text-yellow-400">
        ROI: +12.5% | Total Trades: 148 | Win Rate: 91%
      </div>
      <div className="mt-4 space-x-4">
        <a href="https://zignaly.com" target="_blank" className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">Copy on Zignaly</a>
        <a href="https://wundertrading.com" target="_blank" className="bg-yellow-500 text-black font-bold py-2 px-4 rounded">Copy on Wunder</a>
      </div>
    </div>
  );
};

export default BotPerformance;
