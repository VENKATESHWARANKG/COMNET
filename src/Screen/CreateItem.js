import React ,{Component} from 'react';
import axios from 'axios';

import Table from 'react-bootstrap/Table'




export default class CreateItem extends Component{

  constructor(){
    super();
    this.state ={
      Parties:[],
      tableHeader : ["Party Name","Party Type","GST Number","Bank Name","Account Number","IFSC"]
    }
  }
  componentDidMount(){
    const url = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/test-voutl/service/test/incoming_webhook/GetAllParty'
    axios.get(url)
        .then(res => { 
          console.log(res.data)
          this.setState({
            Parties:res
          })
          console.log(this.state.Parties.data)
        }).catch(err => 
          console.log(err)
        )
  }

  
    render(){
        return(
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
                              <input className=" form-control form-control-sm" required/>
                            </div>

                            <div className="col-lg-3">
                            <b><label><span className="mandatory"></span></label> </b>
                              <button className="btn btn-success btn-sm " style={{marginTop:'2rem'}} id="Report" type="submit" >Find Party</button>
                            </div> 
                          </div>   
                        </form>
                      </div>
                      <Table responsive hover size="sm">
                                    <thead>
                                        <tr>
                                            {this.state.tableHeader.map((head,index)=>{
                                                return(<th key={index}>{head}</th>)
                                            })}
                                        </tr>
                                    </thead>
                                    {this.state.loading ? 
                                    <tbody className="spinner-border text-primary errodesc-loading-spinner" role="status">
                                        <tr className="sr-only"><td>Loading...</td></tr>
                                    </tbody>:
                                    (this.state.Parties.length === 0) ? <thead id="emptyTableText"><tr  className="text-muted text-center"><td>No Results Found</td></tr></thead> : 
                                        <tbody>
                                        {this.state.Parties.data.map( (item,index) => {
                                        return ( 
                                                <tr key={index}>
                                                    <td>{(item.PartyName === null) ? "NULL" : item.PartyName}</td>
                                                    <td>{(item.PartyType === null) ? "NULL" : item.PartyType}</td>
                                                    <td>{(item.Registration === null) ? "NULL" :item.Registration}</td>
                                                    <td>{(item.BankName === null) ? "NULL" :item.BankName}</td> 
                                                    <td>{(item.AccountNumber === null) ? "NULL" :item.AccountNumber}</td> 
                                                    <td>{(item.IFSC === null) ? "NULL" :item.IFSC}</td> 
                                                </tr>
                                            )  
                                        })} 
                                        </tbody> 
                                    }
                                </Table>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}