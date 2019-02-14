import React from 'react';
import { Switch } from 'react-router-dom';
import { MDBPagination, MDBPageItem, MDBNavLink, MDBCol, MDBRow } from 'mdbreact';
import AuthRoute from '../../components/AuthRoute';
import DeptAdd from '../../components/DeptManage/DeptAdd';
import DeptEdit from '../../components/DeptManage/DeptEdit';
import DeptRem from '../../components/DeptManage/DeptRem';

// DeptManage - add/remove/edit department details
// For Admins
class DeptManage extends React.Component {
    render() {
        return (
            <div className="DeptManage">
                {/* Your component code goes in components under 
                    src/components/DeptManage directory */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
                <MDBRow>
                    <MDBCol>
                        <MDBPagination className="d-flex d-sm-inline-flex justify-content-center mb-1 font-weight-bold">
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/dept_manage/add"
                                >
                                    Create
                                </MDBNavLink>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/dept_manage/remove"
                                >
                                    Delete
                                </MDBNavLink>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/dept_manage/edit"
                                >
                                    Update
                                </MDBNavLink>
                            </MDBPageItem>
                        </MDBPagination>
                    </MDBCol>
                </MDBRow>
                <hr />
                <div className="DeptManageContent">
                    <Switch>
                        <AuthRoute path="/home/dept_manage/add" component={DeptAdd} props={this.props} />
                        <AuthRoute path="/home/dept_manage/edit" component={DeptEdit} props={this.props} />
                        <AuthRoute path="/home/dept_manage/remove" component={DeptRem} props={this.props} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default DeptManage;
