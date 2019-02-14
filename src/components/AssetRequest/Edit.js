import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Edit extends Component {

    constructor(props) {
        super(props);

        this.onChangeid = this.onChangeid.bind(this);
        this.onChangeFrom = this.onChangeFrom.bind(this);
        this.onChangeTo = this.onChangeTo.bind(this);
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            arequest_id: '',
            arequest_from: '',
            arequest_to: '',
            arequest_reason: '',
            arequest_description: '',
            alert_message: '' //initially empty ,set when onsubmit is successfull
        }

    }

    componentDidMount() {
        // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViZmJiNzJmYTNhMGIzMGRkMWQxMTJhOGQ0NjNlNzQ2ZTA1ZTMzMjJjMjY3Y2E4YzZlYmJjYmJiYWVhOTQ2NGYzZTUxNGI2YzUwNTM1NTZhIn0.eyJhdWQiOiIxIiwianRpIjoiZWJmYmI3MmZhM2EwYjMwZGQxZDExMmE4ZDQ2M2U3NDZlMDVlMzMyMmMyNjdjYThjNmViYmNiYmJhZWE5NDY0ZjNlNTE0YjZjNTA1MzU1NmEiLCJpYXQiOjE1NTAwNzgxNzAsIm5iZiI6MTU1MDA3ODE3MCwiZXhwIjoxNTgxNjE0MTcwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.en433D9pE7d_EB-_loJtcs0iFSjahQVl72Gz_YnFbvzXC3gAsHepqToRFxvu-hiPZHFixoMzRIdyooDu47mglW21grI1EzBsqYFSKnzI5O-9o37Q_gRyaZuj2aM2eKk47DTBidAgJ6Hwxpay679fxnetksoC0QCvIBC_JJt3WVUyLRtPXeJevwaZwNtaJp4FLOJrorNMp16svj-lJ3H_38ErYb3CYDGa7efRbTPZ44RMMK6jylozfNd3lCEkBeLscSOw7szFD1rxV-9FCAVh89xRGBr0l1rqFWKco9nskz3cT9qOTIVeQVPzfSyUs3phvDZrDgB7mDhiE0Vus1PoMYyTvB9JnEcSigXLUkbhcr12WT0wlj3dNRvEQ8AtrHjmylmg8dlxmGhK6p0W8GaGHjfCmUxsU02uSbZ6bUw51WtPybJzkFNFpV1gRJGqRxF8m1dZX7fxF-Ty6yg97obN-_q_ZykHf44utpILkXRA011RpSs_SoSaMPmhd4gM66nQeZThcg_t5p97McRTeU6dyD1qZwyADZb4DW7MbMpjgdRxIGSS7RO1En3suDItSErUUnbssiKw9DNueUqfsNRbm2TYR_EBr2kEri81rdEu3MmCnBp4Eb1c02nR5LfGTqoFxXggHBkMtE9rr4ZtXDQs8dTZRTGPSArA_aA3WWRFKSk';

        axios.get('http://104.248.24.192:8080/api/auth/request/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    arequest_id: response.data.id,
                    arequest_from: response.data.from,
                    arequest_to: response.data.to,
                    arequest_reason: response.data.reason,
                    arequest_description: response.data.description
                });
            });
    }

    //arequest_id:response.data.id   arequests:response.data

    onChangeid(e) {
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
        //  const {arequest_id,arequest_from,arequest_to,arequest_reason,arequest_description}
        //   = this.state;
        //calling api

        axios.put('http://104.248.24.192:8080/api/auth/request/update/' + this.props.match.params.id, {
            arequest_id: this.state.arequest_id,
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
                            <select className="form-control" id="asset" id="text" value={this.state.arequest_id} name="asset" onChange={this.onChangeid}>
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
                            <input id="text" className="form-control" id="from" name="from" placeholder="yyyy-mm-dd" value={this.state.arequest_from} onChange={this.onChangeFrom}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="to">To:</label>
                        <div className="col-sm-10">
                            <input id="text" className="form-control" id="to" name="to" placeholder="yyyy-mm-dd" value={this.state.arequest_to} onChange={this.onChangeTo}></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="reason">Reason</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="reason" id="text" value={this.state.arequest_reason} name="reason" onChange={this.onChangeReason}>
                                <option>For Extra Usage</option>
                                <option>For ongoing project</option>
                                <option>to play</option>
                                <option>to destroy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="from">Description:</label>
                            <div className="col-sm-10">
                                <input id="text" className="form-control" id="description" name="description" placeholder="Comments" value={this.state.arequest_description}
                                    onChange={this.onChangeDescription}></input>
                            </div>
                        </div>
                    </div>

                    <button id="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}


