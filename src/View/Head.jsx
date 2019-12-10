import React from 'react';
import './css/UI.css';

function Head(){
  var name="Schdlr App";
  var id="Under Development";
  const myStyle={
    color:"orange"
  }
    return(
      <div className="Head Card">
      <br></br>
      <div className="block">
      <div className="img"></div>
      <span className="days">M</span> <span className="days" >T</span> <span className="days">W</span> <span style={myStyle} className="days">Th</span> <span className="days">F</span> <span className="days">S</span> <span className="days">S</span>
      </div>
      <br className="clear"></br>
      <div className="user" style={myStyle}>
      {name} <br></br> {id} 
      </div>
      <br className="clear"></br>
      </div>
  );
}
export default Head;
