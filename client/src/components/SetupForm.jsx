import React, { useState } from 'react';

const SetupForm = ({ onStart }) => {
  const [config, setConfig] = useState({ 
    domain: 'Java', 
    difficulty: 'Medium',
    rounds: null // Auto-determined by difficulty
  });

  const domains = [
    { value: 'Java', icon: '', color: 'orange' },
    { value: 'Python', icon: '', color: 'blue' },
    { value: 'DSA', icon: '', color: 'purple' },
    { value: 'ML', icon: '', color: 'emerald' },
    { value: 'HR', icon: '', color: 'cyan' },
    { value: 'Cloud', icon: '', color: 'sky' }
  ];

  const difficultyLevels = [
    { 
      level: 'Easy', 
      rounds: 5, 
      icon: '🌱',
      description: 'Perfect for beginners',
      color: 'from-green-600 to-green-500'
    },
    { 
      level: 'Medium', 
      rounds: 10, 
      icon: '⚡',
      description: 'Standard preparation',
      color: 'from-blue-600 to-blue-500'
    },
    { 
      level: 'Hard', 
      rounds: 20, 
      icon: '🔥',
      description: 'Expert challenge',
      color: 'from-red-600 to-red-500'
    }
  ];

  const selectedDomain = domains.find(d => d.value === config.domain);
  const selectedDifficulty = difficultyLevels.find(d => d.level === config.difficulty);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl">
        {/* Main Card */}
        <div className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900 rounded-[2.5rem] border border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-sm animate-fade-in-up">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-fast"></span>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">AI Interview System</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Setup Your Interview
            </h2>
            
            <p className="text-slate-400 text-base lg:text-lg">
              Configure your personalized technical assessment
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Domain Selection */}
            <div className="space-y-4">
              <label className="block">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-slate-300 font-bold text-lg">Select Domain</span>
                  <span className="text-2xl">{selectedDomain.icon}</span>
                </div>
                
                <div className="relative group">
                  <select 
                    className="w-full p-5 bg-slate-900/80 rounded-2xl border border-slate-700 hover:border-slate-600 focus:border-blue-500/50 text-white text-lg font-semibold outline-none focus:ring-2 focus:ring-blue-500/30 transition-all appearance-none cursor-pointer pr-12"
                    value={config.domain}
                    onChange={(e) => setConfig({...config, domain: e.target.value})}
                  >
                    {domains.map(d => (
                      <option key={d.value} value={d.value}>
                        {d.icon} {d.value}
                      </option>
                    ))}
                  </select>
                  
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-slate-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>

            {/* Difficulty Level */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-slate-300 font-bold text-lg">Difficulty Level</span>
                {selectedDifficulty && (
                  <span className="text-2xl">{selectedDifficulty.icon}</span>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {difficultyLevels.map(({ level, rounds, icon, description, color }) => (
                  <button
                    key={level}
                    onClick={() => setConfig({...config, difficulty: level, rounds: rounds})}
                    className={`group relative p-5 rounded-2xl font-bold transition-all duration-300 border-2 overflow-hidden ${
                      config.difficulty === level 
                        ? 'bg-gradient-to-br ' + color + ' border-white/20 shadow-xl scale-105' 
                        : 'bg-slate-900/60 border-slate-700 hover:border-slate-600 hover:bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {/* Background Shimmer Effect for Selected */}
                    {config.difficulty === level && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                    )}
                    
                    <div className="relative z-10 space-y-2">
                      <div className="text-3xl mb-1">{icon}</div>
                      <div className="text-lg font-black">{level}</div>
                      <div className={`text-xs font-medium ${
                        config.difficulty === level ? 'text-white/80' : 'text-slate-500'
                      }`}>
                        {description}
                      </div>
                      <div className={`text-xs font-bold ${
                        config.difficulty === level ? 'text-white/90' : 'text-slate-600'
                      }`}>
                        {rounds} Questions
                      </div>
                    </div>
                    
                    {/* Checkmark for Selected */}
                    {config.difficulty === level && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary Card */}
            <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Interview Summary
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Domain:</span>
                  <span className="text-white font-bold flex items-center gap-2">
                    <span>{selectedDomain.icon}</span>
                    {config.domain}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Difficulty:</span>
                  <span className="text-white font-bold flex items-center gap-2">
                    <span>{selectedDifficulty?.icon}</span>
                    {config.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Total Questions:</span>
                  <span className="text-white font-bold">{selectedDifficulty?.rounds || 10}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Estimated Time:</span>
                  <span className="text-white font-bold">
                    {Math.ceil((selectedDifficulty?.rounds || 10) * 2)} - {Math.ceil((selectedDifficulty?.rounds || 10) * 3)} min
                  </span>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <button 
              onClick={() => onStart(config)}
              className="group relative w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-400 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-500/40 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-blue-500/60 active:scale-[0.98] overflow-hidden"
            >
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>Start Interview</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupForm;