import React, { useState, useEffect } from 'react';
import './App.css';
import Pine3DLogo from './Pine3DLogo';

// Örnek ürün verisi
const products = [
  {
    name: 'Mercedes Kalemlik',
    image: '/imgs/urun1.jpg',
    link: 'https://link.dolap.com/gqnn4',
    isNew: true,
  },
  {
    name: 'Mercedes Masa Saati',
    image: '/imgs/urun2.jpg',
    link: 'https://dolap.com/urun/2',
    isNew: true,
  },

  {
    name: 'Garaj Anahtarlık',
    image: '/imgs/urun4.jpg',
    link: 'https://link.dolap.com/ud50z',
    isNew: true,
  },
  {
    name: 'SU-57',
    image: '/imgs/urun3ch.png',
    link: 'https://link.dolap.com/zoym1',
    isNew: true,
  },
  
  {
    name: '3D Anahtarlık',
    image: '/imgs/urun5.jpg',
    link: 'https://dolap.com/urun/5',
    isNew: false,
  },
  {
    name: '3D Bardak Altlığı',
    image: '/imgs/urun6.jpg',
    link: 'https://dolap.com/urun/6',
    isNew: false,
  },
  {
    name: '3D Duvar Süsü',
    image: '/imgs/urun7.jpg',
    link: 'https://dolap.com/urun/7',
    isNew: false,
  },
  {
    name: '3D Kalemlik',
    image: '/imgs/urun8.jpg',
    link: 'https://dolap.com/urun/8',
    isNew: false,
  },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const savedTheme = localStorage.getItem('pine3d-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pine3d-theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Sayfalama hesaplamaları
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="pine3d-header">
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <Pine3DLogo className="pine3d-logo" />
        <h1>Pine3D</h1>
        <p>3D Yazıcı ile Üretilmiş Özel Tasarımlar</p>
      </header>
      <main>
        <h2>Ürünlerimiz</h2>
        <div className="product-gallery">
          {currentProducts.map((product, idx) => (
            <div className="product-card" key={idx}>
              {product.isNew && <div className="new-badge">YENİ</div>}
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="dolap-link">
                Dolap'ta Satın Al
              </a>
            </div>
          ))}
        </div>
        
        {/* Sayfalama */}
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              onClick={goToPreviousPage} 
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ← Önceki
            </button>
            
            <div className="page-numbers">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`page-number ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              onClick={goToNextPage} 
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Sonraki →
            </button>
          </div>
        )}
      </main>
      <footer className="pine3d-footer">
        <p>Bizi Dolap'ta takip edin: <a href="https://dolap.com/magaza/pine3d" target="_blank" rel="noopener noreferrer">dolap.com/magaza/pine3d</a></p>
        <p>© {new Date().getFullYear()} Pine3D</p>
      </footer>
    </div>
  );
}

export default App;
