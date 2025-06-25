// import React from 'react';

// const ProblemList = ({ problems }) => {
//   const getDifficultyClasses = (difficulty) => {
//     switch (difficulty.toLowerCase()) {
//       case 'easy':
//         return 'bg-green-100 text-green-700 border-green-200';
//       case 'medium':
//         return 'bg-yellow-100 text-yellow-700 border-yellow-200';
//       case 'hard':
//         return 'bg-red-100 text-red-700 border-red-200';
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-200';
//     }
//   };

//   const getPlatformColor = (platform) => {
//     const platformLower = platform?.toLowerCase() || '';
//     if (platformLower.includes('leetcode')) return 'bg-orange-500';
//     if (platformLower.includes('codeforces')) return 'bg-blue-500';
//     if (platformLower.includes('codechef')) return 'bg-yellow-600';
//     if (platformLower.includes('hackerrank')) return 'bg-green-500';
//     if (platformLower.includes('atcoder')) return 'bg-gray-700';
//     return 'bg-purple-500';
//   };

//   if (!problems.length) {
//     return (
//       <div className="text-center mt-8 p-8 bg-gray-50 rounded-lg border border-gray-200">
//         <p className="text-gray-600 text-lg">
//           No problems found. Try another topic.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//       {problems.map((problem, idx) => (
//         <div 
//           key={idx} 
//           className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
//         >
//           {/* Header */}
//           <div className="flex items-start justify-between mb-4">
//             <a 
//               href={problem.url} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-gray-800 font-semibold text-lg leading-tight hover:text-blue-600 transition-colors duration-200 flex-1 mr-3"
//             >
//               {problem.title}
//             </a>
//             <span className={`${getPlatformColor(problem.platform)} text-white text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap`}>
//               {problem.platform}
//             </span>
//           </div>

//           {/* Topics */}
//           <div className="mb-4">
//             <h4 className="text-sm font-medium text-gray-700 mb-2">Topics</h4>
//             <div className="flex flex-wrap gap-1">
//               {problem.topics.map((topic, topicIdx) => (
//                 <span 
//                   key={topicIdx}
//                   className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-200"
//                 >
//                   {topic}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Difficulty */}
//           <div className="flex items-center justify-between">
//             <span className="text-sm font-medium text-gray-700">Difficulty</span>
//             <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyClasses(problem.difficulty)}`}>
//               {problem.difficulty}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


// export default ProblemList;



import React from 'react';

const ProblemList = ({ problems }) => {
  const getDifficultyClasses = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-900 text-green-300 border-green-700';
      case 'medium':
        return 'bg-yellow-900 text-yellow-300 border-yellow-700';
      case 'hard':
        return 'bg-red-900 text-red-300 border-red-700';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-600';
    }
  };

  const getPlatformColor = (platform) => {
    const platformLower = platform?.toLowerCase() || '';
    if (platformLower.includes('leetcode')) return 'bg-red-600 hover:bg-red-700';
    if (platformLower.includes('codeforces')) return 'bg-red-700 hover:bg-red-800';
    if (platformLower.includes('codechef')) return 'bg-red-500 hover:bg-red-600';
    if (platformLower.includes('hackerrank')) return 'bg-gray-700 hover:bg-gray-800';
    if (platformLower.includes('atcoder')) return 'bg-black hover:bg-gray-900';
    return 'bg-red-800 hover:bg-red-900';
  };

  if (!problems.length) {
    return (
      <div className="text-center mt-8 p-8 bg-gray-900 rounded-lg border border-gray-700">
        <p className="text-gray-300 text-lg">
          No problems found. Try another topic.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {problems.map((problem, idx) => (
        <div 
          key={idx} 
          className="bg-gray-900 rounded-lg border border-gray-700 p-6 shadow-lg hover:shadow-xl hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <a 
              href={problem.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-100 font-semibold text-lg leading-tight hover:text-red-400 transition-colors duration-200 flex-1 mr-3"
            >
              {problem.title}
            </a>
            <span className={`${getPlatformColor(problem.platform)} text-white text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap transition-colors duration-200`}>
              {problem.platform}
            </span>
          </div>

          {/* Topics */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Topics</h4>
            <div className="flex flex-wrap gap-2">
              {problem.topics.map((topic, topicIdx) => (
                <span 
                  key={topicIdx}
                  className="bg-black text-red-400 text-xs px-3 py-1 rounded-full border border-red-800 hover:bg-red-900 hover:text-red-300 transition-colors duration-200"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-700">
            <span className="text-sm font-medium text-gray-300">Difficulty</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyClasses(problem.difficulty)}`}>
              {problem.difficulty}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemList;