export default function TournamentSection() {
  return (
    <section className="tournament-section">
      <div className="container">
        <div className="tournament-card">
          <div className="tournament-info">
            <span className="tournament-label">TODAY'S TOURNAMENT · 2H 54M LEFT</span>
            <h2>5 games. 24 hours. One winner.</h2>
            <p>
              Share to enter, then play. 0 players have entered.
            </p>
            <p>
              Next tournament starts in 2h 54m · Tue, Oct 27, 6:00 PM your time. New games, revealed when
              it starts.
            </p>
            <button className="tournament-btn">See the tournament →</button>
          </div>
          <div className="tournament-games">
            <div className="game-thumb">Coin Dash</div>
            <div className="game-thumb">Alley Rally</div>
            <div className="game-thumb">Doom Circuit</div>
            <div className="game-thumb">Perihelion</div>
            <div className="game-thumb">Host Ship</div>
          </div>
        </div>
        <div className="daily-challenge">
          <span className="challenge-label">DAILY CHALLENGE · 8H 54M LEFT</span>
          <h2>Reach 10 in Git Quest</h2>
          <p>One goal a day, set from how pe</p>
          <div className="challenge-image">GIT QUEST</div>
        </div>
      </div>
    </section>
  );
}