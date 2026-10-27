import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GamesGrid from './components/GamesGrid';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import TournamentSection from './components/TournamentSection';

const GAMES_DATA = [
  {
    id: '1',
    title: 'Tic Tac Toe',
    url: 'tic-tac-toe.start.ng',
    author: 'Hamzat',
    image: 'https://images.unsplash.com/photo-1614850523959-e771469c8313?w=400&h=300&fit=crop',
    hasLeaderboard: false,
  },
  {
    id: '2',
    title: 'Mango Rush Beta',
    url: 'mango-rush-beta.start.ng',
    author: 'Bonnke',
    image: 'https://images.unsplash.com/photo-1550745166-4dc32e47535f?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '3',
    title: 'Lagos Apocalypto',
    url: 'lagos-apocalypto.start.ng',
    author: 'Aghogho',
    image: 'https://images.unsplash.com/photo-1535038028727-762471b3927b?w=400&h=300&fit=crop',
    hasLeaderboard: false,
  },
  {
    id: '4',
    title: 'Tesla Skyrun',
    url: 'tesla-skyrun.start.ng',
    author: 'Favour',
    image: 'https://images.unsplash.com/photo-1491608249462-7ecbb7e4e971?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '5',
    title: 'Jollof Rush 3d',
    url: 'jollof-rush-3d.start.ng',
    author: 'Rebecca',
    image: 'https://images.unsplash.com/photo-1542751371-adc38447a06f?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '6',
    title: 'Suomi Sniper',
    url: 'suomi-sniper.start.ng',
    author: 'Salako',
    image: 'https://images.unsplash.com/photo-1536440913612-f2a935c7c51f?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '7',
    title: 'Cork Fc',
    url: 'cork-fc.start.ng',
    author: 'prinuel',
    image: 'https://images.unsplash.com/photo-1574628013671-19774671e985?w=400&h=300&fit=crop',
    hasLeaderboard: false,
  },
  {
    id: '8',
    title: 'Temple Runner',
    url: 'temple-runner.start.ng',
    author: 'Elsie',
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '9',
    title: 'Danfo Make Way',
    url: 'danfo-make-way.start.ng',
    author: 'Okeke',
    image: 'https://images.unsplash.com/photo-1563089145-59997c7688f7?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '10',
    title: 'Jollof Rush',
    url: 'jollof-rush.start.ng',
    author: 'Y_Aisha',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '11',
    title: 'Neon Orchard',
    url: 'neon-orchard.start.ng',
    author: 'chinaza',
    image: 'https://images.unsplash.com/photo-1550745166-4dc32e47535f?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
  {
    id: '12',
    title: 'Testing Player Pick...',
    url: 'testing-player-pick-me.start.ng',
    author: 'AI',
    image: 'https://images.unsplash.com/photo-1628694963926-9e7666943f03?w=400&h=300&fit=crop',
    hasLeaderboard: true,
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <GamesGrid games={GAMES_DATA} />
      <Pagination currentPage={1} totalPages={10} />
      <TournamentSection />
      <Footer />
    </div>
  );
}