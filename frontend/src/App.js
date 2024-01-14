// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';
import TopicsPage from './pages/TopicsPage'
import GalleryPage from './pages/GalleryPage';
import OrderPage from './pages/OrderPage';
import PlayersPage from './pages/PlayersPage';
import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddPlayerPageForm from './pages/AddPlayerPageForm';
import EditPlayerPageForm from './pages/EditPlayerPageForm';

// Define the function that renders the content in Routes, using State.
function App() {

  const [player, setPlayerToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <img src="android-chrome-64x64.png" alt="Mike Meller Logo"/>
            <h1>Mike Meller</h1>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/Collection" element={<PlayersPage setPlayer={setPlayerToEdit}/>} />
                    <Route path="/Topics" element={<TopicsPage/>} />
                    <Route path="/Gallery" element={<GalleryPage/>} />
                    <Route path="/Order" element={<OrderPage/>} />
                    {/* <Route path="/Contact" element={<ContactPage/>} /> */}

                     <Route path="/create" element={<AddPlayerPageForm />} />   
                     <Route path="/update" element={<EditPlayerPageForm playerToEdit={player} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Mike Meller</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;