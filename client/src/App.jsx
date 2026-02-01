import React, { useState } from 'react';
import SetupForm from './components/SetupForm';
import InterviewPane from './components/InterviewPane';
  

function App() {
  const [interviewConfig, setInterviewConfig] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <header className="absolute top-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tighter text-blue-500">
          VERITAS <span className="text-slate-500">| Senior Engineer</span>
        </h1>
      </header>

      {!interviewConfig ? (
        // Step 6: Show selection form
        <SetupForm onStart={(config) => setInterviewConfig(config)} />
      ) : (
        // Step 8: Show the actual interview
        <div className="w-full flex flex-col items-center">
           <button 
            onClick={() => setInterviewConfig(null)}
            className="mb-4 text-slate-400 hover:text-white text-sm"
          >
            ← Back to Setup
          </button>
       
          <InterviewPane config={interviewConfig} />
        </div>
      )}
    </div>
  );
}

export default App;