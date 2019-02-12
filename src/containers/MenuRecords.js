import React from 'react';
import { MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class MenuRecords extends React.Component {
    all = (this.props.levelAuth === 9);
    admin = (this.props.levelAuth === 3);
    depth = (this.props.levelAuth === 1);
    finan = (this.props.levelAuth === 2);
    emplo = (this.props.levelAuth === 0);

    render() {
        return (
            <div className="MenuRecords">
                <MDBNavItem
                    className="px-lg-1"
                    hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                >
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-inline-flex d-md-inline">
                                <MDBIcon far icon="clipboard" /> Records
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                            {/* <MDBDropdownItem
                                hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                            >
                                <MDBNavLink to="/home/record_history">Asset History</MDBNavLink>
                            </MDBDropdownItem> */}
                            <MDBDropdownItem
                                hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                            >
                                <MDBNavLink to="/home/record_export">Export Records</MDBNavLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </div>
        )
    }
}

export default MenuRecords;
