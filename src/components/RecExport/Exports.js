import React, { Component } from 'react';
import axios from 'axios';
import Workbook from 'react-excel-workbook';
// import Checkbox from "./Checkbox";

export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assets: [],
            /*   checkboxes: OPTIONS.reduce(
                   (options, option) => ({
                       ...options,
                       [option]: false
                   }),
                   {}
               )*/

        }



        /*
                console.log(this.state.checkboxes);
        
                this.selectAllCheckboxes = this.selectAllCheckboxes.bind(this);
                this.selectAll = this.selectAll.bind(this);
                this.deselectAll = this.deselectAll.bind(this);
                this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
                this.handleFormSubmit = this.handleFormSubmit.bind(this);
                this.export = this.export.bind(this);*/

    }


    /*  selectAllCheckboxes(isSelected) {
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
  
      deselectAll() { this.selectAllCheckboxes(false); }
  
      async handleCheckboxChange(changeEvent) {
          const { name } = changeEvent.target;
  
          await this.setState(prevState => ({
              checkboxes: {
                  ...prevState.checkboxes,
                  [name]: !prevState.checkboxes[name]
              }
          }));
      }
  
      async   handleFormSubmit(formSubmitEvent) {
  
  
  
          formSubmitEvent.preventDefault();
          //await console.log(this.state.checkboxes);
          await Object.keys(this.state.checkboxes)
              .filter(checkbox => this.state.checkboxes[checkbox])
              .forEach(checkbox => {
                  console.log(checkbox, "is selected.");
  
              });
      }
  
      async   export() {
  
          return (<Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Try me!</button>}>
              <Workbook.Sheet data={this.state.assets} name="Sheet A">
              <Workbook.Column label="Department" value="department_id" />
                  {
                      Object.keys(this.state.checkboxes).filter(checkbox => this.state.checkboxes[checkbox])
                          .forEach(checkbox => {
  
                              return (
                                  <React.Fragment key={checkbox}>
                                      <Workbook.Column label={checkbox} value={checkbox} />
                                  </React.Fragment>
                              );
                              // console.log(checkbox, "is selected.");
                              // return( <Workbook.Column label={checkbox} value={checkbox} />);
                          })
  
                  }
  
  
              </Workbook.Sheet>
  
          </Workbook>);
      }
  */



    //calling API
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/exports')
            .then(response => {
                this.setState({
                    assets: response.data

                });
            });
    }



    render() {
        return (
            <div>
                {/*   <hr />

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
                                        Save
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-primary mr-2"
                                        onClick={this.export}
                                    >
                                        done
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


*/}


                {/*just use this code below,, can just import all the fields in the asset table.. above commented code is for selecting necessary fields to export but its not working */}
                <div className="row text-center" style={{ marginTop: '100px' }}>
                    <Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Export</button>}>
                        <Workbook.Sheet data={this.state.assets} name="Sheet A">
                            <Workbook.Column label="Asset Id" value="id" />
                            <Workbook.Column label="Type" value="type" />
                            <Workbook.Column label="Brand Name" value="brandName" />
                            <Workbook.Column label="Warranty Status" value="warrantyStatus" />
                            <Workbook.Column label="Asset Status" value="assetStatus" />
                            <Workbook.Column label="Availability" value="availability" />
                            <Workbook.Column label="Expiry Date" value="expireDate" />
                            <Workbook.Column label="Department" value="department_id" />
                        </Workbook.Sheet>

                    </Workbook>


                </div>
            </div>

        );
    }
}
