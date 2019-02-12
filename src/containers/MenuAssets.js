import React from 'react';
import { MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class MenuAssets extends React.Component {
    all = (this.props.levelAuth === 0);
    admin = (this.props.levelAuth === 1);
    depth = (this.props.levelAuth === 2);
    finan = (this.props.levelAuth === 3);
    emplo = (this.props.levelAuth === 4);

    render() {
        return (
            <div className="MenuAssets">
                <MDBNavItem
                    className="px-lg-1"
                    hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                >
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-inline-flex d-md-inline">
                                <MDBIcon icon="box-open" /> Assets
                            </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem
                                hidden={!(this.emplo || this.all)}
                            >
                                <MDBNavLink to="/home/asset_owned">Owned Assets</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                            >
                                <MDBNavLink to="/home/asset_pool">View Asset Pool</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.emplo || this.all)}
                            >
                                <MDBNavLink to="/home/asset_request">Request Asset</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.emplo || this.all)}
                            >
                                <MDBNavLink to="/home/asset_breakdown">Report Breakdown</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.all)}
                            >
                                <MDBNavLink to="/home/asset_break_manage">Manage Breakdowns</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.admin || this.all)}
                            >
                                <MDBNavLink to="/home/asset_transfer">Transfer Assets</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.finan || this.all)}
                            >
                                <MDBNavLink to="/home/asset_manage">Manage Assets</MDBNavLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem
                                hidden={!(this.finan || this.all)}
                            >
                                <MDBNavLink to="/home/asset_category">Manage Asset Categories</MDBNavLink>
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
            </div>
        )
    }
}

export default MenuAssets;
