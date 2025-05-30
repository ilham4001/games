import React from 'react';
import GameCard from './GameCard';
import { Game } from '../types';

interface GameGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ games, onGameClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {games.map((game) => (
        <GameCard 
          key={game.id}
          game={game}
          onClick={() => onGameClick(game)}
        />
      ))}
    </div>
  );
};

export default GameGrid;