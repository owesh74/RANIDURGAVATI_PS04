```markdown
# 🚀 Veritas: AI-Powered Multimodal Interview Evaluator

**Veritas** is a high-performance, full-stack AI interview platform developed for the **IIIT Nagpur Hackathon**. It moves beyond simple keyword matching by using a **Multimodal Fusion Engine** to evaluate candidates through three critical lenses: **Technical Accuracy (NLP)**, **Verbal Fluency (Linguistics)**, and **Behavioral Resilience (Computer Vision)**.

 

## 📽️ Live Demonstration & Visuals

> **Placement Tip:** Place your high-impact "Home Screen" image here to immediately show the professional UI.

![Home Screen](assets/ana1.png)





## 🌟 Key Features

### 1. 🧠 Multimodal Fusion Engine
Veritas doesn't just read your text; it feels your performance.
* **Semantic NLP:** Uses `SentenceTransformers` (all-MiniLM-L6-v2) to map conceptual understanding rather than rigid word matching.
* **Emotion HUD:** Real-time facial expression analysis using `DeepFace` to track confidence and stress.
* **Linguistic Analysis:** Detects verbal fillers (um, uh, like) and calculates a realistic Fluency Score based on speech pace.

### 2. ⚡ Rapid Fire Technical Engine
Designed to test endurance and quick thinking.<img width="1919" height="1079" alt="foc" src="https://github.com/user-attachments/assets/5d45c9b7-03d2-46e2-a701-c36d13a726eb" />
<img width="1919" height="1079" alt="ene" src="https://github.com/user-attachments/assets/44b1838a-a4ad-495d-9b52-ad3f14d5b900" />
<img width="1919" height="1079" alt="eye" src="https://github.com/user-attachments/assets/269c401c-a10a-4d4b-8185-2ed54a5bf924" />
<img width="1919" height="1079" alt="ana2" src="https://github.com/user-attachments/assets/b887a12a-4207-4b98-8593-0e50a4bf93eb" />
<img width="1919" height="1076" alt="ana1" src="https://github.com/user-attachments/assets/16907e62-2462-459c-a25d-6f51765e5b55" />
<img width="1919" height="1079" alt="homw screen" src="https://github.com/user-attachments/assets/d16050ff-a0c8-4389-94ef-4d617ec1ab7f" />

* **Difficulty Tiers:** Easy (5 Qs), Medium (10 Qs), and Hard (20 Qs) rounds.
* **Zero-Repeat Logic:** Smart session tracking ensures you never get the same question twice in a single session.

### 3. 📊 Detailed Person Analysis (DPA)
Post-interview feedback that provides a complete psychological and technical verdict.
* **Accuracy vs. Fluency:** Side-by-side metrics showing where your technical knowledge and communication skills diverge.
* **Behavioral Verdict:** Visual markers showing "Smiling/Confident" vs. "Anxious/Unfocused" intervals.

> **Placement Tip:** Insert your "Smiling Face Review" and "Stay Focused Review" images here side-by-side using the table below.

| ![Confident Detection](INSERT_LINK_HERE) | ![Fatigue Detection](INSERT_LINK_HERE) |
| :---: | :---: |
| *High Confidence Detected* | *Stay Focused Alert* |

---

## 🏗️ System Architecture



The system is split into two specialized service layers:
1. **App Core (MERN Stack):** Manages user sessions, question banks (MongoDB), and the React-based hardware interface.
2. **AI Engine (FastAPI):** An asynchronous Python service that handles the heavy-lifting of NLP and Computer Vision.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS, Web Speech API (Voice-to-Text).
* **Backend:** Node.js, Express, MongoDB Atlas (MERN).
* **AI Core:** Python, FastAPI, Sentence-Transformers, DeepFace (OpenCV/TensorFlow).

---

## 🚀 Installation & Setup

### 1. AI Engine (The Brain)
```bash
cd ai-engine
python -m venv venv
# Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py

```

### 2. App Core (The Heart)

```bash
cd server
npm install
node seed.js # Populates multi-stack question bank
npm start

```

---

## 🤝 Acknowledgments

* **Institution:** Developed for the Hackathon at **Indian Institute of Information Technology (IIIT), Nagpur**.

```

---
