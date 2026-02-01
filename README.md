# 🚀 Veritas: AI-Powered Multimodal Interview Evaluator

**Veritas** is a high-performance, full-stack AI interview platform developed as a **Hackathon Project conducted at IIIT Nagpur**. It transcends traditional keyword matching by utilizing a **Multimodal Fusion Engine** to analyze candidates across three critical dimensions: **Technical Accuracy (NLP)**, **Verbal Fluency (Linguistic Analysis)**, and **Behavioral Resilience (Computer Vision)**.

## 🌟 Key Features

* **Multimodal AI Analysis:** Fuses data from video (emotion tracking), audio (fluency/filler word detection), and text (semantic similarity).
* **Rapid Fire Engine:** User-definable interview rounds (Easy: 5, Mid: 10, Hard: 20) to test technical endurance.
* **Brainy Semantic Matching:** Uses Sentence Transformers to evaluate conceptual understanding rather than rigid keyword matching.
* **Behavioral Profiling:** Generates a psychological "Confidence Index" and detects performance growth/fatigue over time.
* **Difficulty-Aware Scoring:** Implements weighted evaluation where harder questions carry more impact on the final verdict.

## 🏗️ System Architecture

The project is split into two specialized repositories:

1. **[Frontend & Backend (App Core)](https://github.com/owesh74/RANIDURGAVATI_PS04):** Built with the **MERN Stack** (MongoDB, Express, React, Node.js). Manages user sessions and question banks.
2. **[AI Engine (The Brain)](https://github.com/owesh74/Ai-Engine-For-Veritas):** A high-speed **FastAPI** service processing:
* **NLP:** `SentenceTransformers` for technical verification.
* **Computer Vision:** `DeepFace` for real-time behavioral tracking.
* **Linguistics:** Custom logic for filler word frequency and clarity.



---

## 🛠️ Tech Stack

### **Frontend**

* **React.js & Tailwind CSS:** Responsive, high-performance UI/UX.
* **Web Speech API:** Real-time voice-to-text processing.

### **Backend (Core)**

* **Node.js & Express:** Scalable API management.
* **MongoDB Atlas:** Cloud-native database for question storage.

### **AI Engine**

* **Python & FastAPI:** Asynchronous AI service hosting.
* **Sentence-Transformers:** Semantic similarity mapping.
* **DeepFace (OpenCV/TensorFlow):** Visual behavioral analysis.

---

## 🚀 Getting Started

### **1. AI Engine Setup**

```bash
cd ai-engine
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python main.py

```

### **2. Server Setup**

```bash
cd server
npm install
node seed.js
npm start

```

---

## 🤝 Acknowledgments

* **Institution:** Developed during the Hackathon conducted at **Indian Institute of Information Technology (IIIT), Nagpur**.

