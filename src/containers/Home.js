import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink,
    MDBMask,
    MDBView,
    MDBIcon
} from 'mdbreact';
import HomeRooutes from '../components/HomeRoutes';
import MenuAssets from './MenuAssets';
import MenuEmployees from './MenuEmployees';
import MenuDepartments from './MenuDepartments';
import MenuRecords from './MenuRecords';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            isWideEnough: false,
            isOpen: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleLogout = () => {
        this.props.setAuth(false);
        // ==== ==== ==== ====
        this.props.setToken("");
        // ==== ==== ==== ====
        this.props.history.push("/login");
    }

    render() {
        const childProps = {
            isAuth: this.props.isAuth,
            levelAuth: this.props.levelAuth,
            accessToken: this.props.accessToken
        };

        return (
            <div className="Home" >
                <header>
 
                {/* rgba(0, 150, 136, 0.7) rgba-teal-strong */}
                    
                    <MDBNavbar className="z-depth-1-half" color="unique-color-dark" textWhite expand="md" fixed="top" >
                        <MDBNavbarBrand href="/">
                            <strong>SimCentric</strong>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav light left>
                                <MenuAssets levelAuth={this.props.levelAuth}/>
                                <MenuEmployees levelAuth={this.props.levelAuth} />
                                <MenuDepartments levelAuth={this.props.levelAuth} />
                                <MenuRecords levelAuth={this.props.levelAuth} />
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem className="px-md-3">
                                   
                                </MDBNavItem>
                                <MDBNavItem onClick={this.handleLogout} light className="px-lg-1">
                                    <MDBNavLink to="#">
                                        <MDBIcon icon="sign-out-alt" />
                                        <strong> Logout</strong>
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </header>
                
                <main className="pt-5">
                    <MDBView src="3" alt="background image">
                       
                        <MDBMask className ="pt-4 px-1 px-xl-5" color=" mdb-color darken-3" >
                            <HomeRooutes childProps={childProps} />
                        </MDBMask>
                    </MDBView>
                </main>
            </div>
        )
    }
}

export default Home;
