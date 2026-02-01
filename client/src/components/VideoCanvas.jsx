import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const VideoCanvas = () => {
  const videoRef = useRef(null);
  const [emotion, setEmotion] = useState("Analyzing...");

  useEffect(() => {
    // 1. Initialize Webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(err => console.error("Webcam access denied:", err));

    // 2. Set up periodic face analysis
    const interval = setInterval(async () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoRef.current, 0, 0);
        
        const imageData = canvas.toDataURL("image/jpeg");

        try {
          const res = await axios.post("http://localhost:8000/analyze_face", { image_data: imageData });
          setEmotion(res.data.emotion);
        } catch (err) {
          console.error("AI Vision connection failed");
        }
      }
    }, 3000); // Analyze every 3 seconds

    return () => {
      clearInterval(interval);
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-blue-500/30 shadow-2xl bg-slate-900">
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        className="w-full aspect-video object-cover scale-x-[-1]" 
      />
      
      {/* AI Vision Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <div>
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">AI Emotion Analysis</p>
          <p className="text-sm font-bold text-white capitalize">{emotion}</p>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce"></div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-red-600 px-2 py-1 rounded text-[10px] font-bold text-white animate-pulse">
        LIVE FEED
      </div>
    </div>
  );
};

export default VideoCanvas;