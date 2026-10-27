interface GameCardProps {
  title: string;
  url: string;
  author: string;
  image: string;
  hasLeaderboard: boolean;
}

export default function GameCard({ title, url, author, image, hasLeaderboard }: GameCardProps) {
  return (
    <article className="game-card">
      <div className="card-image">
        <img src={image} alt={title} className="game-thumb" />
        <div className="card-overlay">
          <span className="start-tag">START</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-url">{url}</p>
        <p className="card-author">by {author}</p>
        <div className="card-actions">
          <button className="heart-btn" aria-label="Like">
            ♡
          </button>
          {hasLeaderboard ? (
            <button className="leaderboard-btn">Leaderboard</button>
          ) : null}
          <button className="view-btn">View</button>
        </div>
      </div>
    </article>
  );
}