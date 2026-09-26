import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Retreat from './pages/Retreat';
import Contact from './pages/Contact';

type Page = 'home' | 'services' | 'retreat' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className="logo"
            onClick={() => setCurrentPage('home')}
            style={{ cursor: 'pointer' }}
          >
            CÉCILIA OHAYON
          </div>
          <ul className="nav-links">
            <li><button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => setCurrentPage('services')} className={currentPage === 'services' ? 'active' : ''}>Services</button></li>
            <li><button onClick={() => setCurrentPage('retreat')} className={currentPage === 'retreat' ? 'active' : ''}>Gathering Circle Retreat</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'retreat' && <Retreat />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h3>CÉCILIA OHAYON</h3>
          <ul>
            <li><a href="https://wa.me/33716599324" target="_blank" rel="noopener noreferrer">WHATSAPP</a></li>
            <li><a href="https://instagram.com/ceciliaohayon" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
            <li><a href="https://calendly.com/ceciliaohayon/connection-call" target="_blank" rel="noopener noreferrer">CALENDAR</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
