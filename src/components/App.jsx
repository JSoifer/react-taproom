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
      masterKegList: [
        {
          kegName: 'Oktoberfest Marzen',
          brand: 'Hacker-Pschorr',
          price: 5.25,
          abv: 5.5,
          color: '#ff8C15',
          pintsRemaining: 124
        },
        {
          kegName: 'Dunkel',
          brand: 'Hofbrau',
          price: 5.25,
          abv: 5.5,
          color: '#44110E',
          pintsRemaining: 124
        },
        {
          kegName: 'Weissbier',
          brand: 'Paulaner',
          price: 5.25,
          abv: 5.5,
          color: '#F2B749',
          pintsRemaining: 124
        }
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleSale = this.handleSale.bind(this);
  }
  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = JSON.parse(JSON.stringify(this.state.masterKegList));
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }
  handleSale(keg) {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.pintsRemaining --;
    this.setState(newState);
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList  kegList={this.state.masterKegList} onSale={this.state.handleSale}/>} />
          <Route path='/addkeg' render={()=><AddKegComponent onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/editkeg' component={EditKegComponent} />
        </Switch>
      </div>
    );

  }
}

export default App;
