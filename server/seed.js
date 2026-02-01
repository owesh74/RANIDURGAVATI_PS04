const mongoose = require('mongoose');
const Question = require('./models/Question');
require('dotenv').config();

const questions = [
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What is the difference between JDK, JRE, and JVM?",
    ideal_answer: "JDK is the development kit containing tools like the compiler. JRE is the environment to run Java apps, including the JVM and libraries. JVM is the virtual machine that executes bytecode."
  },
  {
    domain: "Java",
    difficulty: "Hard",
    question: "Explain the memory model in Java (Stack vs Heap).",
    ideal_answer: "Stack memory is used for static memory allocation and thread execution, storing local variables. Heap memory is used for dynamic memory allocation of objects and is managed by the Garbage Collector."
  },
  {
    domain: "Java",
    difficulty: "Medium",
    question: "What are the features of Java 8?",
    ideal_answer: "Key features include Lambda expressions, Method references, Functional Interfaces, Stream API, and Default methods in interfaces."
  }
  // Add more questions here to reach your 10-20 round goal!
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("🌱 Seeding database...");
    await Question.deleteMany({}); // Clears existing questions
    await Question.insertMany(questions);
    console.log("✅ Successfully seeded " + questions.length + " questions!");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  });