import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useSpeechToText from '../hooks/useSpeechToText';
import VideoCanvas from './VideoCanvas';

const InterviewPane = ({ config }) => {
  const totalRounds = config.rounds || (
    config.difficulty === 'Easy' ? 5 : 
    config.difficulty === 'Hard' ? 20 : 10
  );
  
  const [round, setRound] = useState(1);
  const [questionData, setQuestionData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [sessionHistory, setSessionHistory] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  // AI COACHING STATES
  const [aiCue, setAiCue] = useState("AI Coach: Ready");
  const [isAnxious, setIsAnxious] = useState(false);

  // QUESTION TRACKING STATE (No Repetition)
  const [usedQuestionIds, setUsedQuestionIds] = useState([]);

  // 1. STABLE HARDWARE HOOK
  const { 
    transcript, 
    isListening, 
    startListening, 
    stopListening, 
    resetTranscript 
  } = useSpeechToText();

  // FIX: Stable transcript sync (prevents appending/duplicating)
  useEffect(() => { 
    if (transcript !== undefined) {
      setAnswer(transcript); 
    }
  }, [transcript]);

  // 2. STABLE RECORDING TOGGLE
  const toggleRecording = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      // Clear before starting a fresh recording
      if (resetTranscript) resetTranscript();
      setAnswer("");
      startListening({ continuous: true, language: 'en-IN' });
    }
  }, [isListening, startListening, stopListening, resetTranscript]);

 // 1. Maintain the tracking state


const fetchNextQuestion = async () => {
  setLoading(true);
  try {
   const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/questions/fetch`, {
      params: { 
        domain: config.domain,
        difficulty: config.difficulty,
        // Pass the array of IDs we've already seen
        exclude: usedQuestionIds 
      }
    });

    if (res.data && res.data.question) {
      setQuestionData(res.data);
      // Append the NEW question ID to the list
      setUsedQuestionIds(prev => [...prev, res.data.id || res.data._id]); 
    }
  } catch (err) {
    console.error("handshake failed", err);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => { fetchNextQuestion(); }, [round]);

  // AI COACHING EFFECT - Polls every 3 seconds for live behavioral analysis
  useEffect(() => {
    let coachTimer;
    if (isListening && !loading) {
      coachTimer = setInterval(async () => {
        const canvas = document.querySelector('canvas'); 
        
        if (canvas) {
          try {
            const frame = canvas.toDataURL('image/jpeg', 0.5);
            const res = await axios.post(`${import.meta.env.VITE_AI_ENGINE_URL}/analyze_behavior`, {
              video_on: true,
              image_data: frame
            });
            
            if (res.data.cue) {
              setAiCue(res.data.cue);
              setIsAnxious(res.data.emotion === 'fear' || res.data.emotion === 'sad');
            }
          } catch (e) {
            setAiCue("AI Coach: Engine Offline");
          }
        } else {
          setAiCue("AI Coach: Adjusting Camera...");
        }
      }, 3000);
    }
    return () => clearInterval(coachTimer);
  }, [isListening, loading]);

  // 3. THE "NO-BUG" ROUND TRANSITION WITH CHEATING DETECTION
// This function must live inside your InterviewPane component
const handleNextRound = async () => {
  if (!answer && !loading) return;
  setLoading(true);
  
  // Stop recording immediately to finalize the current round's text
  stopListening(); 

  try {
    const res = await axios.post(`${import.meta.env.VITE_AI_ENGINE_URL}/verify_answer`, {
      user_answer: answer,
      ideal_answer: questionData.ideal_answer,
      mic_on: !!transcript
    });

    // Save session history for the final analysis
    setSessionHistory(prev => [...prev, {
      round,
      question: questionData.question,
      userAnswer: answer,
      idealAnswer: questionData.ideal_answer,
      wasCorrect: res.data.is_correct,
      accuracy: res.data.similarity_score,
      fluency: res.data.fluency_score
    }]);

    // Update tracking for unique questions
    setUsedQuestionIds(prev => [...prev, questionData.id]);

    if (round < totalRounds) {
      // ATOMIC RESET: Clears state for the fresh round
      setAnswer(""); 
      if (resetTranscript) resetTranscript(); 

      setRound(prev => prev + 1);

      // Delayed Mic Restart to ensure the browser has flushed the old audio stream
      setTimeout(() => {
        startListening({ continuous: true, language: 'en-IN' });
      }, 500); 

    } else {
      setIsFinished(true);
    }
  } catch (err) {
    alert("AI Engine Connection Failed.");
  } finally {
    setLoading(false);
  }
};

  if (isFinished) return <DetailedPersonAnalysis history={sessionHistory} total={totalRounds} />;

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-10 text-left">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Visuals */}
        <aside className="w-full lg:w-1/3 space-y-6">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-blue-500/10">
            <VideoCanvas />
            
            {/* LIVE AI COACH OVERLAY */}
            <div className={`absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-md border transition-all duration-500 ${
              isAnxious ? 'bg-red-900/40 border-red-500/50' : 'bg-slate-900/60 border-white/10'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`w-2 h-2 rounded-full ${isAnxious ? 'bg-red-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`}></span>
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Live AI Guidance</p>
              </div>
              <p className="text-white text-sm font-medium italic leading-snug">
                "{aiCue}"
              </p>
            </div>
          </div>
          
          <div className="p-8 bg-slate-900 rounded-3xl border border-blue-500/20">
            <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">Round Progress</p>
            <p className="text-6xl font-black text-white">{round} <span className="text-slate-600 text-3xl">/ {totalRounds}</span></p>
          </div>
        </aside>

        {/* Right Interaction Area */}
        <main className="flex-1 bg-slate-800 p-10 rounded-[2.5rem] border border-slate-700 shadow-2xl space-y-8">
          <h2 className="text-3xl font-bold text-white leading-tight">
            {questionData?.question || "Selecting next challenge..."}
          </h2>

          <div className="relative">
            <textarea 
              className="w-full h-64 p-6 bg-slate-900 border border-slate-700 rounded-2xl text-white text-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Speak your answer clearly..."
            />
            {isListening && (
              <div className="absolute top-4 right-4 flex gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                <span className="text-[10px] text-red-500 font-bold uppercase tracking-tighter">Live</span>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={toggleRecording}
              className={`flex-1 py-5 rounded-2xl font-bold transition-all ${
                isListening ? 'bg-red-600 shadow-lg shadow-red-900/40 text-white' : 'bg-slate-700 text-slate-300'
              }`}
            >
              {isListening ? "⏹ Stop Mic" : "🎤 Start Voice Mode"}
            </button>
            <button 
              onClick={handleNextRound}
              disabled={loading}
              className="flex-1 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl text-white font-black text-xl shadow-xl transition-all disabled:opacity-50"
            >
              {loading ? "AI Analyzing..." : "Submit Answer"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

// --- DETAILED PERSON ANALYSIS COMPONENT ---
const DetailedPersonAnalysis = ({ history, total }) => {
  const correctCount = history.filter(h => h.wasCorrect).length;
  const avgAccuracy = (history.reduce((a, b) => a + b.accuracy, 0) / total).toFixed(1);
  const avgFluency = (history.reduce((a, b) => a + b.fluency, 0) / total).toFixed(1);
  const usedFillers = [...new Set(history.flatMap(h => h.fillers))];
  
  const successRate = (correctCount / total) * 100;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-zoom-in">
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900 p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="relative z-10">
          {/* Enhanced Header */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-fast"></div>
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                Session Complete
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Detailed Person Analysis
            </h2>
            
            <p className="text-slate-400 text-lg lg:text-xl italic">
              <span className="inline-block border-b-2 border-blue-500/50 pb-1 hover:border-blue-500/80 transition-colors">
                Multimodal Session Verdict
              </span>
            </p>
          </div>

          {/* Enhanced Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            <MetricCard
              label="Final Score"
              value={`${correctCount}/${total}`}
              color="blue"
              subtitle={`${successRate.toFixed(0)}% Success Rate`}
              icon="🎯"
            />
            <MetricCard
              label="Technical %"
              value={`${avgAccuracy}%`}
              color="emerald"
              subtitle="Semantic Accuracy"
              icon="⚡"
            />
            <MetricCard
              label="Fluency"
              value={`${avgFluency}%`}
              color="purple"
              subtitle="Communication Score"
              icon="💬"
            />
            <MetricCard
              label="Round History"
              value={history.length}
              color="orange"
              subtitle="Responses Analyzed"
              icon="📊"
              isCount
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Enhanced Round Breakdown */}
            <div className="space-y-5">
              <SectionHeader icon="📋" title="Round Breakdown" />
              
              <div className="relative">
                <div className="max-h-[450px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                  {history.map((h, i) => (
                    <div 
                      key={i} 
                      className="group/round p-5 bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
                    >
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Round {h.round}
                          </span>
                          {h.micUsed && (
                            <span className="text-sm" title="Voice used">🎤</span>
                          )}
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                          h.wasCorrect 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-red-500/20 text-red-400 border border-red-500/30'
                        }`}>
                          {h.wasCorrect ? '✓ Correct' : '✗ Incomplete'}
                        </span>
                      </div>
                      
                      <p className="text-sm text-slate-400 line-clamp-2 group-hover/round:text-slate-300 transition-colors mb-2">
                        {h.question}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <span className="text-blue-400">●</span>
                          <span>Accuracy: {h.accuracy}%</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <span className="text-purple-400">●</span>
                          <span>Fluency: {h.fluency}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Fade Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-800 to-transparent pointer-events-none rounded-b-2xl"></div>
              </div>
            </div>

            {/* Enhanced Insights Section */}
            <div className="space-y-5">
              <SectionHeader icon="🎯" title="AI Insights" />
              
              <div className="space-y-4">
                {/* Technical Insight */}
                <InsightCard
                  title="Technical Insight"
                  color="blue"
                  icon="🔍"
                  content={
                    correctCount / total > 0.7 
                      ? "Excellent depth. Your semantic mapping shows strong technical foundation." 
                      : "Good logic, but try using more specific technical terminology."
                  }
                  score={successRate}
                />

                {/* Fluency Analysis */}
                <InsightCard
                  title="Communication Quality"
                  color="emerald"
                  icon="💡"
                  content={
                    avgFluency > 85
                      ? "Outstanding delivery! Your communication is clear and professional."
                      : "Good pace. Focus on reducing hesitation for smoother responses."
                  }
                  score={parseFloat(avgFluency)}
                />

                {/* Filler Words Warning */}
                {usedFillers.length > 0 && (
                  <InsightCard
                    title="Verbal Correction"
                    color="orange"
                    icon="⚠️"
                    content={
                      <>
                        Avoid filler words: <span className="text-white font-mono font-bold">{usedFillers.join(", ")}</span>. 
                        Practice pausing instead of vocalizing hesitation.
                      </>
                    }
                  />
                )}

                {/* Performance Overview */}
                <div className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-900/5 border border-purple-500/20 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-purple-400 font-bold text-xs uppercase mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-fast"></span>
                    Performance Metrics
                  </h4>
                  <div className="space-y-3">
                    <ProgressBar label="Correctness" value={successRate} color="blue" />
                    <ProgressBar label="Technical Accuracy" value={parseFloat(avgAccuracy)} color="emerald" />
                    <ProgressBar label="Fluency Score" value={parseFloat(avgFluency)} color="purple" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Question Review & Model Answers Section */}
          <div className="space-y-8 mt-12">
            <SectionHeader icon="📚" title="Question Review & Model Answers" />
            
            <div className="grid grid-cols-1 gap-6">
              {history.map((h, i) => (
                <div key={i} className="bg-slate-900/80 rounded-[2rem] border border-slate-700/50 p-8 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">Round {h.round}</span>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold ${h.wasCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {h.wasCorrect ? '✓ Pass' : '✗ Fail'}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-xl mb-6 underline decoration-blue-500/30 underline-offset-8">
                    {h.question}
                  </h4>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* User's Answer */}
                    <div className="space-y-3">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Your Response</p>
                      <div className="p-4 bg-slate-800/50 rounded-xl border border-white/5 text-sm text-slate-300 italic">
                        "{h.userAnswer || "No answer provided."}"
                      </div>
                    </div>
                    {/* AI Model Answer */}
                    <div className="space-y-3">
                      <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">AI Model Answer</p>
                      <div className="p-4 bg-emerald-900/10 rounded-xl border border-emerald-500/20 text-sm text-emerald-200">
                        {h.idealAnswer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Restart Button */}
          <button 
            onClick={() => window.location.reload()}
            className="group/restart relative mt-12 w-full py-6 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-400 rounded-2xl lg:rounded-3xl font-black text-white text-xl shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/60 active:scale-[0.98] overflow-hidden"
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/restart:translate-x-full transition-transform duration-1000"></span>
            
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span className="text-2xl group-hover/restart:rotate-180 transition-transform duration-500">🔄</span>
              <span>Restart Session</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== HELPER COMPONENTS ====================

const MetricCard = ({ label, value, color, subtitle, icon, isCount }) => {
  const colorConfig = {
    blue: { bg: 'bg-blue-500/5', border: 'border-blue-500/10', text: 'text-blue-400', glow: 'from-blue-500/0 to-blue-500/20' },
    emerald: { bg: 'bg-emerald-500/5', border: 'border-emerald-500/10', text: 'text-emerald-400', glow: 'from-emerald-500/0 to-emerald-500/20' },
    purple: { bg: 'bg-purple-500/5', border: 'border-purple-500/10', text: 'text-purple-400', glow: 'from-purple-500/0 to-purple-500/20' },
    orange: { bg: 'bg-orange-500/5', border: 'border-orange-500/10', text: 'text-orange-400', glow: 'from-orange-500/0 to-orange-500/20' }
  };

  const config = colorConfig[color];

  return (
    <div className="group/metric relative p-6 bg-slate-900/80 hover:bg-slate-900 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
      {/* Glow Effect */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${config.glow} rounded-full blur-2xl opacity-0 group-hover/metric:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <p className={`text-[10px] font-bold uppercase tracking-widest ${config.text}`}>
            {label}
          </p>
          {icon && <span className="text-2xl opacity-70 group-hover/metric:opacity-100 transition-opacity">{icon}</span>}
        </div>
        
        <p className="text-4xl lg:text-5xl font-black text-white mt-2 mb-1 tabular-nums tracking-tight">
          {isCount ? value : value}
        </p>
        
        {subtitle && (
          <p className="text-xs text-slate-500 font-medium mt-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-1">
    <span className="text-2xl">{icon}</span>
    <h3 className="text-2xl font-bold text-white">
      {title}
    </h3>
    <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent"></div>
  </div>
);

const InsightCard = ({ title, color, icon, content, score }) => {
  const colorConfig = {
    blue: { bg: 'from-blue-900/20 to-blue-900/5', border: 'border-blue-500/20', text: 'text-blue-400', dot: 'bg-blue-500', gradient: 'from-blue-600 to-blue-400' },
    emerald: { bg: 'from-emerald-900/20 to-emerald-900/5', border: 'border-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-500', gradient: 'from-emerald-600 to-emerald-400' },
    orange: { bg: 'from-orange-900/20 to-orange-900/5', border: 'border-orange-500/20', text: 'text-orange-400', dot: 'bg-orange-500', gradient: 'from-orange-600 to-orange-400' }
  };

  const config = colorConfig[color];

  return (
    <div className={`p-6 bg-gradient-to-br ${config.bg} border ${config.border} rounded-3xl transition-all duration-300 hover:shadow-lg`}>
      <h4 className={`${config.text} font-bold text-xs uppercase mb-3 flex items-center gap-2`}>
        {icon && <span className="text-base">{icon}</span>}
        <span className={`w-2 h-2 ${config.dot} rounded-full`}></span>
        {title}
      </h4>
      <p className="text-slate-200 text-sm leading-relaxed mb-3">
        {content}
      </p>
      {score !== undefined && (
        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 h-2 bg-slate-800/80 rounded-full overflow-hidden ring-1 ring-white/5">
            <div 
              className={`h-full bg-gradient-to-r ${config.gradient} transition-all duration-1000 shadow-md`}
              style={{ width: `${Math.min(score, 100)}%` }}
            >
              <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <span className={`text-sm font-bold ${config.text} tabular-nums min-w-[3rem] text-right`}>
            {score.toFixed(0)}%
          </span>
        </div>
      )}
    </div>
  );
};

const ProgressBar = ({ label, value, color }) => {
  const colorConfig = {
    blue: 'from-blue-600 to-blue-400',
    emerald: 'from-emerald-600 to-emerald-400',
    purple: 'from-purple-600 to-purple-400'
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">{label}</span>
        <span className="text-xs text-slate-300 font-bold tabular-nums">{value.toFixed(0)}%</span>
      </div>
      <div className="h-2 bg-slate-800/80 rounded-full overflow-hidden ring-1 ring-white/5">
        <div 
          className={`h-full bg-gradient-to-r ${colorConfig[color]} transition-all duration-1000 ease-out shadow-sm`}
          style={{ width: `${Math.min(value, 100)}%` }}
        >
          <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPane;