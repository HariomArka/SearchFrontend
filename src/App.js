import React, { useState } from 'react';
import { Search, Code, BookOpen, Clock, TrendingUp, Star, Target, Zap } from 'lucide-react';
import ProblemList from './components/ProblemList';

function App() {
  const [query, setQuery] = useState('');
  const [problems, setProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCount, setSearchCount] = useState(0);

  const searchProblems = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/search?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      console.log(data); // ← Check this in your browser console
      setProblems(data.results);
      setSearchCount(prev => prev + 1);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchProblems();
    }
  };

  const topicColors = [
    { name: 'Arrays', color: 'from-gray-800 to-black', bg: 'hover:bg-red-50', border: 'hover:border-red-500', text: 'hover:text-red-600' },
    { name: 'Linked Lists', color: 'from-red-800 to-red-900', bg: 'hover:bg-gray-900', border: 'hover:border-gray-700', text: 'hover:text-gray-200' },
    { name: 'Trees', color: 'from-black to-gray-900', bg: 'hover:bg-red-50', border: 'hover:border-red-500', text: 'hover:text-red-600' },
    { name: 'Graphs', color: 'from-red-700 to-black', bg: 'hover:bg-gray-900', border: 'hover:border-gray-700', text: 'hover:text-gray-200' },
    { name: 'Dynamic Programming', color: 'from-gray-900 to-red-900', bg: 'hover:bg-red-50', border: 'hover:border-red-500', text: 'hover:text-red-600' },
    { name: 'Sorting', color: 'from-black to-red-800', bg: 'hover:bg-gray-900', border: 'hover:border-gray-700', text: 'hover:text-gray-200' },
    { name: 'Binary Search', color: 'from-red-900 to-black', bg: 'hover:bg-red-50', border: 'hover:border-red-500', text: 'hover:text-red-600' },
    { name: 'Recursion', color: 'from-gray-800 to-red-900', bg: 'hover:bg-gray-900', border: 'hover:border-gray-700', text: 'hover:text-gray-200' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-950">
      {/* Header */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-red-900/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-red-600 to-black rounded-lg shadow-lg border border-red-800">
              <Code className="h-6 w-6 text-red-100" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
              Coding Problem Search
            </h1>
            {searchCount > 0 && (
              <div className="ml-auto flex items-center gap-2">
                <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 text-red-200 px-3 py-1 rounded-full text-sm font-medium border border-red-700">
                  {searchCount} search{searchCount > 1 ? 'es' : ''} completed
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-red-100 mb-2">
              Find Your Next Challenge
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Search through thousands of coding problems by topic, difficulty, or keywords.
              Perfect your data structures and algorithms skills.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-black rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-red-800/50 p-2">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 pl-4">
                    <Search className="h-5 w-5 text-red-400" />
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter DSA topic (e.g., graph, dp, stack, binary tree)..."
                    className="flex-1 py-4 px-2 text-lg placeholder-red-300/50 border-none outline-none bg-transparent text-red-100"
                  />
                  <button
                    onClick={searchProblems}
                    disabled={isLoading || !query.trim()}
                    className="flex-shrink-0 bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-500 hover:to-red-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl border border-red-700"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                        Searching...
                      </div>
                    ) : (
                      'Search'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Topics with Enhanced Colors */}
          <div className="max-w-4xl mx-auto mt-6">
            <p className="text-center text-red-300/70 mb-4">Popular topics:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {topicColors.map((topic) => (
                <button
                  key={topic.name}
                  onClick={() => setQuery(topic.name.toLowerCase())}
                  className={`group px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-red-200 border border-red-800/50 ${topic.bg} ${topic.border} ${topic.text} transition-all duration-200 hover:shadow-lg relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-20 transition-opacity duration-200`}></div>
                  <span className="relative">{topic.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Results</h3>
                {problems.length > 0 && (
                  <div className="flex items-center gap-4">
                    <p className="text-gray-600">{problems.length} problems found</p>
                    <div className="flex items-center gap-2">
                      {problems.filter(p => p.difficulty === 'easy').length > 0 && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                          <Target className="h-3 w-3" />
                          {problems.filter(p => p.difficulty === 'easy').length} Easy
                        </span>
                      )}
                      {problems.filter(p => p.difficulty === 'medium').length > 0 && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                          <Star className="h-3 w-3" />
                          {problems.filter(p => p.difficulty === 'medium').length} Medium
                        </span>
                      )}
                      {problems.filter(p => p.difficulty === 'hard').length > 0 && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                          <Zap className="h-3 w-3" />
                          {problems.filter(p => p.difficulty === 'hard').length} Hard
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <ProblemList problems={problems} />
        </div>
      </div>
    </div>
  );
}

export default App;