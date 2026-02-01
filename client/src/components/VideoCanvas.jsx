import React, { useRef, useEffect } from 'react';

const VideoCanvas = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      });
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto mb-6 overflow-hidden rounded-xl border-2 border-blue-500/30 shadow-2xl">
      <video ref={videoRef} autoPlay muted className="w-full scale-x-[-1]" />
      <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-[10px] font-bold animate-pulse">
        LIVE AI ANALYSIS
      </div>
    </div>
  );
};

export default VideoCanvas;