import React, { Component } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table'




export default class Purchase extends Component {

  constructor() {
    super();
    this.state = {
      Parties: [],
      CustomerType:"",
      CustomerName:"",
      CustomerLocation:"",
      CustomerRegisterNumber:"",
      BankName:"",
      AccountNumber:"",
      BankBranch:"",
      IFSC:"",
      tableHeader: ["Invoice Date", "Seller Name", "Buyer Name", "Invoice Number", "Invoice Amount","Payment Status","Remarks"]
    }
  }
  componentDidMount() {
    const url = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/test-voutl/service/test/incoming_webhook/GetAllInvoice'
    axios.get(url)
      .then(res => {
        console.log(res.data)
        this.setState({
          Parties: res
        })
        console.log(this.state.Parties.data)
      }).catch(err =>
        console.log(err)
      )
  }

  onChangeCustomerType(e) {
    // this.setState({
    //   CustomerType: e.target.value
    // })
    console.log('PartyType :',e.target.value)
  }


  OnChangeCustomerName(e){
    // this.setState({
    //   CustomerName: e.target.value
    // })
    console.log('CustomerName :',e.target.value)
  }


  OnChangeCustomerLocation(e){
    // this.setState({
    //   CustomerName: e.target.value
    // })
    console.log('CustomerLocation :',e.target.value)
  }

  OnChangeCustomerRegisterNumber(e){
    // this.setState({
    //   CustomerRegisterType: e.target.value
    // })
    console.log('CustomerRegisterNumber:',e.target.value)
  }

  
  OnChangeBankName(e){
    // this.setState({
    //   CustomerName: e.target.value
    // })
    console.log('BankName :',e.target.value)
  }

  
  OnChangeAccountNumber(e){
    // this.setState({
    //   CustomerName: e.target.value
    // })
    console.log('AccountNumber :',e.target.value)
  }

  
  OnChangeBankBranch(e){
    // this.setState({
    //   CustomerName: e.target.value
    // })
    console.log('BankBranch :',e.target.value)
  }

  
  OnChangeIFSC(e){
    // this.setState({
    //   CustomerName: e.target.value
    // })
    console.log('IFSC :',e.target.value)
  }
  render() {

    return (
      <div className="content-window">
        <div className="container-fluid row">
          <div className="col-12">
            <div className="row content-window-title">
              <div className="col-xl-12 content-window-title-text text-center">
                <b><p style={{ paddingTop: "1em",fontSize:20 }}>Create Shipment</p></b>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="col-xl-12 pr-0 pl-0">
                <div className="card">
                  <div className=" mx-3 row">
                    <form className='col-lg-12' id='Create Party' onSubmit={this.onSubmit}>
                      <div className="row  mt-3" >
                        <div className="col-lg-3">
                          <b><label>Seller Name <span className="mandatory">*</span></label></b>
                          <select className=" form-control form-control-sm" onChange={this.onChangeCustomerType} value={this.state.CustomerType} required  >
                            <option value="">Select Customer Type</option>
                            <option value="BUYER">BUYER</option>
                            <option value="SELLER">SELLER</option>
                            <option value="TRANSPORTER">TRANSPORTER</option>
                          </select>
                        </div>
                        <div className="col-lg-3">
                          <b><label>Buyer  Name <span className="mandatory">*</span></label></b>
                          <select className=" form-control form-control-sm" onChange={this.onChangeCustomerType} value={this.state.CustomerType} required  >
                            <option value="">Select Customer Type</option>
                            <option value="BUYER">BUYER</option>
                            <option value="SELLER">SELLER</option>
                            <option value="TRANSPORTER">TRANSPORTER</option>
                          </select>
                        </div>

   
                        <div className="col-lg-3">
                          <b><label>Invoice Number <span className="mandatory">*</span></label> </b>
                          <input className=" form-control form-control-sm" required />
                        </div>

                        <div className="col-lg-3">
                          <button className="btn btn-success btn-sm " style={{ marginTop: '2rem' }} id="Report" type="submit" >Find Shipment</button>
                          <button className="btn btn-success btn-sm mx-2" style={{ marginTop: '2rem' }} data-toggle="modal" data-target="#exampleModalCenter" >Add Shipment</button>
                        </div>

                      </div>
                    </form>
                    
                    <table className="table table-striped my-5  " >
                      <thead class="table-success sticky-top " style={{ textAlign: 'center' }}>
                        <tr>
                          {this.state.tableHeader.map((head, index) => {
                            return (<th key={index}>{head}</th>)
                          })}
                        </tr>
                      </thead>
                      {this.state.loading ?
                        <tbody className="spinner-border text-primary errodesc-loading-spinner" role="status">
                          <tr className="sr-only"><td>Loading...</td></tr>
                        </tbody> :
                        (this.state.Parties.length === 0) ? <thead id="emptyTableText"><tr className="text-muted text-center"><td>No Results Found</td></tr></thead> :
                          <tbody className ="text-center">
                            {this.state.Parties.data.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:'2-digit'}).format(item.InvoiceDate) === null
                                  ? "NULL" :new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"2-digit",day:'2-digit'}).format(item.InvoiceDate)}</td>
                                  <td>{(item.SellerName  === null) ? "NULL" : item.SellerName }</td>
                                  <td>{(item.BuyerName   === null) ? "NULL" : item.BuyerName  }</td>
                                  <td>{(item.InvoiceNumber === null) ? "NULL" : item.InvoiceNumber}</td>
                                  <td>{Number(item.InvoiceAmount === null) 
                                  ? "NULL" :Number(item.InvoiceAmount)}</td>
                                  <td>{(item.IFSC === null) ? "NULL" : item.IFSC}</td>
                                  <td>{(item.Registration === null) ? "NULL" : item.Registration}</td>
                                </tr>
                              )
                            })}
                          </tbody>
                      }
                    </table>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title modal-" id="exampleModalLongTitle">Add Shipment</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div>
                  <form className='col-lg-12' id='Create Party' onSubmit={this.onSubmit}>
                    <div className="row  mt-6" >
                      <div className="col-lg-6">
                        <b><label>Seller Name <span className="mandatory">*</span></label></b>
                        <select className=" form-control form-control-sm" onChange={this.onChangeCustomerType} value={this.state.CustomerType} required >
                          <option value="">Seller Name</option>
                          <option value="BUYER">BUYER</option>
                          <option value="SELLER">SELLER</option>
                          <option value="TRANSPORTER">TRANSPORTER</option>
                        </select>
                      </div>
                      
                      <div className="col-lg-6">
                        <b><label>Buyer Name <span className="mandatory">*</span></label></b>
                        <select className=" form-control form-control-sm" onChange={this.onChangeCustomerType} value={this.state.CustomerType} required >
                          <option value="">Buyer Name</option>
                          <option value="BUYER">BUYER</option>
                          <option value="SELLER">SELLER</option>
                          <option value="TRANSPORTER">TRANSPORTER</option>
                        </select>
                      </div>
                      
                      <div className="col-lg-6 my-3">
                        <b><label>Invoice Date <span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm"  />
                      </div>

                      <div className="col-lg-6 my-3">
                        <b><label>Invoice Number <span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm"  />
                      </div>

                      <div className="col-lg-6 my-3">
                        <b><label>Invoice Qty<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm"  />
                      </div>

                      <div className="col-lg-6 my-3">
                        <b><label>Invoice Amount<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm"  />
                      </div>

                      <div className="col-lg-6 my-2">
                        <b><label>TransPort Name<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm"  />
                      </div>

                      <div className="col-lg-6 my-2">
                        <b><label>TransPort Remarks<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm"  />
                      </div>

                      <div className="col-lg-12 my-2">
                      <button type="submit" class="btn btn-success float-right mx-2">Add Shipment</button>
                      <button type="submit" class="btn btn-danger float-right" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}