import React, { Component } from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table'




export default class CreateItem extends Component {

  constructor() {
    super();
    this.state = {
      Parties: [],
      tableHeader: ["Party Name", "Party Type", "GST Number", "Bank Name", "Account Number", "IFSC"]
    }
  }
  componentDidMount() {
    const url = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/test-voutl/service/test/incoming_webhook/GetAllParty'
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


  render() {

    return (
      <div className="content-window">
        <div className="container-fluid row">
          <div className="col-12">
            <div className="row content-window-title">
              <div className="col-xl-6 content-window-title-text">
                <b><p style={{ paddingTop: "1em" }}>Create Ledger</p></b>
              </div>
            </div>
            <div className="row mx-auto">
              <div className="col-xl-12 pr-0 pl-0">
                <div className="card m-b-30">
                  <div className=" mx-3 row">
                    <form className='col-lg-12' id='Create Party' onSubmit={this.onSubmit}>
                      <div className="row  mt-3" >
                        <div className="col-lg-3">
                          <b><label>Party Type <span className="mandatory">*</span></label></b>
                          <select className=" form-control form-control-sm" required  >
                            <option value="">Select Party Type</option>
                            <option value="BUYER">BUYER</option>
                            <option value="SELLER">SELLER</option>
                            <option value="TRANSPORTER">TRANSPORTER</option>
                          </select>
                        </div>

                        <div className="col-lg-3">
                          <b><label>Party Name <span className="mandatory">*</span></label> </b>
                          <input className=" form-control form-control-sm" required />
                        </div>

                        <div className="col-lg-3">
                          <button className="btn btn-success btn-sm " style={{ marginTop: '2rem' }} id="Report" type="submit" >Find Party</button>
                          <button className="btn btn-success btn-sm mx-2" style={{ marginTop: '2rem' }} data-toggle="modal" data-target="#exampleModalCenter" >Add Party</button>
                        </div>

                      </div>
                    </form>

                    <table className="table table-striped my-5 ">
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
                          <tbody style={{ textAlign: 'center' }}>
                            {this.state.Parties.data.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>{(item.PartyName === null) ? "NULL" : item.PartyName}</td>
                                  <td>{(item.PartyType === null) ? "NULL" : item.PartyType}</td>
                                  <td>{(item.Registration === null) ? "NULL" : item.Registration}</td>
                                  <td>{(item.BankName === null) ? "NULL" : item.BankName}</td>
                                  <td>{(item.AccountNumber === null) ? "NULL" : item.AccountNumber}</td>
                                  <td>{(item.IFSC === null) ? "NULL" : item.IFSC}</td>
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
                <h5 class="modal-title modal-" id="exampleModalLongTitle">Add Customer</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div>
                  <form className='col-lg-12' id='Create Party' onSubmit={this.onSubmit}>
                    <div className="row  mt-6" >
                      <div className="col-lg-6">
                        <b><label>Customer Type <span className="mandatory">*</span></label></b>
                        <select className=" form-control form-control-sm" required  >
                          <option value="">Select Party Type</option>
                          <option value="BUYER">BUYER</option>
                          <option value="SELLER">SELLER</option>
                          <option value="TRANSPORTER">TRANSPORTER</option>
                        </select>
                      </div>

                      <div className="col-lg-6">
                        <b><label>Customer Name <span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm" required />
                      </div>

                      <div className="col-lg-6 my-3">
                        <b><label>Customer Location <span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm" required />
                      </div>

                      <div className="col-lg-6 my-3">
                        <b><label>Customer Contact Number <span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm" required />
                      </div>

                      <div className="col-lg-6 my-3">
                        <b><label>Bank Name<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm" required />
                      </div>

                      <div className="col-lg-6 my-3">
                        <b><label>Bank Account Number<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm" required />
                      </div>

                      <div className="col-lg-6 my-2">
                        <b><label>Branch<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm" required />
                      </div>

                      <div className="col-lg-6 my-2">
                        <b><label>IFSC<span className="mandatory">*</span></label> </b>
                        <input className=" form-control form-control-sm" required />
                      </div>

                      <div className="col-lg-12 my-2">
                      <button type="submit" class="btn btn-danger float-right" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success float-right mx-2">Add Customer</button>
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