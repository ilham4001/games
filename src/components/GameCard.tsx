import React from 'react';
import { Star, DownloadCloud as CloudDownload, Cuboid as Android, Apple } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/10 
        hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-800"
      onClick={onClick}
    >
      <div className="relative p-4">
        <div className="absolute top-2 left-2 bg-gray-800/70 backdrop-blur-sm text-amber-400 py-1 px-2 rounded text-xs font-medium z-10 flex items-center">
          <Star className="w-3 h-3 mr-1" /> {game.rating}
        </div>

        {game.isAdult && (
          <div className="absolute top-2 right-2 bg-red-500/70 backdrop-blur-sm text-white py-1 px-2 rounded text-xs font-medium z-10">
            18+
          </div>
        )}

        <div className="flex justify-center relative">
          <img 
            src={game.image} 
            alt={`${game.name} icon`} 
            className="w-32 h-32 object-cover rounded-lg border-2 border-gray-700"
            loading="lazy"
          />
          <div className="absolute -bottom-2 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 text-xs font-bold px-3 py-1 rounded-md">
            MOD
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <h3 className="text-sm font-medium text-gray-100 text-center line-clamp-2 min-h-[2.5rem] mb-2">
          {game.name}
        </h3>
        
        <div className="flex justify-center items-center text-xs text-gray-400">
          <div className="flex space-x-1">
            {game.platforms.includes('android') && <Android className="w-3.5 h-3.5" />}
            {game.platforms.includes('ios') && <Apple className="w-3.5 h-3.5" />}
          </div>
          
          <div className="mx-2 h-3 w-px bg-purple-500/50"></div>
          
          <div className="flex items-center">
            <CloudDownload className="w-3.5 h-3.5 mr-1" />
            <span className="text-purple-400">{game.downloads}</span>
          </div>
        </div>
      </div>
    </div>
  );
}