
import { FaCheckCircle, FaPlay } from 'react-icons/fa'; // <--- FaClock removed!
import { Link } from 'react-router-dom'; // <--- ADD THIS

const CourseList = ({ courses }) => {
  
  // Safety check: If no courses are passed, show a message
  if (!courses || courses.length === 0) {
    return (
      <div className="p-4 text-gray-400 bg-white rounded-xl border border-gray-100">
        No active courses found. Go to "My Course" to enroll!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course._id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          
          {/* 1. Header: Icon & Subject */}
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
              {/* Show Image if available, otherwise show letter */}
              {course.thumbnail ? (
                <img src={course.thumbnail} alt={course.title} className="w-8 h-8 object-contain" />
              ) : (
                <span className="text-blue-600 font-bold">{course.title ? course.title.charAt(0) : "C"}</span>
              )}
            </div>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              {course.subject || "Course"}
            </span>
          </div>

          {/* 2. Title & Status */}
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 text-lg leading-tight mb-1">
              {course.title || "Untitled Course"}
            </h3>
            <p className="text-sm text-gray-400">
              {course.completedChapters || 0} / {course.totalChapters || 10} Chapters Done
            </p>
          </div>

          {/* 3. Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                course.progress === 100 ? 'bg-green-500' : 'bg-blue-600'
              }`} 
              style={{ width: `${course.progress || 0}%` }}
            ></div>
          </div>

          {/* 4. Action Button */}
          {course.status === 'Completed' ? (
            <button className="w-full py-2 bg-green-50 text-green-600 font-semibold rounded-xl flex items-center justify-center gap-2 cursor-default">
              <FaCheckCircle /> Completed
            </button>
          ) : (
            <div className="flex gap-2">
              <Link 
  to={`/player/${course._id}`} 
  state={{ title: course.title }} // <--- PASS THE TITLE HERE
  className="flex-1 py-2 bg-gray-50 text-gray-600 font-medium rounded-xl hover:bg-gray-100 transition text-center"
>
  Open
</Link>
              <button className="flex-1 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
                <FaPlay className="text-xs" /> Resume
              </button>
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default CourseList;