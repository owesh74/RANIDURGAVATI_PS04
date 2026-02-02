import React, { useState } from 'react';

const SetupForm = ({ onStart }) => {
  const [config, setConfig] = useState({ 
    domain: 'Java', 
    difficulty: 'Medium',
    rounds: 10
  });

  const domains = [
    { value: 'Java', icon: '' },
    { value: 'Python', icon: '' },
    { value: 'DSA', icon: '' },
    { value: 'ML', icon: '' },
    { value: 'HR', icon: '' },
    { value: 'Cloud', icon: '' },
    { value: 'JavaScript', icon: '' },
  { value: 'React', icon: '' },
  { value: 'Node.js', icon: '' },
  { value: 'MongoDB', icon: '' },
  { value: 'Next.js', icon: '' },
  { value: 'C++', icon: '' },
  { value: 'OS', icon: '' },
  { value: 'DBMS', icon: '' },
  { value: 'Git', icon: '' },
  { value: 'Algorithms', icon: '' },
  { value: 'General', icon: '' }
  ];

  const difficultyLevels = [
    { 
      level: 'Easy', 
      rounds: 5, 
      icon: '🌱', 
      description: 'Foundational concepts', 
      color: 'from-green-600 to-green-500' 
    },
    { 
      level: 'Medium', 
      rounds: 10, 
      icon: '⚡', 
      description: 'Standard technical prep', 
      color: 'from-blue-600 to-blue-500' 
    },
    { 
      level: 'Hard', 
      rounds: 20, 
      icon: '🔥', 
      description: 'Expert-level depth', 
      color: 'from-red-600 to-red-500' 
    }
  ];

  const selectedDomain = domains.find(d => d.value === config.domain);
  const selectedDifficulty = difficultyLevels.find(d => d.level === config.difficulty);

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="relative p-8 lg:p-16 bg-slate-900/40 border border-white/10 rounded-[3rem] backdrop-blur-xl shadow-2xl overflow-hidden">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-white mb-2 underline decoration-blue-500 underline-offset-8">
            Configure Session
          </h2>
          <p className="text-slate-400 mt-4">
            Select your parameters for the multimodal evaluation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Input Selections */}
          <div className="space-y-10">
            
            {/* Domain Selection */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest block">
                Target Technology
              </label>
              <div className="grid grid-cols-3 gap-3">
                {domains.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setConfig({...config, domain: d.value})}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                      config.domain === d.value 
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg scale-105' 
                      : 'bg-slate-800/40 border-transparent text-slate-500 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-2xl">{d.icon}</span>
                    <span className="text-xs font-bold uppercase">{d.value}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Selection */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-widest block">
                Challenge Intensity
              </label>
              <div className="space-y-3">
                {difficultyLevels.map((lvl) => (
                  <button
                    key={lvl.level}
                    onClick={() => setConfig({...config, difficulty: lvl.level, rounds: lvl.rounds})}
                    className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                      config.difficulty === lvl.level 
                      ? 'bg-gradient-to-r ' + lvl.color + ' border-white/20 shadow-lg scale-[1.02]' 
                      : 'bg-slate-800/40 border-transparent hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{lvl.icon}</span>
                      <div>
                        <p className={`font-black ${config.difficulty === lvl.level ? 'text-white' : 'text-slate-300'}`}>
                          {lvl.level}
                        </p>
                        <p className="text-[10px] text-white/60 uppercase font-bold tracking-tight">
                          {lvl.description}
                        </p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      config.difficulty === lvl.level ? 'bg-white/20' : 'bg-slate-950/40 text-slate-500'
                    }`}>
                      {lvl.rounds} Rounds
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Readiness & Initialize */}
          <div className="flex flex-col justify-between">
            <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 space-y-6">
              <div className="pb-4 border-b border-white/5">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">
                  Engine Parameters
                </p>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter">System Summary</h3>
              </div>

              <div className="space-y-4">
                <SummaryItem label="Domain" value={config.domain} icon={selectedDomain.icon} />
                <SummaryItem label="Evaluation Rounds" value={config.rounds} icon="📋" />
                <SummaryItem label="Difficulty" value={config.difficulty} icon={selectedDifficulty.icon} />
                <SummaryItem label="Biometric HUD" value="ACTIVE" icon="👁️" />
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => onStart(config)}
                  className="w-full py-5 bg-white text-black font-black text-xl rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    INITIALIZE ENGINE 
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
            
            <p className="text-[10px] text-slate-600 mt-8 leading-relaxed italic text-center">
              The Veritas Multimodal Engine requires camera and microphone permissions for real-time behavioral analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for summary rows
const SummaryItem = ({ label, value, icon }) => (
  <div className="flex justify-between items-center group/item">
    <span className="text-slate-500 text-sm font-medium">{label}</span>
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-white group-hover/item:text-blue-400 transition-colors uppercase">
        {value}
      </span>
      <span className="opacity-50 text-sm">{icon}</span>
    </div>
  </div>
);

export default SetupForm;