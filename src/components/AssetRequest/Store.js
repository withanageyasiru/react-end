import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';
import { MDBBtn } from "mdbreact";

export default class Store extends Component {
    constructor(props) {
        super(props);
         this.onChangeID = this.onChangeID.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        //this.onChangeAsset = this.onChangeAsset.bind(this);
      //  this.onChangeType = this.onChangeType.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            arequest_id: '',
            arequest_from: '',
            arequest_to: '',
            arequest_reason: '',
            arequest_description: '',
            alert_message: '',
            //assets: []

        }
    }

  /*  componentDidMount() {
        this.getFormData();
    }
*/
   /* onChangeAsset(e) {
        this.setState({
            //  arequest_asset: e.target.value,
            arequest_type: e.target.value
        }
        );
    }*/

    onChangeID(e) {
        /**
         * get the asset details (ovindu)
         */
          this.setState({
              arequest_id: e.target.value
          }
          );
  
      }

    onChangeFrom(e) {
        this.setState({
            arequest_from: e.target.value
        }
        );
    }

    onChangeTo(e) {
        this.setState({
            arequest_to: e.target.value
        }
        );
    }

    onChangeDescription(e) {
        this.setState({
            arequest_description: e.target.value
        }
        );
    }

    onChangeReason(e) {
        this.setState({
            arequest_reason: e.target.value
        }
        );
    }

    onSubmit(e) {
        //prevent the page from refreshing
        e.preventDefault();
        //prepare data tobe sent to the api call
        
        //calling api
        axios.post('http://104.248.24.192:8080/api/auth/astreq', {
            id: this.state.arequest_id,
            from: this.state.arequest_from,
            to: this.state.arequest_to,
            reason: this.state.arequest_reason,
            description: this.state.arequest_description

        })
            //then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({ alert_message: "success" })
            }).catch(error => {
                this.setState({ alert_message: "error" });
            })//const category


        //after adding a reqest, clear the input boxes
        this.setState({
            arequest_type: '',
            arequest_from: '',
            arequest_to: '',
            arequest_reason: '',
            arequest_description: ''
        });
    }

   /*getFormData() {


        // var data = 'laptop';
        //var data = this.arequest_type;
        axios.get('http://localhost:8000/api/getFormData')

            //then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({
                    assets: res.data.assets
                })
                console.log(this.state.assets);
            }).catch(error => {
                this.setState({ alert_message: "error" });
            })//const category
    }
*/


    render() {
        return (
            <div>
                <hr />
                {this.state.alert_message === "success" ? <SuccessAlert msg={"Record added Successfully."} /> : null}
                {this.state.alert_message === "error" ? <ErrorAlert msg={"Error occured while adding."} /> : null}


                <form onSubmit={this.onSubmit}>


                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="id">Asset</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="id" name="id" placeholder="Asset ID" value={this.state.arequest_id} onChange={this.onChangeID}></input>
                           {/*} <select className="form-control" id="type" type="text" value={this.state.arequest_type} name="type" onChange={this.onChangeAsset}>


                                {this.state.assets.map(function (item, id) {
                                    return (
                                        <option key={item.id}>
                                            {item.type}
                                        </option>
                                    );
                                })}

                            </select>*/}
                        </div>
                    </div>




                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="from">From:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="from" name="from" placeholder="yyyy-mm-dd" value={this.state.arequest_from} onChange={this.onChangeFrom}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="to">To:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="to" name="to" placeholder="yyyy-mm-dd" value={this.state.arequest_to} onChange={this.onChangeTo}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="reason">Reason</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="reason" type="text" value={this.state.arequest_reason} name="reason" onChange={this.onChangeReason}>

                                <option disabled hidden value=''></option>
                                <option>For Extra Usage</option>
                                <option>For On going Project</option>
                                <option>For Take Home</option>
                                <option>For Getting Out</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="from">Comments:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="description" name="description" placeholder="Any more comments" value={this.state.arequest_description}
                                    onChange={this.onChangeDescription}></input>
                            </div>
                        </div>
                    </div> 
                    <MDBBtn  outline type="submit" color="success" className = "rounded-pill">Submit</MDBBtn>
      
                    {/* <button type="submit" size="sm" className="btn btn-primary">Submit</button> */}
                </form>
            </div>
        );
    }
}

