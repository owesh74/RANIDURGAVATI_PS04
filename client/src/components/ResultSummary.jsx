import React from 'react';

const ResultSummary = ({ report, onReset }) => {
  return (
    <div className="bg-slate-800 p-10 rounded-3xl border border-blue-500/30 shadow-2xl text-center max-w-2xl w-full animate-in zoom-in duration-500">
      <div className="inline-block p-4 bg-blue-500/10 rounded-full mb-6">
        <span className="text-6xl">🏆</span>
      </div>
      <h2 className="text-4xl font-bold mb-2">Interview Complete!</h2>
      <p className="text-slate-400 mb-8">Your performance has been analyzed by our AI engine.</p>
      
      <div className="flex justify-center gap-12 mb-10">
        <div>
          <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Score</p>
          <p className="text-5xl font-black text-blue-500">{report.overallScore}%</p>
        </div>
        <div className="border-l border-slate-700"></div>
        <div className="text-left">
          <p className="text-sm text-slate-500 uppercase font-bold tracking-widest mb-1">Top Strength</p>
          <p className="text-slate-200 font-medium">✨ {report.feedbackDetails.strengths[0]}</p>
        </div>
      </div>

      <button 
        onClick={onReset}
        className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40"
      >
        Return to Dashboard
      </button>
    </div>
  );
};

export default ResultSummary;