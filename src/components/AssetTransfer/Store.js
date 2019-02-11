import React, { Component } from 'react';
import axios from 'axios';

import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Store2 extends Component {
    constructor() {
        super();
        this.onChangeReason = this.onChangeReason.bind(this);
        this.onChangeFromDept = this.onChangeFromDept.bind(this);
        this.onChangeFromUser = this.onChangeFromUser.bind(this);
        this.onChangeToDept = this.onChangeToDept.bind(this);
        this.onChangeToUser = this.onChangeToUser.bind(this);
        this.onChangeAssetType = this.onChangeAssetType.bind(this);
        this.onChangeAssetID = this.onChangeAssetID.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        // this.getDepratmentData = this.getDepratmentData.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            transfer_reason: '',
            transfer_fromDept: 1,
            transfer_fromUser: '',
            transfer_toDept: 1,
            transfer_toUser: '',
            transfer_assetType: '',
            transfer_assetID: '',
            transfer_comment: '',
            alert_message: '',
            departments: [],
            users: [],
            assetID: [],
            assetType: []
        }
    }

    componentDidMount() {
        this.getDepartmentData();
        this.getUserData();
        this.getAssetID();
        this.getAssetType()
    }

    getDepartmentData() {

        // var data = 'laptop';
        //var data = this.arequest_type;
        axios.get('http://127.0.0.1:8000/api/getDepartmentData')

            //then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({
                    departments: res.data.departments
                })
                console.log(this.state.departments);
            }).catch(error => {
                this.setState({ alert_message: "error" });
            })//const category
    }

    getUserData() {

        // var data = 'laptop';
        //var data = this.arequest_type;
        axios.get('http://127.0.0.1:8000/api/getUserData')

            //then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({
                    users: res.data.users
                })
                console.log(this.state.users);
            }).catch(error => {
                this.setState({ alert_message: "error" });
            })//const category
    }

    getAssetID() {

        // var data = 'laptop';
        //var data = this.arequest_type;
        axios.get('http://127.0.0.1:8000/api/getAssetID')

            //then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({
                    assetID: res.data.assetID

                })
                console.log(this.state.assetID);

            }).catch(error => {
                this.setState({ alert_message: "error" });
            })//const category
    }

    getAssetType() {

        // var data = 'laptop';
        //var data = this.arequest_type;
        axios.get('http://127.0.0.1:8000/api/getAssetType')

            //then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({
                    assetType: res.data.assetType

                })
                console.log(this.state.assetType);

            }).catch(error => {
                this.setState({ alert_message: "error" });
            })//const category
    }

    onChangeReason(e) {
        this.setState({
            transfer_reason: e.target.value
        }
        );
    }

    onChangeFromDept(e) {
        this.setState({
            transfer_fromDept: e.target.value
        }
        );
    }

    onChangeFromUser(e) {
        this.setState({
            transfer_fromUser: e.target.value
        }
        );
    }


    onChangeToDept(e) {
        this.setState({
            transfer_toDept: e.target.value
        }
        );
    }


    onChangeToUser(e) {
        this.setState({
            transfer_toUser: e.target.value
        }
        );
    }

    onChangeAssetType(e) {
        this.setState({
            transfer_assetType: e.target.value
        }
        );
    }

    onChangeAssetID(e) {
        this.setState({
            transfer_assetID: e.target.value
        }
        );
    }

    onChangeComment(e) {
        this.setState({
            transfer_comment: e.target.value
        }
        );
    }

    /*

    onChange(e) {
        this.setState({
           [e.target.name]: e.target.value
        });
    }
*/
    onSubmit(e) {
        //prevent the page from refreshing
        e.preventDefault();
        //prepare data tobe sent to the api call

        //calling api
        axios.post('http://127.0.0.1:8000/api/transfer/store', {
            transfer_reason: this.state.transfer_reason,
            transfer_fromDept: this.state.transfer_fromDept,
            transfer_fromUser: this.state.transfer_fromUser,
            transfer_toDept: this.state.transfer_toDept,
            transfer_toUser: this.state.transfer_toUser,
            transfer_assetType: this.state.transfer_assetType,
            transfer_assetID: this.state.transfer_assetID,
            transfer_comment: this.state.transfer_comment
        })
            //then(function (res) {return Console.log(res.data);}); 
            .then(res => {
                this.setState({ alert_message: "success" })
            }).catch(error => {
                this.setState({ alert_message: "error" });
            })//const category

    }



    render() {
        return (
            <div>
                <hr />
               {this.state.alert_message === "success"?<SuccessAlert msg={"Record added Successfully."}/>:null}
                {this.state.alert_message === "error"?<ErrorAlert msg={"Error occured while adding."}/>:null}

                <form onSubmit={this.onSubmit}>
                {/*}    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="reason">Reason</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="reason" type="text" value={this.state.transfer_reason} name="reason" onChange={this.onChangeReason}>
                                <option disabled hidden value=''></option>
                                <option>Extra usage</option>
                                <option>To help</option>
                                <option>To play</option>
                                <option>To project</option>

                            </select>
                        </div>
        </div>*/}
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="fromDept">From Department:</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="fromDept" type="text" value={this.state.transfer_fromDept} name="fromDept" onChange={this.onChangeFromDept}>
                                {this.state.departments.map(function (dept, id) {
                                    return (
                                        <option key={dept.id}>
                                            {dept.id}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="fromUser">From Employee</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="fromUser" type="text" value={this.state.transfer_fromUser} name="fromUser" onChange={this.onChangeFromUser}>
                                {this.state.users.map(function (users, id) {
                                    return (
                                        <option key={users.id}>
                                            {users.id}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="toDept">To Department</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="toDept" type="text" value={this.state.transfer_toDept} name="toDept" onChange={this.onChangeToDept}>
                                {this.state.departments.map(function (dept, id) {
                                    return (
                                        <option key={dept.id}>
                                            {dept.id}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="toUser">To Employee</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="toUser" type="text" value={this.state.transfer_toUser} name="toUser" onChange={this.onChangeToUser}>
                                {this.state.users.map(function (users, id) {
                                    return (
                                        <option key={users.id}>
                                            {users.id}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="assetType">Asset Name</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="assetType" type="text" value={this.state.transfer_assetType} name="assetType" onChange={this.onChangeAssetType}>
                                {this.state.assetType.map(function (assetType, id) {
                                    return (
                                        <option key={assetType.id}>
                                            {assetType.type}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="assetID">Asset ID</label>
                        <div className="col-sm-10">
                            <select className="form-control" id="assetID" type="text" value={this.state.transfer_assetID} name="assetID" onChange={this.onChangeAssetID}>
                                {this.state.assetID.map(function (assetID, id) {
                                    return (
                                        <option key={assetID.id}>
                                            {assetID.id}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="comment">Comments:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="comment" name="comment" placeholder="Any more comments" value={this.state.arequest_comment}
                            onChange={this.onChangeComment}></input>
                    </div>
                    </div>

                    <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="toDept">Comments:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="toDept" name="toDept" placeholder="Any more comments" value={this.state.arequest_toDept}
                            onChange={this.onChangeToDept}></input>
                    </div>
                    </div>



                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

