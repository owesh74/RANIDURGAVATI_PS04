import React, { useState } from 'react';

const SetupForm = ({ onStart }) => {
  const [config, setConfig] = useState({ domain: 'Java', difficulty: 'Medium' });

  return (
    <div className="p-8 bg-slate-800 rounded-xl shadow-2xl w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Setup Your Interview</h2>
      
      <label className="block mb-4">
        <span className="text-gray-400">Select Domain</span>
        <select 
          className="w-full mt-1 p-2 bg-slate-700 rounded border border-slate-600 focus:border-blue-500 outline-none"
          value={config.domain}
          onChange={(e) => setConfig({...config, domain: e.target.value})}
        >
          {['Java', 'Python', 'DSA', 'ML', 'HR', 'Cloud'].map(d => <option key={d}>{d}</option>)}
        </select>
      </label>

      <label className="block mb-6">
        <span className="text-gray-400">Difficulty</span>
        <div className="flex gap-2 mt-2">
          {['Easy', 'Medium', 'Hard'].map(level => (
            <button
              key={level}
              onClick={() => setConfig({...config, difficulty: level})}
              className={`flex-1 py-2 rounded transition ${config.difficulty === level ? 'bg-blue-600' : 'bg-slate-700 hover:bg-slate-600'}`}
            >
              {level}
            </button>
          ))}
        </div>
      </label>

      <button 
        onClick={() => onStart(config)}
        className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
      >
        Start Interview
      </button>
    </div>
  );
};

export default SetupForm;