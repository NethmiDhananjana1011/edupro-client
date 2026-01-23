import React, { useState } from 'react';
import { FaFilePdf, FaFileCode, FaFileArchive, FaDownload } from 'react-icons/fa';

const Resources = () => {
  const [filter, setFilter] = useState('All');

  const files = [
    { id: 1, name: "HTML5 & CSS3 Cheat Sheet.pdf", type: "PDF", size: "2.4 MB", date: "10 Oct, 2026", subject: "Frontend" },
    { id: 2, name: "server_setup_script.sh", type: "CODE", size: "12 KB", date: "12 Oct, 2026", subject: "DevOps" },
    { id: 3, name: "React_Router_Guide.pdf", type: "PDF", size: "1.5 MB", date: "14 Oct, 2026", subject: "Frontend" },
    { id: 4, name: "project_assets_v1.zip", type: "ZIP", size: "45 MB", date: "15 Oct, 2026", subject: "Design" },
    { id: 5, name: "MySQL_Queries_Basics.sql", type: "CODE", size: "1.8 MB", date: "16 Oct, 2026", subject: "Backend" },
    { id: 6, name: "Python_Algorithms_Notes.pdf", type: "PDF", size: "5.0 MB", date: "18 Oct, 2026", subject: "Python" },
  ];

  const getFileIcon = (type) => {
    if (type === 'PDF') return <FaFilePdf className="text-red-500 text-3xl" />;
    if (type === 'CODE') return <FaFileCode className="text-blue-500 text-3xl" />;
    if (type === 'ZIP') return <FaFileArchive className="text-yellow-500 text-3xl" />;
    return <FaFilePdf className="text-gray-400 text-3xl" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dev Resources 💾</h1>
          <p className="text-gray-500 text-sm mt-1">Download source code and docs.</p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
          {['All', 'Frontend', 'Backend', 'DevOps'].map((tab) => (
            <button key={tab} onClick={() => setFilter(tab)} className={`px-4 py-2 rounded-lg text-sm font-bold transition ${filter === tab ? 'bg-emerald-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}>{tab}</button>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {files.map((file) => (
          <div key={file.id} className="flex items-center justify-between p-5 border-b border-gray-50 hover:bg-gray-50 transition group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">{getFileIcon(file.type)}</div>
              <div>
                <h4 className="font-bold text-gray-800 group-hover:text-emerald-600 transition">{file.name}</h4>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                  <span className="font-bold bg-gray-100 px-2 py-0.5 rounded text-gray-500">{file.type}</span>
                  <span>• {file.size}</span>
                  <span>• {file.date}</span>
                </div>
              </div>
            </div>
            <button className="p-3 rounded-xl bg-gray-100 text-gray-500 hover:bg-emerald-500 hover:text-white hover:shadow-lg transition"><FaDownload /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;