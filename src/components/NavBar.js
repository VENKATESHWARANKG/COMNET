import React,{Component} from 'react';
import { NavDropdown,Navbar,Nav,Button,Form,FormControl } from 'react-bootstrap';
//import {Link} from 'react-router-dom';




export default class Navbars extends Component{
render(){

    return(
        // <nav className="navbar navbar-dark bg-success navbar-expand-lg">
        //     <a to="/" className="navbar-brand">ComAgent</a>
        //     <div className="collpase navbar-collapse">
        //         <ul className="navbar-nav mr-auto">
        //             <li className="navbar-item">
        //                 <a className="nav-link dropdown-toggle"  href="#"id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Creation</a>
        //                 <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        //                 <li><a class="dropdown-item" href="#">Action</a></li>
        //                 <li><a class="dropdown-item" href="#">Another action</a></li>
        //                 <li><hr class="dropdown-divider"/></li>
        //                 <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                 </ul>
        //             </li>
        //             <li className="navbar-item">
        //                 <a to="/PartyLedger" className="nav-link">Transcation</a>
        //             </li>
        //             <li className="navbar-item">
        //                 <a to="/Payment" className="nav-link">Ledger</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <Navbar className="navbar navbar-dark bg-success navbar-expand-lg">
        <Navbar.Brand href="/">ComAgent</Navbar.Brand>
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

