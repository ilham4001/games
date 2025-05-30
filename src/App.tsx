import React, { useState, Suspense } from 'react';
import { TowerControl as GameController } from 'lucide-react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GameGrid from './components/GameGrid';
import SectionTitle from './components/SectionTitle';
import { Game } from './types';
import { gameData } from './data/gameData';

// Lazy load modal components
const GameModal = React.lazy(() => import('./components/GameModal'));
const ContentLocker = React.lazy(() => import('./components/ContentLocker'));

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showContentLocker, setShowContentLocker] = useState(false);

  const filteredGames = gameData.filter((game) => 
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };

  const handleDownload = () => {
    setShowContentLocker(true);
  };

  const handleCloseLocker = () => {
    setShowContentLocker(false);
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <SearchBar onSearch={handleSearch} />
        
        <SectionTitle 
          icon={<GameController className="w-5 h-5" />}
          title="Featured Games"
        />
        
        {filteredGames.length > 0 ? (
          <GameGrid 
            games={filteredGames} 
            onGameClick={handleGameClick}
          />
        ) : (
          <div className="text-center text-gray-400 py-12">
            No games found matching your search.
          </div>
        )}
      </main>

      <Suspense fallback={null}>
        {selectedGame && (
          <GameModal 
            game={selectedGame}
            onClose={handleCloseModal}
            onDownload={handleDownload}
          />
        )}

        {showContentLocker && selectedGame && (
          <ContentLocker 
            game={selectedGame}
            onClose={handleCloseLocker}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;