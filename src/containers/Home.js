import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// e sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from "react";
import logo from "./logos.png";

import HomeRoutes from '../components/HomeRoutes';


class DoubleNavigationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleStateA: false,
            breakWidth: 1300,
            windowWidth: 0,
            toggle: false,
            defaultExpand:true
            // Props for user auth (from old app.js)
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleLogout = () => {
        this.props.setAuth(false);
        // ==== ==== ==== ====
        this.props.setToken("");
        // ==== ==== ==== ====
        this.props.history.push("/login");
    }

    handleClick = (selected) => {
        this.props.history.push(selected);
    }

    //   renderBody(){
    //     var divStyle = {
    //         position: 'relative',
    //        left: '300px',
    //       };
    //       return this.state.toggle== true ? <div style={divStyle}>Hello World!</div> : <div>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkdjf</div>;
    //   }
    
    all = (this.props.levelAuth === 9);
    admin = (this.props.levelAuth === 3);
    depth = (this.props.levelAuth === 1);
    finan = (this.props.levelAuth === 2);
    emplo = (this.props.levelAuth === 0);


    render() {
        const childProps = {
            isAuth: this.props.isAuth,
            levelAuth: this.props.levelAuth,
            accessToken: this.props.accessToken
        };

        var Stylet = {
            width: '240px',
            height: '180px'
        };

        return (
        <div className="Home">
            <SideNav
                expanded={true}
                onSelect={(selected) => {
                    console.log(selected);
                    this.handleClick(selected);
                    //this.renderBody();
                }}
            >

                {/* <img  src={logo} style={{ Stylet}} alt="fireSpot"/> */}
                
                <SideNav.Nav defaultSelected="#" >
                    <img src={logo} alt="SimCentric" />
                    <NavItem 
                        eventKey="Asset"
                        expanded={true}
                        hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                    >
                        <NavIcon>
                            <i className="fas fa-laptop-code" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Assets
                        </NavText>
                        <NavItem
                            eventKey="/home/asset_owned"
                            hidden={!(this.emplo || this.all)}
                        >
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >View Owned Assets</div>
                            </NavText>
                        </NavItem>
                        <NavItem
                            eventKey="/home/asset_pool"
                            hidden={!(this.admin || this.depth || this.finan || this.emplo || this.all)}
                        >
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >View Assets Pool</div>
                            </NavText>
                        </NavItem>
                        <NavItem
                            eventKey="/home/asset_request"
                            hidden={!(this.emplo || this.all)}
                        >
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Request Asset</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/asset_breakdown">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Report Breakdown</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/asset_break_manage">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Manage Breakdown</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/asset_transfer">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Transfer Assets</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/asset_manage">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Manage Assets</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/asset_category">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Manage Asset Categories</div>
                            </NavText>
                        </NavItem>
                    </NavItem>


                    <NavItem eventKey="Employee" expanded={false}>
                        <NavIcon>
                            <i className="fas fa-user-tie" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Employees
                        </NavText>
                        <NavItem eventKey="/home/emp_details">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Employee Details</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/emp_assets">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Employee Assets</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/emp_manage">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Manage Employees</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/emp_requests">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Asset Requests</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/emp_resignation">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Resignation</div>
                            </NavText>
                        </NavItem>
                    </NavItem>


                    <NavItem eventKey="Departments" expanded={false}>
                        <NavIcon>
                            <i className="fas fa-building" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Departments
                        </NavText>
                        <NavItem eventKey="/home/dept_details">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Department Details</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/dept_manage">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Manage Departments</div>
                            </NavText>
                        </NavItem>
                    </NavItem>


                    <NavItem eventKey="Records" expanded={false}>
                        <NavIcon>
                            <i className="fas fa-file-medical-alt" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Records
                    </NavText>
                        <NavItem eventKey="/home/record_history">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Asset History</div>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/home/record_export">
                            <NavText>
                                <div style={{ paddingLeft: '50px' }} >Export Records</div>
                            </NavText>
                        </NavItem>
                    </NavItem>
                    <hr />
                    <NavItem eventKey="#" onClick={this.handleLogout}>
                        <NavIcon>
                            <i className="fas fa-power-off" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Log Out
                    </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            
            <div className="MainFrame">
                <HomeRoutes childProps={childProps} />
            </div>
        </div>
        );
    }
}

export default DoubleNavigationPage;