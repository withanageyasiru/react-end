import React from 'react';
import { Switch } from 'react-router-dom';
import { MDBPagination, MDBPageItem, MDBNavLink, MDBCol, MDBRow } from 'mdbreact';
import AuthRoute from '../../components/AuthRoute';
import EmpAdd from '../../components/EmpManage/EmpAdd';
import EmpEdit from '../../components/EmpManage/EmpEdit';
import EmpRem from '../../components/EmpManage/EmpRem';

// EmpManage - add/remove/edit employee details
// For Admins
class EmpManage extends React.Component {
    render() {
        return (
            <div className="EmpManage">
                {/* Your component code goes in components under 
                    src/components/EmpManage directory */}
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
                                    to="/home/emp_manage/add"
                                >
                                    Create
                                </MDBNavLink>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/emp_manage/remove"
                                >
                                    Delete
                                </MDBNavLink>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBNavLink
                                    className="rounded-pill z-depth-1 px-md-4 mx-2 mdb-color-text"
                                    to="/home/emp_manage/edit"
                                >
                                    Update
                                </MDBNavLink>
                            </MDBPageItem>
                        </MDBPagination>
                    </MDBCol>
                </MDBRow>
                <hr />
                <div className="EmpManageContent">
                    <Switch>
                        <AuthRoute path="/home/emp_manage/add" component={EmpAdd} props={this.props} />
                        <AuthRoute path="/home/emp_manage/edit" component={EmpEdit} props={this.props} />
                        <AuthRoute path="/home/emp_manage/remove" component={EmpRem} props={this.props} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default EmpManage;
