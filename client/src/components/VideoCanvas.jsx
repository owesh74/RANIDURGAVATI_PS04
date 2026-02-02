import React, { useRef, useEffect } from 'react';

const VideoCanvas = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Webcam
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          // Play the video stream
          videoRef.current.play();
        }
      })
      .catch(err => console.error("Webcam access denied:", err));

    // 2. Painting loop to move video frames to the canvas
    const renderFrame = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      if (video && canvas && video.readyState === 4) {
        const ctx = canvas.getContext('2d');
        
        // Set canvas size to match video resolution
        if (canvas.width !== video.videoWidth) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        // Apply Mirror Effect for a natural feel
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
        ctx.restore();
      }
      requestAnimationFrame(renderFrame);
    };

    const animationId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(animationId);
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-900 aspect-video shadow-2xl border border-white/10">
      {/* The video element provides the data but stays hidden */}
      <video 
        ref={videoRef} 
        muted 
        playsInline 
        className="hidden" 
      />
      
      {/* The canvas is what actually displays the "Live Feed" and provides data to the AI */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover" 
      />

      <div className="absolute top-4 left-4 bg-red-600 px-2 py-1 rounded text-[10px] font-bold text-white animate-pulse">
        LIVE FEED
      </div>
    </div>
  );
};

export default VideoCanvas;