import React from "react";
import { Switch } from 'react-router-dom';
import { MDBPagination, MDBPageItem, MDBNavLink, MDBCol, MDBRow } from 'mdbreact';
import AuthRoute from '../../components/AuthRoute';
import PoolView from '../../components/AssetPoolView/PoolView';
import AssetView from '../../components/AssetPoolView/AssetView';

// AssetPoolView - view all the available assets in the pool
// For Admins, Department Heads, Finance, Employees
class AssetPoolView extends React.Component {

  render() {
    return (
      <div className="AssetPoolView">
        <MDBRow>
          <MDBCol>
            <MDBPagination className="d-flex d-sm-inline-flex justify-content-center mb-1 font-weight-bold">
              <MDBPageItem>
                <MDBNavLink
                  className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                  to="/home/asset_view/pool"
                >
                  Pool
                </MDBNavLink>
              </MDBPageItem>
              <MDBPageItem>
                <MDBNavLink
                  className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                  to="/home/asset_view/asset"
                >
                  Assets
                </MDBNavLink>
              </MDBPageItem>
            </MDBPagination>
          </MDBCol>
        </MDBRow>
        <hr />
        <div className="AssetManageContent">
          <Switch>
            <AuthRoute path="/home/asset_view/pool" component={PoolView} props={this.props} />
            <AuthRoute path="/home/asset_view/asset" component={AssetView} props={this.props} />
          </Switch>
        </div>

      </div>
    );
  }

}

export default AssetPoolView;
