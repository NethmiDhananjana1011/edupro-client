import React, { useState, useEffect } from 'react';
import { FaClock, FaFlag, FaChevronRight, FaChevronLeft, FaCheckCircle, FaTimesCircle, FaTrophy } from 'react-icons/fa';

const Exam = () => {
  // --- STATE ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({}); // Stores user answers { 0: 'Option A', 1: 'Option B' }
  const [flags, setFlags] = useState({}); // Stores flagged questions
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 Minutes in seconds
  const [isFinished, setIsFinished] = useState(false);

  // --- MOCK DATA (Advanced Questions) ---
  const questions = [
    { id: 1, question: "What is the primary purpose of React's Virtual DOM?", options: ["To directly update the HTML", "To improve performance by minimizing real DOM updates", "To manage database connections", "To compile JavaScript code"], correct: "To improve performance by minimizing real DOM updates" },
    { id: 2, question: "Which Hook is used to handle side effects in a functional component?", options: ["useState", "useReducer", "useEffect", "useMemo"], correct: "useEffect" },
    { id: 3, question: "How do you pass data from a parent component to a child?", options: ["State", "Props", "Context", "Redux"], correct: "Props" },
    { id: 4, question: "What does the 'key' prop help React identify?", options: ["Which items have changed, are added, or are removed", "The style of the element", "The index of the array", "The parent component"], correct: "Which items have changed, are added, or are removed" },
    { id: 5, question: "Which method is used to update state in a Class Component?", options: ["this.updateState()", "this.setState()", "setState()", "this.state = ..."], correct: "this.setState()" },
    { id: 6, question: "What is JSX?", options: ["A new HTML standard", "A syntax extension for JavaScript", "A database query language", "A CSS preprocessor"], correct: "A syntax extension for JavaScript" },
    { id: 7, question: "What is the default port for a React app created with CRA?", options: ["8080", "5000", "3000", "4200"], correct: "3000" },
    { id: 8, question: "Which of these is NOT a React Hook?", options: ["useState", "useFetch", "useEffect", "useContext"], correct: "useFetch" },
  ];

  // --- TIMER LOGIC ---
  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timerId = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      handleSubmit(); // Auto-submit when time is up
    }
  }, [timeLeft, isFinished]);

  // --- FORMAT TIME (MM:SS) ---
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --- HANDLERS ---
  const handleOptionSelect = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const toggleFlag = () => {
    setFlags({ ...flags, [currentQuestion]: !flags[currentQuestion] });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) score++;
    });
    return score;
  };

  const handleSubmit = () => {
    setIsFinished(true);
  };

  // --- RENDER RESULT SCREEN ---
  if (isFinished) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-2xl w-full text-center">
          <div className="w-24 h-24 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            <FaTrophy />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Exam Completed!</h2>
          <p className="text-gray-500 mb-8">Here is your detailed performance report.</p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-2xl font-bold text-gray-800">{questions.length}</div>
              <div className="text-xs text-gray-400 uppercase font-bold">Total Questions</div>
            </div>
            <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
              <div className="text-2xl font-bold text-green-600">{score}</div>
              <div className="text-xs text-green-600 uppercase font-bold">Correct</div>
            </div>
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
              <div className="text-2xl font-bold text-red-500">{questions.length - score}</div>
              <div className="text-xs text-red-500 uppercase font-bold">Wrong</div>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div className={`h-4 rounded-full ${percentage >= 80 ? 'bg-emerald-500' : 'bg-orange-500'}`} style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-sm font-bold text-gray-600 mb-8">You scored {percentage}%</p>

          <button onClick={() => window.location.reload()} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition">
            Retake Exam
          </button>
        </div>
      </div>
    );
  }

  // --- RENDER EXAM INTERFACE ---
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans flex flex-col md:flex-row gap-6">
      
      {/* LEFT: QUESTION AREA */}
      <div className="flex-1">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">React JS Final</span>
            <span className="text-gray-400 text-sm font-bold">Question {currentQuestion + 1} of {questions.length}</span>
          </div>

          {/* Question Text */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-snug">
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-8 flex-1">
            {questions[currentQuestion].options.map((option, idx) => {
              const isSelected = answers[currentQuestion] === option;
              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition flex items-center justify-between group ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className={`font-medium ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>
                    <span className="font-bold mr-3 text-gray-400 group-hover:text-blue-500">
                      {String.fromCharCode(65 + idx)}.
                    </span> 
                    {option}
                  </span>
                  {isSelected && <FaCheckCircle className="text-blue-500" />}
                </button>
              );
            })}
          </div>

          {/* Footer Controls */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-100">
            <button 
              onClick={toggleFlag} 
              className={`flex items-center gap-2 font-bold transition ${flags[currentQuestion] ? 'text-orange-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <FaFlag /> {flags[currentQuestion] ? 'Flagged' : 'Flag for Review'}
            </button>

            <div className="flex gap-3">
              <button 
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold disabled:opacity-50 hover:bg-gray-50 transition"
              >
                Previous
              </button>
              
              {currentQuestion === questions.length - 1 ? (
                <button 
                  onClick={handleSubmit}
                  className="px-8 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200"
                >
                  Submit Exam
                </button>
              ) : (
                <button 
                  onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                  className="px-6 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition flex items-center gap-2"
                >
                  Next <FaChevronRight className="text-xs" />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT: SIDEBAR (Timer & Palette) */}
      <div className="w-full md:w-80 flex flex-col gap-6">
        
        {/* Timer Card */}
        <div className="bg-gray-900 text-white p-6 rounded-3xl shadow-lg flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400 font-bold uppercase mb-1">Time Remaining</div>
            <div className="text-3xl font-mono font-bold">{formatTime(timeLeft)}</div>
          </div>
          <FaClock className="text-3xl text-emerald-400 opacity-80" />
        </div>

        {/* Question Palette */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex-1">
          <h3 className="font-bold text-gray-800 mb-4">Question Palette</h3>
          <div className="grid grid-cols-5 gap-3">
            {questions.map((q, idx) => {
              // Determine bubble color
              let bubbleClass = "bg-gray-100 text-gray-500 border-transparent"; // Default
              if (currentQuestion === idx) bubbleClass = "ring-2 ring-blue-500 ring-offset-2 bg-blue-50 text-blue-600 font-bold"; // Active
              else if (flags[idx]) bubbleClass = "bg-orange-100 text-orange-600 border-orange-200"; // Flagged
              else if (answers[idx]) bubbleClass = "bg-emerald-100 text-emerald-600 border-emerald-200"; // Answered

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm transition border ${bubbleClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-8 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
              <div className="w-3 h-3 rounded-full bg-emerald-100 border border-emerald-200"></div> Answered
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
              <div className="w-3 h-3 rounded-full bg-orange-100 border border-orange-200"></div> Flagged
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
              <div className="w-3 h-3 rounded-full bg-gray-100"></div> Not Visited
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Exam;