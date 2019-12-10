import React from 'react';
import './css/UI.css';

function Dash(){
  var time=new Date().toLocaleTimeString();
  var today="05";
  var completed="00";
    return(
      <div className="Dash Card">
      <br></br>
      <div className="block">
      <button className="btn btn-dark new-button" >Add</button>
      </div>
      <span className="timer">{time}</span>
      <div className="card-body">
      <div className="activity-wrap">
      <div className="activity">
      {today}<br></br>
      Today
      </div>
      <div className="activity">
      {completed}<br></br>
      Complete
      </div>

      </div>
      </div>

      </div>
  );
}
export default Dash;
