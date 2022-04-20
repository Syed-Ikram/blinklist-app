import React from 'react';
import LibPage from './components/pages/MyLibrary';
import ExplorePage from './components/pages/Explore';
import BookDetailPage from './components/pages/BookDetail';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LibPage />}/>
        <Route path='/explore' element={<ExplorePage />}/>
        <Route path='/bookdetail' element={<BookDetailPage />}/>
      </Routes>      
    </BrowserRouter>
      
    );
}

export default App;