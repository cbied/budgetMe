import React from 'react';
import AppRouter from './Components/AppRouter'
import Jumbotron from './Components/JumbotronHome'
import Footer from './Components/Footer'
import './App.css';



function App() {
  return (
    <main>
      <AppRouter />

     <Jumbotron />
      
      <Footer />
    </main>
  );
}

export default App;
