import React from "react";
import { Switch } from 'react-router-dom';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AuthRoute from '../AuthRoute';
// import Poool from "../../components/assetsComponents/D2";
import Publi from "./poolTables/Computerst";
import Deskt from "./poolTables/Desktopt";
 import Lapt from "./poolTables/Laptopst";
 import Upst from "./poolTables/Upst";
 import Com from "./poolTables/Componentst";
 import Other from "./poolTables/Otherst";

// AssetPoolView - view all the available assets in the pool
// For Admins, Department Heads, Finance, Employees
class AssetPoolView extends React.Component {

  render() {
    return (
      <div>
        {/* <p>No asset pool here, BOI!</p> */}
        <MDBContainer className="">
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              MDBDropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem href="/home/asset_pool/computers"> Computers</MDBDropdownItem>
              <MDBDropdownItem  href="/home/asset_pool/desktops" >Desktops</MDBDropdownItem>
              <MDBDropdownItem  href="/home/asset_pool/laptops" >Laptops</MDBDropdownItem>
              <MDBDropdownItem  href="/home/asset_pool/ups" >Ups</MDBDropdownItem>
              <MDBDropdownItem  href="/home/asset_pool/compo" >Components</MDBDropdownItem>
              <MDBDropdownItem  href="/home/asset_pool/oth" >Others</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <Switch>
            {/* <Route path="/computers" component={Publi}/> */}
            <AuthRoute exact path="/home/asset_pool/computers" component={Publi} props={this.props}/>
             <AuthRoute exact path="/home/asset_pool/desktops" component={Deskt} props={this.props} />
            <AuthRoute exact path="/home/asset_pool/laptops" component={Lapt} props={this.props} />
            <AuthRoute exact path="/home/asset_pool/ups" component={Upst} props={this.props} />
            <AuthRoute exact path="/home/asset_pool/compo" component={Com} props={this.props} />
            <AuthRoute exact path="/home/asset_pool/oth" component={Other} props={this.props} /> 
          </Switch>
        </MDBContainer>
      </div>
    );
  }

}

export default AssetPoolView;
