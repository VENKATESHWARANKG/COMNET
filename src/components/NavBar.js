import React,{Component} from 'react';
import { NavDropdown,Navbar,Nav,Button,Form,FormControl } from 'react-bootstrap';
//import {Link} from 'react-router-dom';




export default class Navbars extends Component{
render(){

    return(
        <Navbar className="navbar navbar-dark bg-success navbar-expand-lg">
        <Navbar.Brand href="/">TRACC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
           
            <NavDropdown title="Vouchers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Purchase">Transaction</NavDropdown.Item>
              <NavDropdown.Item href="/Payment">Payment</NavDropdown.Item>
              <NavDropdown.Item href="/CreateItem">Party</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Reports" id="basic-nav-dropdown">
              <NavDropdown.Item href="/PartyLedger">Party Report</NavDropdown.Item>
              <NavDropdown.Item href="/Payment">Payment Report</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pending Report</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Transport Report</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Invoice" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
    
}
    
}

