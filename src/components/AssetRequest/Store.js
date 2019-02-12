import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';


export default class Store extends Component {
    constructor(props) {
        super(props);
        // this.onChangeType = this.onChangeType.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAsset = this.onChangeAsset.bind(this);
        //this.onChange = this.onChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            arequest_type: 'laptop',
            arequest_from: '',
            arequest_to: '',
            arequest_reason: '',
            arequest_description: '',
            alert_message: '',
            assets: []

        }
    }

    componentDidMount() {
        this.getFormData();
    }

    onChangeAsset(e) {
        this.setState({
            //  arequest_asset: e.target.value,
            arequest_type: e.target.value
        }
        );
    }

    /* onChangeType(e) {
          this.setState({
              arequest_type: e.target.value
          }
          );
  
      }*/

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
        axios.post('http://104.248.24.192:8080:8000/api/request/store', {
            arequest_type: this.state.arequest_type,
            arequest_from: this.state.arequest_from,
            arequest_to: this.state.arequest_to,
            arequest_reason: this.state.arequest_reason,
            arequest_description: this.state.arequest_description
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

    getFormData() {


        // var data = 'laptop';
        //var data = this.arequest_type;
        axios.get('http://104.248.24.192:8080:8000/api/getFormData')

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



    render() {
        return (
            <div>
                <hr />
                {this.state.alert_message === "success" ? <SuccessAlert msg={"Record added Successfully."} /> : null}
                {this.state.alert_message === "error" ? <ErrorAlert msg={"Error occured while adding."} /> : null}


                <form onSubmit={this.onSubmit}>


                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="type">Asset</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="type" type="text" value={this.state.arequest_type} name="type" onChange={this.onChangeAsset}>


                                {this.state.assets.map(function (item, id) {
                                    return (
                                        <option key={item.id}>
                                            {item.type}
                                        </option>
                                    );
                                })}

                            </select>
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
                    <button type="submit" size="sm" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

