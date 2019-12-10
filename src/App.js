import React from 'react';
import './App.css';
import First from './View/First.jsx';
import Second from './View/Second.jsx';


function App() {
  return (
      <div className="row">

      <div className="First wrap">
      <First/>
      </div>

      <div className="Second wrap">
      <Second/>
      </div>

      </div>
  );
}

export default App;
