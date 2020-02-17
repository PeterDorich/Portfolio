/****************************************************************************
 * App.js
 * App is a class component that will essentially hold/load all other components.
 ******************************************************************************/
import React from 'react';
import Navigation from './components/Navigation.js';
import Main from './components/Main.js';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Main />
        <Footer />
      </header>
    </div>
  );
  }
}

export default App;
