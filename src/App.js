import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import './App.css';
import Display from './View/Display.jsx';
import First from './View/First.jsx';
import Second from './View/Second.jsx';


function App() {
  return (
      <BrowserRouter>
      <div className="frame wrap">

      <Display></Display>
      {/*setup main page routing for navigation button*/}
      <Switch>
        <Route path="/" exact component={First}/>
        <Route path="/tasks" exact component={Second}/>
      </Switch>

      </div>>
      </BrowserRouter>
  );
}

export default App;
