import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import AddKegComponent from './AddKegComponent';
import EditKegComponent from './EditKegComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {}
    };
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/keglist' component={KegList} />
          <Route path='/addkeg' component={AddKegComponent} />
          <Route path='/editkeg' component={EditKegComponent} />
        </Switch>
      </div>
    );

  }
}

export default App;
