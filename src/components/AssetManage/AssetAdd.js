import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import Axios from "axios";
import com from "./addAssetx.js/addcomputers";
import compo from "./addAssetx.js/addcomponents";
import ups from "./addAssetx.js/addups";
import oth from "./addAssetx.js/addothers";
import AuthRoute from "../../components/AuthRoute";
import { Menu } from 'semantic-ui-react';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Tess extends Component {
  state = {  }
  handleItemClick = (e, { name }) => {
      this.props.history.push(name)
      this.setState({ activeItem: name })
  }

  render() {

    const { activeItem } = this.state 
    return(
      <div className="AssetEdit">
        <MDBContainer>
        <Menu className="ui pointing five item menu">
                        {/* <Menu.Item
                        name="/home/asset_manage/add/computers"
                        active={activeItem === "/home/asset_manage/add/computers"}
                        onClick={this.handleItemClick}
                        >
                        Computers
                        </Menu.Item> */}

                        <Menu.Item 
                        name="/home/asset_manage/desktops" 
                        active={activeItem === "/home/asset_manage/desktops"} 
                        onClick={this.handleItemClick}>
                        Desktops
                        </Menu.Item>
                        
                        <Menu.Item 
                        name="/home/asset_manage/laptops"
                        active={activeItem === "/home/asset_manage/laptops"} 
                        onClick={this.handleItemClick}>
                        Laptops
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/asset_manage/add/ups"
                        active={activeItem === "/home/asset_manage/add/ups"} 
                        onClick={this.handleItemClick}>
                        UPS
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/asset_manage/add/components"
                        active={activeItem === "/home/asset_manage/add/components"} 
                        onClick={this.handleItemClick}>
                        Components
                        </Menu.Item>
                        

                        <Menu.Item 
                        name="/home/asset_manage/add/others"
                        active={activeItem === "/home/asset_manage/add/others"} 
                        onClick={this.handleItemClick}>
                        Others
                        </Menu.Item>

                    </Menu>
          
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center ">Add assets</p>
                <div className="grey-text">
                  
                  {/* <Route  path="/home/asset_manage/add/computers" component={com} />  */}
                  <div scrollY>
                    <AuthRoute
                      path="/home/asset_manage/add/laptops"
                      component={com}
                      props={this.props}
                    />
                     <AuthRoute
                      path="/home/asset_manage/add/desktops"
                      component={com}
                      props={this.props}
                    />
                    <AuthRoute
                      path="/home/asset_manage/add/components"
                      component={compo}
                      props={this.props}
                    />
                    <AuthRoute
                      path="/home/asset_manage/add/ups"
                      component={ups}
                      props={this.props}
                    />
                    <AuthRoute
                      path="/home/asset_manage/add/others"
                      component={oth}
                      props={this.props}
                    />
                  </div>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Tess;
