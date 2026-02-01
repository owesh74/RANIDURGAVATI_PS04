import React, { useState } from 'react';

const SetupForm = ({ onStart }) => {
  const [config, setConfig] = useState({ domain: 'Java', difficulty: 'Medium' });

  return (
    <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl w-full max-w-lg animate-in zoom-in duration-500">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Setup Your Interview
      </h2>
      
      <div className="space-y-6">
        <label className="block">
          <span className="text-slate-400 font-semibold mb-2 block">Select Domain</span>
          <select 
            className="w-full p-4 bg-slate-900 rounded-xl border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={config.domain}
            onChange={(e) => setConfig({...config, domain: e.target.value})}
          >
            {['Java', 'Python', 'DSA', 'ML', 'HR', 'Cloud'].map(d => <option key={d}>{d}</option>)}
          </select>
        </label>

        <div>
          <span className="text-slate-400 font-semibold mb-2 block">Difficulty Level</span>
          <div className="grid grid-cols-3 gap-3">
            {['Easy', 'Medium', 'Hard'].map(level => (
              <button
                key={level}
                onClick={() => setConfig({...config, difficulty: level})}
                className={`py-3 rounded-xl font-bold transition-all border ${
                  config.difficulty === level 
                  ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-900/40' 
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-400'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => onStart(config)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 py-4 rounded-2xl font-black text-lg shadow-xl transition-all transform hover:scale-[1.02] active:scale-95 mt-4"
        >
          Start Interview
        </button>
      </div>
    </div>
  );
};

export default SetupForm;