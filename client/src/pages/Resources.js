import React, { useState } from 'react';
import { FaFilePdf, FaFileCode, FaFileArchive, FaDownload, FaSearch, FaCheck, FaSpinner, FaBoxOpen } from 'react-icons/fa';

const Resources = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState("");
  const [downloadingIds, setDownloadingIds] = useState([]); // Track which files are downloading

  // --- DATA: RESOURCE FILES ---
  const files = [
    { id: 1, name: "HTML5 & CSS3 Cheat Sheet.pdf", type: "PDF", size: "2.4 MB", date: "10 Oct, 2026", subject: "Frontend", color: "text-red-500" },
    { id: 2, name: "server_setup_script.sh", type: "CODE", size: "12 KB", date: "12 Oct, 2026", subject: "DevOps", color: "text-gray-700" },
    { id: 3, name: "React_Router_Guide.pdf", type: "PDF", size: "1.5 MB", date: "14 Oct, 2026", subject: "Frontend", color: "text-red-500" },
    { id: 4, name: "project_assets_v1.zip", type: "ZIP", size: "45 MB", date: "15 Oct, 2026", subject: "Design", color: "text-yellow-500" },
    { id: 5, name: "MySQL_Queries_Basics.sql", type: "CODE", size: "1.8 MB", date: "16 Oct, 2026", subject: "Backend", color: "text-blue-600" },
    { id: 6, name: "Python_Algorithms_Notes.pdf", type: "PDF", size: "5.0 MB", date: "18 Oct, 2026", subject: "Python", color: "text-red-500" },
    { id: 7, name: "VS_Code_Shortcuts.pdf", type: "PDF", size: "1.0 MB", date: "20 Oct, 2026", subject: "General", color: "text-red-500" },
    { id: 8, name: "Docker_Compose_Example.yml", type: "CODE", size: "4 KB", date: "22 Oct, 2026", subject: "DevOps", color: "text-blue-400" },
  ];

  // --- FILTER & SEARCH LOGIC ---
  const filteredFiles = files.filter(file => {
    const matchesFilter = filter === 'All' || file.subject === filter;
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // --- DOWNLOAD HANDLER (Simulated) ---
  const handleDownload = (id) => {
    // 1. Start Loading
    setDownloadingIds(prev => [...prev, id]);

    // 2. Simulate Delay (1.5 seconds)
    setTimeout(() => {
      // 3. Stop Loading (In real app, file would download here)
      setDownloadingIds(prev => prev.filter(fileId => fileId !== id));
      alert("✅ Download Complete!"); 
    }, 1500);
  };

  const getFileIcon = (type) => {
    if (type === 'PDF') return <FaFilePdf className="text-red-500 text-3xl" />;
    if (type === 'CODE') return <FaFileCode className="text-blue-500 text-3xl" />;
    if (type === 'ZIP') return <FaFileArchive className="text-yellow-500 text-3xl" />;
    return <FaFilePdf className="text-gray-400 text-3xl" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      
      {/* HEADER & SEARCH */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Dev Resources <span className="text-2xl">💾</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">Download source code and documentation.</p>
        </div>

        {/* SEARCH BAR */}
        <div className="flex gap-3 w-full md:w-auto bg-white p-1 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex items-center gap-3 px-4 py-2 w-full md:w-64">
             <FaSearch className="text-gray-400" />
             <input 
               type="text" 
               placeholder="Search file..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="bg-transparent outline-none text-sm w-full font-medium text-gray-600 placeholder-gray-300" 
             />
           </div>
        </div>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 no-scrollbar">
          {['All', 'Frontend', 'Backend', 'DevOps', 'Python', 'Design'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                filter === tab 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
                  : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
      </div>

      {/* FILE LIST */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file) => {
            const isDownloading = downloadingIds.includes(file.id);

            return (
              <div key={file.id} className="flex items-center justify-between p-5 border-b border-gray-50 hover:bg-gray-50 transition group">
                
                {/* File Info */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                    {getFileIcon(file.type)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-emerald-600 transition">{file.name}</h4>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-1 font-medium">
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-500 uppercase tracking-wide">{file.type}</span>
                      <span>• {file.size}</span>
                      <span>• {file.date}</span>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <button 
                  onClick={() => handleDownload(file.id)}
                  disabled={isDownloading}
                  className={`p-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-bold text-sm ${
                    isDownloading 
                      ? "bg-emerald-50 text-emerald-500 cursor-wait" 
                      : "bg-gray-100 text-gray-500 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-200"
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <FaSpinner className="animate-spin" /> Downloading...
                    </>
                  ) : (
                    <FaDownload />
                  )}
                </button>

              </div>
            );
          })
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center h-80 text-gray-400">
            <FaBoxOpen className="text-6xl mb-4 opacity-20" />
            <p className="font-medium">No resources found.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Resources;