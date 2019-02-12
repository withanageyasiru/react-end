import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Edit extends Component {

    constructor(props) {
        super(props);

        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            arequest_type: '',
            arequest_from: '',
            arequest_to: '',
            arequest_reason: '',
            arequest_description: '',
            alert_message: '' //initially empty ,set when onsubmit is successfull
        }

    }

    componentDidMount() {
        axios.get('http://104.248.24.192:8080:8000/api/request/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    arequest_type: response.data.type,
                    arequest_from: response.data.from,
                    arequest_to: response.data.to,
                    arequest_reason: response.data.reason,
                    arequest_description: response.data.description
                });
            });
    }

    //arequest_type:response.data.type   arequests:response.data

    onChangeType(e) {
        this.setState({
            arequest_type: e.target.value
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
        //  const {arequest_type,arequest_from,arequest_to,arequest_reason,arequest_description}
        //   = this.state;
        //calling api

        axios.put('http://104.248.24.192:8080:8000/api/request/update/' + this.props.match.params.id, {
            arequest_type: this.state.arequest_type,
            arequest_from: this.state.arequest_from,
            arequest_to: this.state.arequest_to,
            arequest_reason: this.state.arequest_reason,
            arequest_description: this.state.arequest_description
        })

            // then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({ alert_message: "success" })
            }).catch(error => {
                this.setState({ alert_message: "error" });
            })
    }



    render() {
        return (
            <div>
                <hr />

                {/*if submission is success then get SuccessAlert else null*/}
                {this.state.alert_message === "success" ? <SuccessAlert msg={"Record updated Successfully."} /> : null}
                {this.state.alert_message === "error" ? <ErrorAlert msg={"Error occured while updating."} /> : null}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="asset">Asset</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="asset" type="text" value={this.state.arequest_type} name="asset" onChange={this.onChangeType}>
                                <option>Laptop</option>
                                <option>Printer</option>
                                <option>Monitor</option>
                                <option>VGA</option>
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
                                <option>For Extra Usage</option>
                                <option>For ongoing project</option>
                                <option>to play</option>
                                <option>to destroy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="from">Description:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="description" name="description" placeholder="Comments" value={this.state.arequest_description}
                                    onChange={this.onChangeDescription}></input>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}


