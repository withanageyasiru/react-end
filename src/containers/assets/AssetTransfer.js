import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { MDBBtn } from "mdbreact";
import AuthRoute from '../../components/AuthRoute';
import List from '../../components/AssetTransfer/List';
import Store from '../../components/AssetTransfer/Store';

// AssetTransfer - transfer assets among pool and users
// For Admins
class AssetTransfer extends React.Component {
    render() { 
        return (
            <div className="AssetTransfer">
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}

                <Link to="/home/asset_transfer/transfers" className="btn black-text rounded-pill">Transfers</Link> &nbsp;
                <Link to="/home/asset_transfer/transfer/store" className="btn black-text rounded-pill">New Transfer</Link>

                <Switch>
                    <AuthRoute exact path="/home/asset_transfer/transfers" component={List} props={this.props} />
                    <AuthRoute exact path="/home/asset_transfer/transfer/store" component={Store} props={this.props} />
                </Switch>
            </div>
        )
    }
}

export default AssetTransfer;
