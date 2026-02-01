import React, { useState, useEffect } from 'react';
import SetupForm from './components/SetupForm';
import InterviewPane from './components/InterviewPane';

function App() {
  const [interviewConfig, setInterviewConfig] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hide header on scroll (optional enhancement)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slower"></div>
        
        {/* Secondary Accent Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-float-medium-delayed"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
        
        {/* Radial Gradient Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Enhanced Header with Hide Animation */}
        <header 
          className={`sticky top-0 z-50 transition-transform duration-300 backdrop-blur-md bg-slate-950/30 border-b border-slate-800/50 ${
            showHeader ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo and Title */}
              <div className="flex items-center gap-4">
                {/* Animated Logo */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-flow">
                      VERITAS
                    </span>
                    {/* <span className="hidden sm:inline text-slate-600 font-bold mx-2">|</span> */}
                    
                  </h1>
                  <p className="text-slate-500 text-xs font-medium mt-0.5 hidden sm:block">
                    AI-Powered Technical Assessment Platform
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-3">
                {interviewConfig && (
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-fast"></div>
                    <span className="text-blue-400 text-sm font-bold">
                      {interviewConfig.domain} • {interviewConfig.difficulty}
                    </span>
                  </div>
                )}
                
                {/* Settings/Info Button */}
                <button 
                  className="group p-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="Information"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 pb-8">
          {!interviewConfig ? (
            // Setup Form View with Enhanced Animation
            <div className="w-full animate-fade-in-up-delayed">
              <SetupForm onStart={(config) => setInterviewConfig(config)} />
            </div>
          ) : (
            // Interview View with Enhanced Layout
            <div className="w-full animate-fade-in space-y-6">
              {/* Enhanced Back Button with Stats */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button 
                    onClick={() => setInterviewConfig(null)}
                    className="group inline-flex items-center gap-2 px-5 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-2xl text-slate-400 hover:text-white text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm hover:scale-105 active:scale-95"
                  >
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Setup</span>
                  </button>

                  {/* Session Info Card (Mobile Hidden) */}
                  <div className="hidden lg:flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/30 rounded-2xl backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-fast"></div>
                      <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Live Session</span>
                    </div>
                    <div className="h-4 w-px bg-slate-700"></div>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-slate-500">Domain: </span>
                        <span className="text-white font-bold">{interviewConfig.domain}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">Level: </span>
                        <span className="text-white font-bold">{interviewConfig.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interview Component */}
              <InterviewPane config={interviewConfig} />
            </div>
          )}
        </main>

        {/* Enhanced Footer */}
        <footer className="relative py-8 border-t border-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Footer Links */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                  About
                </a>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                  Documentation
                </a>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                  Support
                </a>
                <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                  Privacy
                </a>
              </div>

              {/* Footer Info */}
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span>Powered by</span>
                  <span className="text-blue-500 font-bold">Veritas Ai</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  <span>Built with</span>
                  <span className="text-cyan-500 font-bold">React</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <span>© 2026 VERITAS</span>
                  <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                  <span>All rights reserved</span>
                </div>
              </div>

              {/* Social Links (Optional) */}
              <div className="hidden lg:flex items-center gap-3">
                <a 
                  href="#" 
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Footer Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </footer>
      </div>

      {/* Scroll to Top Button (appears after scrolling) */}
      {lastScrollY > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 hover:bg-blue-500 rounded-full shadow-2xl shadow-blue-900/50 transition-all duration-300 hover:scale-110 active:scale-95 group animate-fade-in"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;