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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                      choose add type
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right basic>
                      <MDBDropdownItem>
                        <Link to="/home/asset_manage/add/computers">

                          Computers
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/home/asset_manage/add/components">
                          Components
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/home/asset_manage/add/ups">
                          Ups
                        </Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/home/asset_manage/add/others">
                          Others
                        </Link>
                      </MDBDropdownItem>

                    </MDBDropdownMenu>
                  </MDBDropdown>
                  {/* <Route  path="/home/asset_manage/add/computers" component={com} />  */}
                  <div scrollY>
                    <AuthRoute
                      path="/home/asset_manage/add/computers"
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
