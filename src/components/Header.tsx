import { useState } from 'react';
import { Sun, Moon, Bell, Gamepad2, Trophy, Users, FileText } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const navItems = [
  { name: 'Games', icon: Gamepad2 },
  { name: 'Tournament', icon: Trophy },
  { name: 'Creators', icon: Users },
  { name: 'Docs', icon: FileText },
];

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <button className="logo-btn" aria-label="Home">
            <span className="play-icon">▶</span>
            <span className="logo-text">start<span className="dot">.ng</span></span>
          </button>
        </div>

        <nav className="nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                className={`nav-btn ${hoveredItem === item.name ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {}}
              >
                <span className="nav-text">{item.name}</span>
                {hoveredItem === item.name && (
                  <div className={`whimsical-icon whimsical-${item.name.toLowerCase()}`}>
                    <Icon size={24} className="icon-fill" />
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="notification-btn" aria-label="Notifications">
            <Bell size={18} />
            <span className="badge">0</span>
          </button>
          <button className="avatar-btn" aria-label="User profile">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
              alt="User"
              className="avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
}