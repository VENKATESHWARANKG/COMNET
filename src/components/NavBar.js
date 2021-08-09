import React,{Component} from 'react';
import { NavDropdown,Navbar,Nav,Button,Form,Modal,Table,FormControl} from 'react-bootstrap';
import { useState } from 'react';
//import {Link} from 'react-router-dom';




export default class Navbars extends Component{

  constructor(){
    super();
    this.state={
      ShowModal:false
    }
    
  }

 
render(){
  function Info() {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
    
    return (
      <>
        <Button className="me-2" type="sumbit" variant="success" onClick={() => handleShow(true)}>
        <i class="fas fa-search"></i>
        </Button>
        <Modal animation="true"  show={show} centered="true" onHide={() => setShow(false)}  size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Invoice Info <span class="badge badge-success mx-2">Fully Paid</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
                  <form className='col-lg-12' id='Create Party' >
                    <div className="row  mt-6" >
                      <div className="col-lg-6">
                        <b><label>Invoice Number <span className="mandatory">:</span></label></b>
                        <label className = "mx-2">12345</label>
                        
                      </div>

                      <div className="col-lg-6">
                      <b><label>Invoice Date <span className="mandatory">:</span></label></b>
                         <label className = "mx-2">24/08/2021</label>
                      </div>

                      <div className="col-lg-6 my-3">
                      <b><label>Seller Name <span className="mandatory">:</span></label></b>
                         <label className = "mx-2">Venkateshwaran Konda Govindan<span className="mandatory">:</span></label>
                      </div>

                      <div className="col-lg-6 my-3">
                      <b><label>Buyer Name <span className="mandatory">:</span></label></b>
                         <label className = "mx-2">Venkateshwaran Konda Govindan <span className="mandatory">:</span></label>
                      </div>

                  <Table  bordered hover>
                    <thead>
                      <tr class="table-success">
                        <th className="text-center">#</th>
                        <th className="text-center">Transaction Date</th>
                        <th className="text-center">Transaction Type</th>
                        <th className="text-center">Transaction Reference</th>
                        <th className="text-center">Transaction Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td  className="text-center">1</td>
                        <td  className="text-center">28/04/2021</td>
                        <td  className="text-center">Purchase</td>
                        <td  className="text-center">12345</td>
                        <td  className="text-center">10000.00</td>
                      </tr>
                      <tr>
                        <td  className="text-center">2</td>
                        <td  className="text-center">28/04/2021</td>
                        <td  className="text-center">Return</td>
                        <td  className="text-center">34241</td>
                        <td  className="text-center">3000.00</td>
                      </tr>
                      <tr>
                        <td  className="text-center">3</td>
                        <td  className="text-center">28/04/2021</td>
                        <td  className="text-center">Payment</td>
                        <td  className="text-center">232342</td>
                        <td  className="text-center">5500.00</td>
                      </tr>
                      <tr>                     
                        <td colSpan="4" className="text-center"><b>Discount</b></td>
                        <td  className="text-center">500.00</td>
                      </tr>
                      <tr>                     
                        <td colSpan="4" className="text-center"><b>PaidAmount</b></td>
                        <td  className="text-center">9000.00</td>
                      </tr>
                      <tr>                     
                        <td colSpan="4" className="text-center"><b>PendingAmount</b></td>
                        <td  className="text-center">1000.00</td>
                      </tr>

                    </tbody>
                  </Table>

                    </div>
                  </form>
                </div>
          </Modal.Body>
        </Modal>
      </>
  );
  }    
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
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search Invoice"
              className="mr-2"
              aria-label="Search"
              required
            />
            <Info />
          </Form>
        </Navbar.Collapse>

      </Navbar>
    )
    
    
}
    
}

