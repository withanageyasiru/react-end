import React from 'react';
import { MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class MenuDepartments extends React.Component {
    all = (this.props.levelAuth === 9);
    admin = (this.props.levelAuth === 3);
    depth = (this.props.levelAuth === 1);
    finan = (this.props.levelAuth === 2);
    emplo = (this.props.levelAuth === 0);

    render() {
        return (
            <div className="MenuDepartments">
                <MDBNavItem
                    className="px-lg-1"
                    hidden={!(false)}
                >
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-inline-flex d-md-inline">
                                <MDBIcon far icon="building" /> Departments
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem>
                                <MDBNavLink to="/home/dept_details">Departments Details</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                                <MDBNavLink to="/home/dept_manage">Manage Departments</MDBNavLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </div>
        )
    }
}

export default MenuDepartments;
