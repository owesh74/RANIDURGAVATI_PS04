import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSpeechToText from '../hooks/useSpeechToText';
import VideoCanvas from './VideoCanvas';

const InterviewPane = ({ config }) => {
  const [question, setQuestion] = useState("Loading question...");
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Hook for Voice Integration
  const { transcript, isListening, startListening, stopListening } = useSpeechToText();

  // Sync voice transcript to answer state
  useEffect(() => {
    if (transcript) setAnswer(transcript);
  }, [transcript]);

  // Fetch a question from the Node server based on user selection
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/questions/fetch?domain=${config.domain}&difficulty=${config.difficulty}`);
        setQuestion(res.data.question);
      } catch (err) {
        setQuestion("Failed to load question. Please try again.");
      }
    };
    fetchQuestion();
  }, [config]);

  const handleSubmit = async () => {
    if (!answer) return;
    setIsSubmitting(true);
    
    try {
      // 1. Get Score & Status from Python AI Engine
      const aiResponse = await axios.post('http://localhost:8000/score', {
        user_answer: answer,
        ideal_answer: "This is a reference answer used for semantic comparison." 
      });

      // Destructure the new status field from your updated Python logic
      const { score, status, details } = aiResponse.data;
      setFeedback({ score, status, details });

      // 2. Save result to MongoDB via Node Backend
      await axios.post('http://localhost:5000/api/reports/save', {
        userId: "demo_user_123", 
        domain: config.domain,
        overallScore: score,
        feedbackDetails: details,
        transcript: answer
      });

    } catch (err) {
      console.error("Submission Error:", err);
      alert("Error connecting to AI Engine. Ensure FastAPI is running on port 8000.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-start animate-in fade-in duration-700">
      
      {/* Left Side: Video & Analysis */}
      <div className="w-full md:w-1/3">
        <VideoCanvas />
        <div className="mt-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
          <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">AI Status</h3>
          <p className="text-sm text-slate-300 mt-1">
            {isListening ? "🟢 Recording Audio..." : "⚪ Waiting for input..."}
          </p>
        </div>
      </div>

      {/* Right Side: Question & Answer */}
      <div className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
        {!feedback ? (
          <>
            <div className="mb-8">
              <span className="text-blue-400 text-sm font-bold uppercase">Question</span>
              <h2 className="text-2xl font-semibold mt-2 leading-relaxed">{question}</h2>
            </div>

            <textarea
              className="w-full h-48 p-4 bg-slate-900 text-gray-200 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              placeholder="Start typing or use the microphone..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={isListening ? stopListening : startListening}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {isListening ? "Stop Mic" : "🎤 Voice Answer"}
              </button>

              <button
                onClick={handleSubmit}
                disabled={!answer || isSubmitting}
                className={`px-10 py-3 rounded-lg font-bold transition-all ${
                  !answer || isSubmitting 
                  ? 'bg-slate-700 text-gray-500' 
                  : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/20'
                }`}
              >
                {isSubmitting ? "AI Evaluating..." : "Submit Answer"}
              </button>
            </div>
          </>
        ) : (
          /* Results Display Mode */
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-2">
              <h2 className={`text-3xl font-bold ${feedback.status === 'CORRECT' ? 'text-green-400' : 'text-red-400'}`}>
                {feedback.status}
              </h2>
              <span className="text-slate-500 text-xl">|</span>
              <div className="text-3xl font-black text-white">{feedback.score}%</div>
            </div>
            
            <p className="text-slate-400 mb-6 italic text-sm">
              "Your answer was compared semantically against industry-standard definitions."
            </p>

            <div className="space-y-4">
              {/* Strengths Section */}
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">Strengths</h4>
                <p className="text-slate-300 text-sm">{feedback.details.strengths[0] || "Answer recorded."}</p>
              </div>

              {/* Only show weaknesses if the answer was actually wrong or incomplete */}
              {feedback.status !== 'CORRECT' && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <h4 className="text-red-400 font-bold text-xs uppercase tracking-widest mb-1">Why it was marked wrong:</h4>
                  <p className="text-slate-300 text-sm">{feedback.details.weaknesses[0]}</p>
                </div>
              )}
            </div>

            <button 
              onClick={() => window.location.reload()}
              className="mt-8 w-full py-4 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-colors"
            >
              Try Another Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewPane;