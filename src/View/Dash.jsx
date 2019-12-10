import React from 'react';
import Popup from 'reactjs-popup';
import './css/UI.css';

function Dash(){
  const Pop = () => (
    <Popup
      trigger={<button className="new-button"> Add </button>}
      modal
      closeOnDocumentClick
    >
      <span className="my-modal"> Modal content </span>
    </Popup>
  );
  var time=new Date().toLocaleTimeString();
  var today="05";
  var completed="00";
    return(
      <div className="Dash Card">
      <br></br>

      <div className="block">
      <Pop />
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
