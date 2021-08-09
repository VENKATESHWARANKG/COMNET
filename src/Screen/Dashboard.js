import React ,{Component} from 'react';
import {Bar, Line,Doughnut,Pie,horizontalBar} from 'react-chartjs-2';
import data from '../DATA/DATA.json'

export default class DashBoard extends Component{

    constructor(props) {
        super(props);

        this.state = {
            plots:data,
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'bottom'
    }

        render(){
        let amountdata= {
              labels: this.state.plots.map(e => { return e.VendorName }),
              datasets: [
                  {
                    
                      label: "Toll-Bill Amount",
                     data: this.state.plots.map(e =>{return e.TotalBillAmount}),
                     backgroundColor:this.state.plots.map(e =>{return e.color})
                    //   [
                    //           "rgb(0, 102, 255)",
                    //           "rgb(232, 114, 210)",
                    //           "rgb(114, 232, 200)",
                    //           "rgb(56, 4, 61)",
                    //           "rgb(230, 0, 230)",
                    //           "rgb(255, 209, 179)",
                    //           "rgb(153, 230, 255)",
                    //           "rgb(0, 153, 255)",
                    //           "rgb(102, 153, 153)",
                    //           "rgb(153, 153, 102)",
                    //           "rgb(204, 102, 255)",
                    //           "rgb(204, 102, 153)",
                    //           "rgb(255, 255, 179)",


                    //   ]

                  }
              ]

          }
        
      

      

      
        return(
            <div class="container">
                <div class="row y-3">
                    <div class="w-50 my-4" >
                    <Bar
                     data={amountdata}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Vendor Bill',
                            fontSize: 25

                        },

                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
                   
                 </div>
                 <div class="w-50 my-4">
                 
                 <Line
                     data={amountdata}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Number Of Records',
                            fontSize: 25

                        },

                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

                 </div>
                    <div class="w-50 my-4">
                 
                    <Doughnut
                     data={amountdata}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Number Of Records',
                            fontSize: 25

                        },

                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />  
                    </div>
                    <div class="w-50 my-4">
                    
                    <Pie
                     data={amountdata}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Number Of Records',
                            fontSize: 25

                        },

                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />  
                    </div>
                </div>
            </div>

        );
    }
}