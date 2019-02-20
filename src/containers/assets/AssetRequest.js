import React from 'react';
import { Switch, Link } from 'react-router-dom';
import AuthRoute from '../../components/AuthRoute';
import Edit from '../../components/AssetRequest/Edit';
import List from '../../components/AssetRequest/List';
import Store from '../../components/AssetRequest/Store';
import View from '../../components/AssetRequest/View';

class AssetRequest extends React.Component {
    render() {
        return (
            <div className="AssetRequest">
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}

                <Link to="/home/asset_request/requests" className="btn black-text rounded-pill" >Your Requests</Link> &nbsp;
                <Link to="/home/asset_request/request/store" className="btn black-text rounded-pill">New Request</Link> &nbsp;
                <Link to="/home/asset_request/request/view" className="btn black-text rounded-pill">Approve</Link>

                <Switch>
                    <AuthRoute exact path="/home/asset_request" component={List} props={this.props} />
                    <AuthRoute exact path="/home/asset_request/requests" component={List} props={this.props} />
                    <AuthRoute exact path="/home/asset_request/request/store" component={Store} props={this.props} />
                    <AuthRoute exact path="/home/asset_request/request/edit/:id" component={Edit} props={this.props} />
                    <AuthRoute exact path="/home/asset_request/request/view" component={View} props={this.props} />
                </Switch>
            </div>
        )
    }
}

export default AssetRequest;
