import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrophy, FaRedo, FaExclamationTriangle } from 'react-icons/fa';

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // <--- New Error State

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error("No Login Token Found. Please Logout and Login again.");
        }

        console.log("📡 Fetching Exam Data...");
        const res = await axios.get('http://localhost:5000/api/exam', {
          headers: { 'auth-token': token }
        });
        
        console.log("✅ Exam Data Received:", res.data);
        setQuestions(res.data);
        setLoading(false);
      
      } catch (err) {
        console.error("❌ Exam Fetch Error:", err);
        // Save the error message to show user
        setError(err.response?.data?.error || err.message);
        setLoading(false);
      }
    };
    fetchExam();
  }, []);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  // --- RENDERING ---

  // 1. Loading Screen
  if (loading) return (
      <div className="p-10 text-center text-blue-600 font-bold text-xl animate-pulse">
        ⏳ Loading Exam...
      </div>
  );

  // 2. Error Screen (The Fix!)
  if (error) return (
      <div className="p-10 text-center">
          <div className="text-red-500 text-5xl mb-4 flex justify-center"><FaExclamationTriangle /></div>
          <h2 className="text-xl font-bold text-gray-800">Oops! Something went wrong.</h2>
          <p className="text-red-600 bg-red-50 p-3 rounded mt-2 inline-block font-mono">{error}</p>
          <br />
          <p className="text-gray-500 mt-4 text-sm">Try Logging out and Logging back in.</p>
      </div>
  );

  // 3. Quiz Screen
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        {showScore ? (
          <div className="text-center">
            <div className="text-6xl text-yellow-400 mb-4 flex justify-center"><FaTrophy /></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
            <p className="text-gray-500 mb-6">You scored {score} out of {questions.length}</p>
            <button onClick={resetQuiz} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center gap-2 mx-auto">
              <FaRedo /> Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">React Skill Assessment</h2>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                  {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <p className="text-gray-600 text-lg">{questions[currentQuestion]?.question}</p>
            </div>
            <div className="flex flex-col gap-3">
              {questions[currentQuestion]?.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition font-medium text-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Exam;