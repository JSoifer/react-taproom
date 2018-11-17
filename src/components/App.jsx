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
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = JSON.parse(JSON.stringify(this.state.masterKegList));
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList  kegList={this.state.masterKegList} />} />
          <Route path='/addkeg' render={()=><AddKegComponent onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/editkeg' component={EditKegComponent} />
        </Switch>
      </div>
    );

  }
}

export default App;
