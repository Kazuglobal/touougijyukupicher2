import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const pitcherData = [
  {
    name: '小野優晟',
    leftFirstStrike: 40,
    rightFirstStrike: 80,
    leftOverallStrike: 55,
    rightOverallStrike: 71,
    overallFirstStrike: 63,
    overallStrike: 61
  },
  {
    name: '成田玲央',
    leftFirstStrike: 36,
    rightFirstStrike: 29,
    leftOverallStrike: 81,
    rightOverallStrike: 59,
    overallFirstStrike: 32,
    overallStrike: 65
  },
  {
    name: '本多茂仁',
    leftFirstStrike: 63,
    rightFirstStrike: 67,
    leftOverallStrike: 71,
    rightOverallStrike: 59,
    overallFirstStrike: 69,
    overallStrike: 66
  }
];

const PitcherDashboard = () => {
  const [selectedPitcher, setSelectedPitcher] = useState(pitcherData[0]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">東奥義塾投手分析ダッシュボード</h1>
      
      <div className="flex justify-center mb-6">
        {pitcherData.map((pitcher) => (
          <button
            key={pitcher.name}
            className={`px-4 py-2 mx-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              selectedPitcher.name === pitcher.name ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={() => setSelectedPitcher(pitcher)}
          >
            {pitcher.name}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">{selectedPitcher.name}の投球分析</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={[selectedPitcher]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="leftFirstStrike" name="左打者初球ストライク率" fill="#8884d8" />
            <Bar dataKey="rightFirstStrike" name="右打者初球ストライク率" fill="#82ca9d" />
            <Bar dataKey="leftOverallStrike" name="左打者全体ストライク率" fill="#ffc658" />
            <Bar dataKey="rightOverallStrike" name="右打者全体ストライク率" fill="#ff8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">全投手比較</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={pitcherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="overallFirstStrike" name="全体初球ストライク率" fill="#8884d8" />
            <Bar dataKey="overallStrike" name="全体ストライク率" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PitcherDashboard;
