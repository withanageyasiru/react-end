import React from 'react';
import { Switch } from 'react-router-dom';
import { MDBPagination, MDBPageItem, MDBNavLink, MDBCol, MDBRow } from 'mdbreact';
import AuthRoute from '../../components/AuthRoute';
import AssetAdd from '../../components/AssetManage/AssetAdd';
import AssetEdit from '../../components/AssetManage/AssetEdit';
import AssetRem from '../../components/AssetManage/AssetRem';

// AssetManage - add/remove/edit assets
// For Finance
class AssetManage extends React.Component {
    render() {
        return (
            <div className="AssetManage">
                {/* Your component code goes in components under 
                    src/components/AssetManage directory */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
                <MDBRow>
                    <MDBCol>
                        <MDBPagination className="d-flex d-sm-inline-flex justify-content-center mb-5 font-weight-bold">
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/asset_manage/add"
                                >
                                    Create
                                </MDBNavLink>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/asset_manage/remove"
                                >
                                    Delete
                                </MDBNavLink>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/asset_manage/edit"
                                >
                                    Update
                                </MDBNavLink>
                            </MDBPageItem>
                        </MDBPagination>
                    </MDBCol>
                </MDBRow>

                <div className="AssetManageContent">
                    <Switch>
                        <AuthRoute path="/home/asset_manage/add" component={AssetAdd} props={this.props} />
                        <AuthRoute path="/home/asset_manage/edit" component={AssetEdit} props={this.props} />
                        <AuthRoute path="/home/asset_manage/remove" component={AssetRem} props={this.props} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default AssetManage;
