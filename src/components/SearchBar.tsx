import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative mb-8 mt-6">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleChange}
        className="block w-full pl-12 pr-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg 
          text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 
          focus:border-transparent transition-all duration-300"
      />
    </div>
  );
};

export default SearchBar;