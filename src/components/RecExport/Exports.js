import React, { Component } from 'react';
import axios from 'axios';
import Workbook from 'react-excel-workbook';
// MDBBtn } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
const OPTIONS = ["id", "type", "brandName"];


export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exportEnable: false,
            assets: [],
            selections: [],
            lables: {
                id: "ID",
                type: " Asset Type",
                brandName: "Brand Name"
            },
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
            exportEnable: false
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
            exportEnable: false
        });

    }

    async   handleFormSubmit(formSubmitEvent) {

        var temArr = [];

        formSubmitEvent.preventDefault();
        await Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                temArr.push(checkbox);
                console.log(checkbox, this.state.checkboxes);
            });
        this.setState({
            selections: temArr,
            exportEnable: true
        })
        if (temArr === undefined || temArr.length == 0) {
            this.setState({
                exportEnable: false
            });
        }
        else {
            this.export();
        }

        console.log(this.state.selections);
        console.log("test", this.state.checkboxes.id);
    }

    async   export() {

        axios.post('http://104.248.24.192:8080/api/auth/exports', {
            data: this.state.selections
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    assets: response.data

                });
                console.log(this.state.assets);
            });


    }

    renderExport() {
        if (this.state.exportEnable === true) {
            return (
                <MDBCol>
                    <MDBCard style={{ width: "22rem" }}>

                        <MDBCardBody>

                            <MDBCardText>

                                <Workbook filename="example.xlsx" element={<MDBBtn color="primary" rounded>Export</MDBBtn>}>
                                    <Workbook.Sheet data={this.state.assets} name="Sheet A">

                                        {this.state.checkboxes[this.state.selections[0]] === true ? <Workbook.Column label={this.state.lables[this.state.selections[0]]} value={this.state.selections[0]} /> : <></>}
                                        {this.state.checkboxes[this.state.selections[1]] === true ? <Workbook.Column label={this.state.lables[this.state.selections[1]]} value={this.state.selections[1]} /> : <></>}
                                        {this.state.checkboxes.brandName === true ? <Workbook.Column label="Brand Name" value="brandName" /> : <></>}

                                    </Workbook.Sheet>
                                </Workbook>
                            </MDBCardText>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


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



                            <MDBCol>
                                <MDBCard style={{ width: "30rem" }}>

                                    <MDBCardBody>
                                        <MDBCardTitle>Export Assets' Details</MDBCardTitle>
                                        <MDBCardText>
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
                                                                        {this.state.lables[day]}
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
                                                        Done
                                                  </button>

                                                    <div className="row text-center" style={{ marginTop: '100px' }}>

                                                        {this.renderExport()}

                                                    </div>
                                                </div>
                                            </form>
                                        </MDBCardText>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                        </div>
                    </div>
                </div>





                {/*just use this code below,, can just import all the fields in the asset table..  */}

            </div>

        );
    }
}
