import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import HomeView from './HomeView';
import AddKegComponent from './AddKegComponent';
import EditKegComponent from './EditKegComponent';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route path='/addkeg' component={AddKegComponent} />
          <Route path='/editkeg' component={EditKegComponent}/>
        </Switch>
    </div>
  );
}

export default App;
