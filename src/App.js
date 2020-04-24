import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Homepage from'./pages/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact='/' component={Homepage}/>
      </Switch>
      
    </div>
  );
}

export default App;
