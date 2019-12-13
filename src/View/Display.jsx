import React from 'react';
import './css/UI.css';

function Display(){
    return(
      <div className="Display Card">
       <nav className="nav-bar">  <a href="/">Profile</a> | <a href="/tasks">tasks</a> </nav>
      </div>
  );
}
export default Display;
