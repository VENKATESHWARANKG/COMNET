import React ,{Component} from 'react';


export default class CreateItem extends Component{
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
                              <button className="btn btn-success btn-sm mt-4" id="Report" type="submit" >Find Party</button>
                            </div> 
                          </div>  
                         
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          
        </div>
        );
    }
}