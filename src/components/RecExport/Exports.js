import React, { Component } from 'react';
import axios from 'axios';
import Workbook from 'react-excel-workbook';


const OPTIONS = ["id" , "type" , "brandName" ];


export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exportEnable:false,
            assets: [],
            selections : [],
            checkboxes: OPTIONS.reduce(
                   (options, option) => ({
                       ...options,
                       [option]: false
                   }),
                   {}
               )

        }



        
                console.log(this.state.checkboxes);
        
                this.selectAllCheckboxes = this.selectAllCheckboxes.bind(this);
                this.selectAll = this.selectAll.bind(this);
                this.deselectAll = this.deselectAll.bind(this);
                this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
                this.handleFormSubmit = this.handleFormSubmit.bind(this);
                this.export = this.export.bind(this);
                this.renderExport = this.renderExport.bind(this);

    }


      selectAllCheckboxes(isSelected) {
          Object.keys(this.state.checkboxes).forEach(checkbox => {
              this.setState(prevState => ({
                  checkboxes: {
                      ...prevState.checkboxes,
                      [checkbox]: isSelected
                  }
              }));
          });
      }
  
      selectAll() { this.selectAllCheckboxes(true); }
  
      deselectAll() {
           this.selectAllCheckboxes(false); 
           this.setState({
            exportEnable : false
          });
        }
  
      async handleCheckboxChange(changeEvent) {
          const { name } = changeEvent.target;
  
          await this.setState(prevState => ({
              checkboxes: {
                  ...prevState.checkboxes,
                  [name]: !prevState.checkboxes[name]
              }
              
          }));
          this.setState({
              exportEnable : false
          });
          
      }
  
      async   handleFormSubmit(formSubmitEvent) {
  
            var temArr=[];
  
          formSubmitEvent.preventDefault();
          await Object.keys(this.state.checkboxes)
              .filter(checkbox => this.state.checkboxes[checkbox])
              .forEach(checkbox => {  
                  temArr.push(checkbox);       
                  console.log(checkbox, this.state.checkboxes);
              });
            this.setState({
                selections:temArr,
                exportEnable:true
            })
            if (temArr === undefined || temArr.length == 0) {
                this.setState({
                    exportEnable : false
                });
            }
            else{
                this.export();
            }
            
            console.log(this.state.selections);
            console.log("test",this.state.checkboxes.id);
      }
  
      async   export() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViZmJiNzJmYTNhMGIzMGRkMWQxMTJhOGQ0NjNlNzQ2ZTA1ZTMzMjJjMjY3Y2E4YzZlYmJjYmJiYWVhOTQ2NGYzZTUxNGI2YzUwNTM1NTZhIn0.eyJhdWQiOiIxIiwianRpIjoiZWJmYmI3MmZhM2EwYjMwZGQxZDExMmE4ZDQ2M2U3NDZlMDVlMzMyMmMyNjdjYThjNmViYmNiYmJhZWE5NDY0ZjNlNTE0YjZjNTA1MzU1NmEiLCJpYXQiOjE1NTAwNzgxNzAsIm5iZiI6MTU1MDA3ODE3MCwiZXhwIjoxNTgxNjE0MTcwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.en433D9pE7d_EB-_loJtcs0iFSjahQVl72Gz_YnFbvzXC3gAsHepqToRFxvu-hiPZHFixoMzRIdyooDu47mglW21grI1EzBsqYFSKnzI5O-9o37Q_gRyaZuj2aM2eKk47DTBidAgJ6Hwxpay679fxnetksoC0QCvIBC_JJt3WVUyLRtPXeJevwaZwNtaJp4FLOJrorNMp16svj-lJ3H_38ErYb3CYDGa7efRbTPZ44RMMK6jylozfNd3lCEkBeLscSOw7szFD1rxV-9FCAVh89xRGBr0l1rqFWKco9nskz3cT9qOTIVeQVPzfSyUs3phvDZrDgB7mDhiE0Vus1PoMYyTvB9JnEcSigXLUkbhcr12WT0wlj3dNRvEQ8AtrHjmylmg8dlxmGhK6p0W8GaGHjfCmUxsU02uSbZ6bUw51WtPybJzkFNFpV1gRJGqRxF8m1dZX7fxF-Ty6yg97obN-_q_ZykHf44utpILkXRA011RpSs_SoSaMPmhd4gM66nQeZThcg_t5p97McRTeU6dyD1qZwyADZb4DW7MbMpjgdRxIGSS7RO1En3suDItSErUUnbssiKw9DNueUqfsNRbm2TYR_EBr2kEri81rdEu3MmCnBp4Eb1c02nR5LfGTqoFxXggHBkMtE9rr4ZtXDQs8dTZRTGPSArA_aA3WWRFKSk';
    
            axios.post('http://127.0.0.1:8000/api/auth/exports',{
                data:this.state.selections
            })
                .then(response => {
                    console.log(response.data);
                    this.setState({
                        assets: response.data
    
                    });
                    console.log(this.state.assets);
                });
        

      }

      renderExport(){
        if(this.state.exportEnable===true){
          return(
            <Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Exporty</button>}>
                <Workbook.Sheet data={this.state.assets} name="Sheet A">

                    { this.state.checkboxes.id===true ? <Workbook.Column label="Asset Id" value="id" /> : <></> }
                    { this.state.checkboxes.type===true ? <Workbook.Column label="Asset Id" value="type" /> : <></> }
                    { this.state.checkboxes.brandName===true ? <Workbook.Column label="Asset Id" value="brandName" /> : <></> }
                
                </Workbook.Sheet>
            </Workbook>
          );
        }
      }
  



    //calling API
    componentDidMount() {
     
    }



    render() {
        
        return (
            <div>
                 <hr />

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <form onSubmit={this.handleFormSubmit}>

                                <>
                                    {
                                        Object.keys(this.state.checkboxes).map(day => (
                                            <React.Fragment key={day}>
                                                <div className="form-check">

                                                    <p>
                                                        <input
                                                            type="checkbox"
                                                            name={day}
                                                            checked={this.state.checkboxes[day]}
                                                            onChange={this.handleCheckboxChange}
                                                        />
                                                        {day}
                                                    </p>
                                                </div>
                                            </React.Fragment>
                                        ))
                                    }
                                </>


                                <div className="form-group mt-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary mr-2"
                                        onClick={this.selectAll}
                                    >
                                        Select All
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary mr-2"
                                        onClick={this.deselectAll}
                                    >
                                        Deselect All
                                   </button>
                                    <button type="submit" className="btn btn-primary">
                                        CONFIRM
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
 
                



                {/*just use this code below,, can just import all the fields in the asset table..  */}
                <div className="row text-center" style={{ marginTop: '100px' }}>
                    {this.renderExport()}
                </div>
            </div>

        );
    }
}
