import React from 'react';
import './css/UI.css';

function Display(){
    return(
      <div className="Display Card">
       <nav>  <a className="fas fa-user icons" href="/"></a>| <a className="fas fa-book-open icons" href="/tasks"></a> </nav>
      </div>
  );
}
export default Display;
