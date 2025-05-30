import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-95 backdrop-blur-sm bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <button className="text-gray-300 hover:text-purple-400 transition-colors">
          <Menu size={24} />
        </button>
        
        <div className="flex items-center">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.creativefabrica.com%2Fwp-content%2Fuploads%2F2023%2F05%2F08%2FVideo-Game-Controller-Logo-Graphics-69127373-1.png&f=1&nofb=1&ipt=6e6249efa9d905ce20b170e7f5aea4b1f2605962ec190012dccb03b3496e88dd" 
            alt="Premium Mobile Games Logo" 
            className="h-10 w-auto mr-3"
            loading="lazy"
          />
          <h1 className="text-2xl font-bold text-white">
            Premium Games
          </h1>
        </div>
        
        <button className="text-gray-300 hover:text-purple-400 transition-colors">
          <Search size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;