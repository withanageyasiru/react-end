import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AuthRoute from '../../components/AuthRoute';
import Publi from "../../components/AssetPoolView/poolTables/Computerst";
import Deskt from "../../components/AssetPoolView/poolTables/Desktopt";
import Lapt from "../../components/AssetPoolView/poolTables/Laptopst";
import Upst from "../../components/AssetPoolView/poolTables/Upst";
import Com from "../../components/AssetPoolView/poolTables/Componentst";
import Other from "../../components/AssetPoolView/poolTables/Otherst";

// AssetPoolView - view all the available assets in the pool
// For Admins, Department Heads, Finance, Employees
class AssetPoolView extends React.Component {
  render() {
    return (
      <div className="AssetPoolView">
        <MDBContainer>
          <MDBDropdown>
            <MDBDropdownToggle caret color="primary">
              MDBDropdown
            </MDBDropdownToggle>
            <MDBDropdownMenu basic>
              <MDBDropdownItem><Link to="/home/asset_pool/computers">Computers</Link></MDBDropdownItem>
              <MDBDropdownItem><Link to="/home/asset_pool/desktops">Desktops</Link></MDBDropdownItem>
              <MDBDropdownItem><Link to="/home/asset_pool/laptops">Laptops</Link></MDBDropdownItem>
              <MDBDropdownItem><Link to="/home/asset_pool/ups">Ups</Link></MDBDropdownItem>
              <MDBDropdownItem><Link to="/home/asset_pool/compo">Components</Link></MDBDropdownItem>
              <MDBDropdownItem><Link to="/home/asset_pool/oth">Others</Link></MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <Switch>
            {/* <Route path="/computers" component={Publi}/> */}
            <AuthRoute path="/home/asset_pool/computers" component={Publi} props={this.props}/>
            <AuthRoute  path="/home/asset_pool/desktops" component={Deskt} props={this.props} />
            <AuthRoute  path="/home/asset_pool/laptops" component={Lapt} props={this.props} />
            <AuthRoute  path="/home/asset_pool/ups" component={Upst} props={this.props} />
            <AuthRoute  path="/home/asset_pool/compo" component={Com} props={this.props} />
            <AuthRoute  path="/home/asset_pool/oth" component={Other} props={this.props} /> 
          </Switch>
        </MDBContainer>
      </div>
    )
  }
}

export default AssetPoolView;
