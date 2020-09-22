import React from 'react';
import Header from '../header';
import Navbar from '../navbar';
import CardList from '../cardList';
import './app.scss';

const App = props => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <CardList />
    </div>
  );
}

export default App;
