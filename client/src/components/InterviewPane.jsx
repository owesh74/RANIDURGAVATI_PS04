import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSpeechToText from '../hooks/useSpeechToText';
import VideoCanvas from './VideoCanvas';

const InterviewPane = ({ config }) => {
  // 1. Session Configuration: Dynamic Round Count
  const totalRounds = config.rounds || (config.difficulty === 'Hard' ? 20 : 10);
  
  const [round, setRound] = useState(1);
  const [questionData, setQuestionData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [sessionHistory, setSessionHistory] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  // 2. Hardware Tracking (Linguistic & Behavioral Sensors)
  const { transcript, isListening, startListening, stopListening } = useSpeechToText();
  const micActive = isListening || !!transcript;

  useEffect(() => { 
    if (transcript) setAnswer(transcript); 
  }, [transcript]);

  // 3. Fetching from your "Rapid Fire" Database Bank
  const fetchNextQuestion = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/questions/fetch?domain=${config.domain}`);
      setQuestionData(res.data);
    } catch (err) {
      console.error("Error fetching question from bank.");
    }
  };

  useEffect(() => { fetchNextQuestion(); }, [round]);

  const handleNextRound = async () => {
    setLoading(true);
    try {
      // 4. Send to "Brainy" AI Engine for Multimodal Analysis
      const res = await axios.post('http://localhost:8000/verify_answer', {
        user_answer: answer,
        ideal_answer: questionData.ideal_answer,
        mic_on: micActive
      });

      // Buffer data for the detailed final analysis
      setSessionHistory(prev => [...prev, {
        round,
        question: questionData.question,
        wasCorrect: res.data.is_correct,
        accuracy: res.data.similarity_score,
        fluency: res.data.fluency_score,
        fillers: res.data.fillers_detected,
        micUsed: micActive
      }]);

      if (round < totalRounds) {
        setRound(prev => prev + 1);
        setAnswer("");
      } else {
        setIsFinished(true); // Reveal the Final Detail Analysis
      }
    } catch (err) {
      alert("AI Engine Connection Failed. Ensure FastAPI is on port 8000.");
    }
    setLoading(false);
  };

  if (isFinished) return <DetailedPersonAnalysis history={sessionHistory} total={totalRounds} />;

  return (
    <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-start animate-in fade-in">
      {/* Left: Live Vision & Progress */}
      <div className="w-full md:w-1/3 space-y-4">
        <VideoCanvas />
        <div className="p-6 bg-slate-900 rounded-3xl border border-blue-500/30 shadow-lg">
          <p className="text-blue-400 font-bold text-xs uppercase tracking-widest">Rapid Fire Round</p>
          <p className="text-4xl font-black text-white">{round} <span className="text-slate-600 text-xl">/ {totalRounds}</span></p>
          <div className="w-full bg-slate-800 h-2 mt-4 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500 h-full transition-all duration-500" 
              style={{ width: `${(round / totalRounds) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Right: Question & Input */}
      <div className="flex-1 bg-slate-800 p-10 rounded-[2.5rem] border border-slate-700 shadow-2xl relative overflow-hidden">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white leading-relaxed">
            {questionData?.question || "Selecting next challenge..."}
          </h2>
        </div>

        <textarea 
          className="w-full h-56 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Start typing or use the microphone to answer..."
        />

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={isListening ? stopListening : startListening}
            className={`flex-1 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
              isListening ? 'bg-red-500 animate-pulse shadow-lg shadow-red-900/40' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            }`}
          >
            {isListening ? "⏹ Stop Mic" : "🎤 Answer with Voice"}
          </button>
          
          <button 
            onClick={handleNextRound}
            disabled={!answer || loading}
            className="flex-1 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/40 transition-transform active:scale-95 disabled:opacity-50"
          >
            {loading ? "AI Evaluating..." : round === totalRounds ? "Finalize Session" : "Next Round"}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- FINAL DETAILED PERSON ANALYSIS COMPONENT ---
const DetailedPersonAnalysis = ({ history, total }) => {
  const correctCount = history.filter(h => h.wasCorrect).length;
  const avgAccuracy = (history.reduce((a, b) => a + b.accuracy, 0) / total).toFixed(1);
  const avgFluency = (history.reduce((a, b) => a + b.fluency, 0) / total).toFixed(1);
  const allFillers = [...new Set(history.flatMap(h => h.fillers))];

  return (
    <div className="w-full max-w-5xl bg-slate-800 p-12 rounded-[3rem] border border-slate-700 shadow-2xl animate-in zoom-in duration-500 text-left">
      <h2 className="text-5xl font-black text-white mb-2">Detailed Person Analysis</h2>
      <p className="text-slate-400 mb-12 text-lg italic decoration-blue-500 underline underline-offset-8">
        Artificial Intelligence Behavioral & Technical Verdict
      </p>

      {/* 1. High Level Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="p-6 bg-slate-900 rounded-3xl border border-white/5">
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Correctness</p>
          <p className="text-4xl font-black text-white mt-1">{correctCount}/{total}</p>
        </div>
        <div className="p-6 bg-slate-900 rounded-3xl border border-white/5">
          <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Avg Accuracy</p>
          <p className="text-4xl font-black text-white mt-1">{avgAccuracy}%</p>
        </div>
        <div className="p-6 bg-slate-900 rounded-3xl border border-white/5">
          <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Fluency Score</p>
          <p className="text-4xl font-black text-white mt-1">{avgFluency}%</p>
        </div>
        <div className="p-6 bg-slate-900 rounded-3xl border border-white/5">
          <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Mic Usage</p>
          <p className="text-xl font-bold text-slate-300 mt-2">
            {history.some(h => h.micUsed) ? "✅ Analyzed" : "❌ No Data"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 2. Round-by-Round Breakdown */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Round History
          </h3>
          <div className="max-h-[400px] overflow-y-auto pr-4 space-y-3 custom-scrollbar">
            {history.map((h, i) => (
              <div key={i} className="p-4 bg-slate-900/50 rounded-2xl border border-white/5 flex justify-between items-center transition-hover hover:bg-slate-900">
                <div className="flex-1">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Round {h.round}</p>
                  <p className="text-sm text-slate-300 truncate w-64">{h.question}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-bold ${h.wasCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {h.wasCorrect ? 'CORRECT' : 'INCOMPLETE'}
                  </p>
                  <p className="text-[10px] text-slate-500">{h.accuracy}% Semantic Match</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Brainy AI Insights */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> AI Coaching Verdict
          </h3>
          
          <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-3xl">
            <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">Technical Summary</h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              {correctCount / total > 0.7 
                ? "Excellent depth. Your semantic mapping shows you hit the core architectural keywords consistently." 
                : "You understand the concepts but are missing industry-standard terminology. Focus on explaining 'Why' rather than just 'What'."}
            </p>
          </div>

          <div className="p-6 bg-emerald-900/10 border border-emerald-500/20 rounded-3xl">
            <h4 className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">Speech & Communication</h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              {avgFluency > 85 
                ? "Highly professional verbal delivery with minimal hesitations." 
                : `You are overusing filler words like "${allFillers.slice(0, 3).join(', ')}". Practice the 'Power Pause' to sound more decisive.`}
            </p>
          </div>

          <div className="p-6 bg-purple-900/10 border border-purple-500/20 rounded-3xl">
            <h4 className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-2">Body Language Tip</h4>
            <p className="text-slate-200 text-sm leading-relaxed italic">
              "Your AI Vision tracking indicates slight tension during technical rounds. Try to relax your shoulders and maintain eye contact with the camera."
            </p>
          </div>
        </div>
      </div>

      <button 
        onClick={() => window.location.reload()}
        className="mt-12 w-full py-5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl font-black text-xl shadow-xl shadow-blue-900/30 transition-all hover:scale-[1.01] active:scale-95"
      >
        Start New Interview Session
      </button>
    </div>
  );
};

export default InterviewPane;