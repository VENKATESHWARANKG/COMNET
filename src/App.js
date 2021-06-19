
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Navbars from './components/NavBar';
import CreateItem from './Screen/CreateItem';
import Dashboard from './Screen/Dashboard';
import PartyLedger from './Screen/PartyLedger';
import Payment from './Screen/Payment';
import PaymentList from './Screen/PaymentList';
import Purchase from './Screen/Purchase';

function App() {
  return (
    <Router>
      <Navbars/>
      <br/>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/CreateItem" component={CreateItem}/>
      <Route path="/PartyLedger" component={PartyLedger} />
      <Route path="/Payment" component={Payment}/>
      <Route path="/PaymentlIst" component={PaymentList}/>
      <Route path ="/Purchase" component={Purchase}/>
      <Route/>
    </Router>
  );
}

export default App;
