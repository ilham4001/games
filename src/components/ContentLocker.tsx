import React from 'react';
import { X } from 'lucide-react';
import { Game } from '../types';

interface ContentLockerProps {
  game: Game;
  onClose: () => void;
}

declare global {
  interface Window {
    _di: () => void;
  }
}

const ContentLocker: React.FC<ContentLockerProps> = ({ game, onClose }) => {
  React.useEffect(() => {
    if (window._di) {
      window._di();
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-[60] p-4 overflow-y-auto">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl max-w-md w-full mx-auto shadow-2xl animate-fadeIn">
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Gaming background" 
            className="w-full h-48 object-cover rounded-t-xl opacity-50"
          />
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-t-xl">
            <img 
              src={game.image} 
              alt={`${game.name} icon`}
              className="w-28 h-28 object-cover rounded-lg border-4 border-gray-800"
            />
          </div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-2">Last Step!</h2>
          <p className="text-gray-300 text-center mb-6">
            Complete just 1 offer below to unlock the download.
          </p>

          <div id="adb-offers" className="space-y-2 mb-6">
            {/* AdBluMedia will inject offers here */}
          </div>
          
          <div className="text-center text-xs text-gray-400">
            <strong>NOTE:</strong> You must complete an offer to download the game.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLocker;