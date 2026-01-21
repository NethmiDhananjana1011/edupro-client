import React, { useState } from 'react';
import { FaFilePdf, FaFileWord, FaFileImage, FaDownload, FaFilter } from 'react-icons/fa';

const Resources = () => {
  const [filter, setFilter] = useState('All');

  // Mock Data: Downloadable Files
  const files = [
    { id: 1, name: "Physics Chapter 1 Notes.pdf", type: "PDF", size: "2.4 MB", date: "10 Oct, 2026", subject: "Physics" },
    { id: 2, name: "Organic Chemistry Cheat Sheet.pdf", type: "PDF", size: "1.2 MB", date: "12 Oct, 2026", subject: "Chemistry" },
    { id: 3, name: "Calculus Formulas.docx", type: "DOC", size: "850 KB", date: "14 Oct, 2026", subject: "Math" },
    { id: 4, name: "Biology Diagrams.png", type: "IMG", size: "4.5 MB", date: "15 Oct, 2026", subject: "Biology" },
    { id: 5, name: "English Essay Guide.pdf", type: "PDF", size: "1.8 MB", date: "16 Oct, 2026", subject: "English" },
    { id: 6, name: "Previous Year Questions 2025.pdf", type: "PDF", size: "5.0 MB", date: "18 Oct, 2026", subject: "General" },
  ];

  // Helper to choose icon based on file type
  const getFileIcon = (type) => {
    if (type === 'PDF') return <FaFilePdf className="text-red-500 text-3xl" />;
    if (type === 'DOC') return <FaFileWord className="text-blue-500 text-3xl" />;
    if (type === 'IMG') return <FaFileImage className="text-purple-500 text-3xl" />;
    return <FaFilePdf className="text-gray-400 text-3xl" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Study Resources 📚</h1>
          <p className="text-gray-500 text-sm mt-1">Download notes and reference materials.</p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
          {['All', 'Physics', 'Chemistry', 'Math'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                filter === tab ? 'bg-emerald-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* FILE LIST */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {files.map((file, index) => (
          <div key={file.id} className="flex items-center justify-between p-5 border-b border-gray-50 hover:bg-gray-50 transition group">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                {getFileIcon(file.type)}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 group-hover:text-emerald-600 transition">{file.name}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                  <span className="font-bold bg-gray-100 px-2 py-0.5 rounded text-gray-500">{file.type}</span>
                  <span>• {file.size}</span>
                  <span>• {file.date}</span>
                </div>
              </div>
            </div>

            <button className="p-3 rounded-xl bg-gray-100 text-gray-500 hover:bg-emerald-500 hover:text-white hover:shadow-lg transition">
              <FaDownload />
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Resources;