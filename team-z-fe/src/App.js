import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.scss';
import Game from './components/game/Game'
const App = () => {
  return (
    <Router>
      <div className="App">
      
        
          
            <Game />
          
        
      </div>
    </Router>
  )
}

export default App;