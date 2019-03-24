import React, { Component } from 'react';
import axios from 'axios';
import Workbook from 'react-excel-workbook';
import { Checkbox } from 'semantic-ui-react';
// MDBBtn } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol , MDBInput ,MDBRow , MDBContainer} from 'mdbreact';
const OPTIONS1 = ["assets.code", "assets.type", "assets.brandName","departments.name",
"assets.price","assets.warrantyStatus",'assets.assetStatus',
];

const OPTIONS2 = [
'assets.availability',"assets.expireDate",
"users.firstName","users.lastName","users.status","users.email"];



export default class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exportEnable: false,
            assets: [],
            selections1: [],
            selections2: [],
            count:0,
            lables: {
                'assets.code': "Asset Code",
                'assets.type': " Asset Type",
                'assets.brandName': "Brand Name",
                'departments.name': "Department",
                'assets.price': "Price",
                'assets.warrantyStatus': "Warranty Status",
                'assets.assetStatus': "Asset Status",
                'assets.availability': "Availability",
                'assets.expireDate': "Warranty Expiry Date",
                "users.firstName":"First Name",
                "users.lastName":"last Name",
                "users.status":"User Level",
                "users.email":"email"

            },
            checkboxes1: OPTIONS1.reduce(
                (options, option) => ({
                    ...options,
                    [option]: false
                }),
                {}
            ),

            checkboxes2: OPTIONS2.reduce(
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
        this.handleCheckboxChange1 = this.handleCheckboxChange1.bind(this);
        this.handleCheckboxChange2 = this.handleCheckboxChange2.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.export = this.export.bind(this);
        this.renderExport = this.renderExport.bind(this);

    }


    selectAllCheckboxes(isSelected) {
        Object.keys(this.state.checkboxes1).forEach(checkbox => {
            this.setState(prevState => ({
                checkboxes1: {
                    ...prevState.checkboxes1,
                    [checkbox]: isSelected
                }
            }));
        });
        Object.keys(this.state.checkboxes2).forEach(checkbox => {
            this.setState(prevState => ({
                checkboxes2: {
                    ...prevState.checkboxes2,
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

    async handleCheckboxChange1(changeEvent , data) {
        console.log('event' ,changeEvent );
        console.log('data' ,data );
        const { name } = data;

        await this.setState(prevState => ({
            checkboxes1: {
                ...prevState.checkboxes1,
                [name]: !prevState.checkboxes1[name]
            }

        }));
        
        this.setState({
            exportEnable: false
        });

    }

    async handleCheckboxChange2(changeEvent , data) {
        console.log('event' ,changeEvent );
        console.log('data' ,data );
        const { name } = data;

        await this.setState(prevState => ({
            checkboxes2: {
                ...prevState.checkboxes2,
                [name]: !prevState.checkboxes2[name]
            }

        }));
        
        this.setState({
            exportEnable: false
        });

    }

    async   handleFormSubmit(formSubmitEvent) {

        var temArr1 = [];
        var temArr2 = [];

        formSubmitEvent.preventDefault();
        await Object.keys(this.state.checkboxes1)
            .filter(checkbox => this.state.checkboxes1[checkbox])
            .forEach(checkbox => {
                temArr1.push(checkbox);
                console.log(checkbox, this.state.checkboxes1);
            });
        await Object.keys(this.state.checkboxes2)
            .filter(checkbox => this.state.checkboxes2[checkbox])
            .forEach(checkbox => {
                temArr2.push(checkbox);
                console.log(checkbox, this.state.checkboxes2);
            });
        this.setState({
            selections1: temArr1,
            selections2: temArr2,
            exportEnable: true
        })
        if ((temArr1 === undefined || temArr1.length == 0) && (temArr2 === undefined || temArr2.length == 0)) {
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
                <div>

                <div className="col-lg-6" ><MDBCol>
                <MDBCard style={{ width: "22rem" }}>

                    <MDBCardBody>

                        <MDBCardText>

                            <Workbook filename="example.xlsx" element={<MDBBtn color="primary" rounded>Export</MDBBtn>}>
                                <Workbook.Sheet data={this.state.assets} name="Sheet A">

                                    {this.state.checkboxes1[this.state.selections1[0]] === true ? <Workbook.Column label={this.state.lables[this.state.selections1[0]]} value={this.state.selections1[0]} /> : <></>}
                                    {this.state.checkboxes1[this.state.selections1[1]] === true ? <Workbook.Column label={this.state.lables[this.state.selections1[1]]} value={this.state.selections1[1]} /> : <></>}
                                    {this.state.checkboxes1[this.state.selections1[2]] === true ? <Workbook.Column label={this.state.lables[this.state.selections1[2]]} value={this.state.selections1[2]} /> : <></>}

                                    {this.state.checkboxes2[this.state.selections2[0]] === true ? <Workbook.Column label={this.state.lables[this.state.selections2[0]]} value={this.state.selections2[0]} /> : <></>}
                                    {this.state.checkboxes2[this.state.selections2[1]] === true ? <Workbook.Column label={this.state.lables[this.state.selections2[1]]} value={this.state.selections2[1]} /> : <></>}
                                    {this.state.checkboxes2[this.state.selections2[2]] === true ? <Workbook.Column label={this.state.lables[this.state.selections2[2]]} value={this.state.selections2[2]} /> : <></>}

                                </Workbook.Sheet>
                            </Workbook>
                        </MDBCardText>

                    </MDBCardBody>
                </MDBCard>
            </MDBCol></div>
 
   
                

    </div>

            );
        }
    }




    //calling API
    componentDidMount() {

    }



    render() {

        return (
            <div>
                <MDBCol>
                                <MDBCard style={{ width: "40rem", paddingLeft:'25px' }}>

                                    <MDBCardBody>
                                        <MDBCardTitle>Export Assets' Details</MDBCardTitle>
                                        <hr/>
                                        <MDBCardText>
                                            <form onSubmit={this.handleFormSubmit}>

                                            <MDBContainer>
                                            <MDBRow>
                                                <MDBCol size="6">
                                                    {
                                                        Object.keys(this.state.checkboxes1).map(day => (
                                                            <React.Fragment key={day}>
                                                                <div className="form-check">

                                                                    <p>  <Checkbox toggle name={day} label={this.state.lables[day]} type="checkbox" checked={this.state.checkboxes1[day]}   onChange={this.handleCheckboxChange1} /> 
                                                                    </p>
                                                                </div>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                </MDBCol>
                                                <MDBCol size="6">
                                                    {
                                                        Object.keys(this.state.checkboxes2).map(day => (
                                                            <React.Fragment key={day}>
                                                                <div className="form-check">

                                                                    <p>  
                                                                         <Checkbox toggle name={day} label={this.state.lables[day]} type="checkbox" checked={this.state.checkboxes2[day]}   onChange={this.handleCheckboxChange2} /> 
  
                                                                    </p>
                                                                </div>
                                                            </React.Fragment>
                                                        ))
                                                    }
                                                    </MDBCol>
                                            </MDBRow>
                                            </MDBContainer>

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
                            </MDBCol></div>
                       

        );
    }
}
