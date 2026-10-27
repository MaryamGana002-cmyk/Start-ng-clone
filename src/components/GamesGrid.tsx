import GameCard from './GameCard';

interface GamesGridProps {
  games: Array<{
    id: string;
    title: string;
    url: string;
    author: string;
    image: string;
    hasLeaderboard: boolean;
  }>;
}

export default function GamesGrid({ games }: GamesGridProps) {
  return (
    <section className="games-section">
      <div className="container">
        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}