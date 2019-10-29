import React, { Component } from 'react';
import Staff from './Staff.js';
import Cities from './Cities.js';
import Landing from './Landing.js';
import Sabrina from './assets/Sabrina.png';
import Martin from './assets/Martin.png';
import Luke from './assets/Luke.png';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './Header.js';



class App extends Component {
  state = {
    staff: [
      { name: 'Sabrina Miller', position: 'Digital Project Owner', photo: Sabrina, id: 1 },
      { name: 'Martin Wright', position: 'Technical Development Team Lead', photo: Martin, id: 2 },
      { name: 'Luke Williams', position: 'Agile & Lean Methodology Ninja', photo: Luke, id: 3 }
    ]
  }

  render() {
    return (

      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path='/' component={Landing} />
          <Route path='/staff'> <Staff staff={this.state.staff} /> </Route>
          <Route path='/cities'> <Cities /> </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}





export default App;
