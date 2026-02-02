import React from 'react';

const Home = ({ scrollToSetup }) => {

  const domains = [
    { title: "Java Backend", icon: "☕", count: "40+ Questions" },
    { title: "Python Data", icon: "🐍", count: "35+ Questions" },
    { title: "MERN Stack", icon: "⚛️", count: "50+ Questions" },
    { title: "System Design", icon: "🏗️", count: "25+ Questions" }
  ];

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

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-10 py-6 border-b border-slate-800/50 backdrop-blur-md sticky top-0 bg-slate-950/30">
        <div className="flex items-center gap-3">
          {/* Animated Logo matching App.jsx */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            VERITAS
          </span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-blue-400 transition-colors duration-200">Features</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition-colors duration-200">How it works</a>
          <a href="#hackathon" className="hover:text-blue-400 transition-colors duration-200">IIIT Nagpur Hackathon</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up-delayed">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Next-Gen Multimodal Evaluator
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
            Master Your <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-flow">
              Technical Fate.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            VERITAS uses real-time computer vision and semantic NLP to analyze your logic, fluency, and emotional resilience. 
            Built for developers who want to "crack all MANG".
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={scrollToSetup}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                Start Free Evaluation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-10 py-5 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 rounded-2xl font-bold text-lg hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl">
              Watch Judge Demo
            </button>
          </div>
        </div>
      </section>

      {/* Domain Selection Preview */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Interview Tracks</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, i) => (
            <div key={i} className="group p-8 bg-slate-900/50 border border-slate-800/50 rounded-[2rem] hover:border-blue-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105">
              <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">{domain.icon}</div>
              <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
              <p className="text-slate-500 text-sm font-medium">{domain.count}</p>
              
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="relative z-10 bg-slate-950/30 py-24 border-y border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-110">
              🧠
            </div>
            <h4 className="text-xl font-bold">Semantic NLP</h4>
            <p className="text-slate-500 text-sm leading-relaxed">We don't just match keywords. Our engine understands the conceptual depth of your answers.</p>
          </div>
          <div className="space-y-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 text-purple-400 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 group-hover:scale-110">
              📸
            </div>
            <h4 className="text-xl font-bold">Emotion HUD</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Live behavioral tips help you maintain a calm, professional demeanor under pressure.</p>
          </div>
          <div className="space-y-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300 group-hover:scale-110">
              📈
            </div>
            <h4 className="text-xl font-bold">Growth Tracking</h4>
            <p className="text-slate-500 text-sm leading-relaxed">See your performance trend over time and review model answers to fill knowledge gaps.</p>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 py-8 border-t border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#about" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                About
              </a>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <a href="#docs" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                Documentation
              </a>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <a href="#support" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                Support
              </a>
              <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
              <a href="#privacy" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
                Privacy
              </a>
            </div>

            {/* Footer Info */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span>Powered by</span>
                <span className="text-blue-500 font-bold">Veritas AI</span>
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
          </div>
        </div>

        {/* Decorative Footer Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </footer>
    </div>
  );
};

export default Home;