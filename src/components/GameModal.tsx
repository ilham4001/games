import React from 'react';
import { X, Star, HardDrive, DownloadCloud as CloudDownload, Download } from 'lucide-react';
import { Game } from '../types';

interface GameModalProps {
  game: Game;
  onClose: () => void;
  onDownload: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose, onDownload }) => {
  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl max-w-md w-full mx-auto shadow-2xl shadow-purple-900/20 border border-gray-700 relative animate-fadeIn">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 text-center">
          <div className="relative mx-auto w-48 h-48 -mt-20 mb-4">
            <img 
              src={game.image}
              alt={`${game.name} preview`}
              className="w-full h-full object-contain rounded-xl border-4 border-gray-800 shadow-lg"
              loading="lazy"
            />
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">
            {game.name}
          </h2>

          <p className="text-gray-300 text-sm mb-6">{game.description}</p>

          <div className="flex justify-around items-center py-4 border-t border-b border-gray-700 mb-6">
            <div className="flex flex-col items-center">
              <div className="text-purple-400 flex items-center">
                <Star className="w-4 h-4 mr-1" /> {game.rating}
              </div>
              <div className="text-xs text-gray-500 mt-1">Rating</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-purple-400 flex items-center">
                <HardDrive className="w-4 h-4 mr-1" /> {game.size}
              </div>
              <div className="text-xs text-gray-500 mt-1">Size</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-purple-400 flex items-center">
                <CloudDownload className="w-4 h-4 mr-1" /> {game.downloads}
              </div>
              <div className="text-xs text-gray-500 mt-1">Downloads</div>
            </div>
          </div>

          <button 
            onClick={onDownload}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700
              text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center mx-auto
              shadow-lg shadow-purple-900/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" /> Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModal;