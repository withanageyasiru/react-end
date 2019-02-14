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
            <div className="Home">
                <header>
                    <MDBNavbar className="aqua-gradient z-depth-1-half" light expand="md" fixed="top">
                        <MDBNavbarBrand href="/">
                            <strong>SimCentric</strong>
                        </MDBNavbarBrand>
                        {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MenuAssets levelAuth={this.props.levelAuth}/>
                                <MenuEmployees levelAuth={this.props.levelAuth} />
                                <MenuDepartments levelAuth={this.props.levelAuth} />
                                <MenuRecords levelAuth={this.props.levelAuth} />
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem className="px-md-3">
                                    <MDBNavLink to="#">
                                        <MDBIcon icon="bell" />
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem onClick={this.handleLogout} className="px-lg-1">
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
                    <MDBView src="#" alt="background image">
                        {/* https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg */}
                        <MDBMask className ="pt-4 px-1 px-xl-5" >
                            <HomeRooutes childProps={childProps} />
                        </MDBMask>
                    </MDBView>
                </main>
            </div>
        )
    }
}

export default Home;
