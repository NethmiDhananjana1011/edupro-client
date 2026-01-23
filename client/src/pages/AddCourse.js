import React, { useState } from 'react';
import { FaCloudUploadAlt, FaVideo, FaImage, FaArrowLeft, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddCourse = () => {
  // State for the form
  const [course, setCourse] = useState({
    title: "",
    tutor: "",
    category: "Web Dev",
    price: "",
    thumbnail: "",
    description: ""
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handlePublish = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        alert("✅ Course Published to Database!");
        // Optional: Redirect to Dashboard
        // navigate('/dashboard'); 
      } else {
        alert("❌ Failed to publish course.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans flex justify-center">
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- LEFT: EDITOR FORM --- */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Link to="/admin" className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-100 text-gray-600">
               <FaArrowLeft />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Create New Course</h1>
          </div>

          <form onSubmit={handlePublish} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Course Title</label>
              <input 
                type="text" 
                name="title" 
                placeholder="e.g., Advanced React Patterns" 
                className="w-full p-4 bg-gray-50 rounded-xl outline-none font-bold text-gray-700 focus:bg-white focus:ring-2 focus:ring-emerald-100 transition"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Tutor Name</label>
                  <input type="text" name="tutor" placeholder="e.g., John Doe" className="w-full p-4 bg-gray-50 rounded-xl outline-none font-bold text-gray-700" onChange={handleChange} />
               </div>
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Category</label>
                  <select name="category" className="w-full p-4 bg-gray-50 rounded-xl outline-none font-bold text-gray-700 cursor-pointer" onChange={handleChange}>
                    <option>Web Dev</option>
                    <option>Python</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
               </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Thumbnail URL (Image)</label>
              <div className="relative">
                 <FaImage className="absolute top-4 left-4 text-gray-400" />
                 <input type="text" name="thumbnail" placeholder="https://..." className="w-full p-4 pl-12 bg-gray-50 rounded-xl outline-none text-gray-600" onChange={handleChange} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Description</label>
              <textarea name="description" rows="4" placeholder="What will students learn?" className="w-full p-4 bg-gray-50 rounded-xl outline-none text-gray-600 resize-none" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
               <FaCloudUploadAlt className="text-xl" /> Publish Course
            </button>

          </form>
        </div>

        {/* --- RIGHT: LIVE PREVIEW --- */}
        <div className="hidden lg:block">
           <h2 className="text-xl font-bold text-gray-400 mb-6 text-center uppercase tracking-widest">Live Preview</h2>
           
           <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-sm mx-auto transform hover:scale-105 transition duration-500">
              
              {/* Preview Image */}
              <div className="h-48 rounded-2xl bg-gray-200 overflow-hidden mb-4 relative">
                 {course.thumbnail ? (
                    <img src={course.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                 ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 flex-col gap-2">
                       <FaImage className="text-4xl" />
                       <span className="text-xs font-bold">No Image</span>
                    </div>
                 )}
                 <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide text-emerald-600">
                    {course.category}
                 </div>
              </div>

              {/* Preview Content */}
              <div>
                 <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">
                    {course.title || "Course Title Here"}
                 </h3>
                 <p className="text-xs text-gray-400 font-bold uppercase mb-4">
                    By {course.tutor || "Tutor Name"}
                 </p>
                 
                 <div className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed">
                    {course.description || "Course description will appear here..."}
                 </div>

                 <button className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                    Enroll Now
                 </button>
              </div>

           </div>
           
           <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">💡 This is how students will see your course.</p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AddCourse;