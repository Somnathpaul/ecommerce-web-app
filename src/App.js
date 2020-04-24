import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Homepage from'./pages/homepage.component';

const Hatspage =()=>(
    <div>
      <h1>Hats pages</h1>
    </div>
)
  
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop/hats' component={Hatspage}/>
      </Switch>
      
    </div>
  );
}

export default App;
