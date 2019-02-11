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
import com from "./addAssetx.js/editcomputers";
import compo from "./addAssetx.js/editcomponents";
import ups from "./addAssetx.js/editups";
import oth from "./addAssetx.js/addothers";
import AuthRoute from "../../components/AuthRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
class Tess extends Component {
  render() {
    return (
      <div className="AssetEdit">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h5 text-center ">Add assets</p>
                <div className="grey-text">
                  <MDBDropdown>
                    <MDBDropdownToggle caret color="blue">
                      choose edit type
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right basic>
                      <MDBDropdownItem href="/home/asset_manage/edit/computers">
                       
                        Computers
                      </MDBDropdownItem>
                      <MDBDropdownItem href="/home/asset_manage/edit/components">
                        Components
                      </MDBDropdownItem>
                      <MDBDropdownItem href="/home/asset_manage/edit/ups">
                        Ups
                      </MDBDropdownItem>
                      <MDBDropdownItem href="/home/asset_manage/edit/others">
                        Others
                      </MDBDropdownItem>
                      
                    </MDBDropdownMenu>
                  </MDBDropdown>
                  {/* <Route  path="/home/asset_manage/add/computers" component={com} />  */}
                  <div scrollY>
                    <AuthRoute
                      path="/home/asset_manage/edit/computers"
                      component={com}
                      props={this.props}
                    />
                    <AuthRoute
                      path="/home/asset_manage/edit/components"
                      component={compo}
                      props={this.props}
                    />
                     <AuthRoute
                      path="/home/asset_manage/edit/ups"
                      component={ups}
                      props={this.props}
                    />
                    <AuthRoute
                      path="/home/asset_manage/edit/others"
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
