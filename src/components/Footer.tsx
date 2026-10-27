export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <button className="logo-btn" aria-label="Home">
                <span className="play-icon">▶</span>
                <span className="logo-text">start<span className="dot">.ng</span></span>
              </button>
            </div>
            <p className="footer-desc">
              Nigeria's home for browser games, made by the community and by creators across Africa.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>PLAY</h4>
              <ul>
                <li>All games</li>
                <li>Daily tournament</li>
                <li>Leaderboard</li>
                <li>Categories</li>
                <li>The Hangout</li>
              </ul>
            </div>
            <div className="link-group">
              <h4>MAKE GAMES</h4>
              <ul>
                <li>Independent creators</li>
                <li>Build a game</li>
                <li>Docs for your AI (.md)</li>
              </ul>
            </div>
            <div className="link-group">
              <h4>ABOUT</h4>
              <ul>
                <li>About start.ng</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 start.ng</p>
          <p>Games from Nigeria and across Africa.</p>
        </div>
      </div>
    </footer>
  );
}