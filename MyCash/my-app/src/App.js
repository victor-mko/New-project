import React, { Component } from 'react';
import './scss/app.css';
import './scss/fonts.css';
import NavBar from './nav-Bar/navBar.js';
import Content from './Content/content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default App;
 