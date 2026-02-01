import { useState, useEffect, useRef } from 'react';

const useSpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;

      recognition.current.onresult = (event) => {
        let text = "";
        for (let i = 0; i < event.results.length; i++) {
          text += event.results[i][0].transcript;
        }
        setTranscript(text);
      };
    }
  }, []);

  const startListening = () => {
    setTranscript("");
    setIsListening(true);
    recognition.current?.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.current?.stop();
  };

  return { transcript, isListening, startListening, stopListening };
};

export default useSpeechToText;