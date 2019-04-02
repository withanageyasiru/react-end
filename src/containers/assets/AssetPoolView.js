import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBBtn} from "mdbreact";
import AuthRoute from '../../components/AuthRoute';
import Publi from "../../components/AssetPoolView/poolTables/Computerst";
import Deskt from "../../components/AssetPoolView/poolTables/Desktopt";
import Lapt from "../../components/AssetPoolView/poolTables/Laptopst";
import Upst from "../../components/AssetPoolView/poolTables/Upst";
import Com from "../../components/AssetPoolView/poolTables/Componentst";
import Other from "../../components/AssetPoolView/poolTables/Otherst";
import { Menu } from 'semantic-ui-react'

// AssetPoolView - view all the available assets in the pool
// For Admins, Department Heads, Finance, Employees
class AssetPoolView extends React.Component {
  state = {  }
    handleItemClick = (e, { name }) => {
        this.props.history.push(name)
        this.setState({ activeItem: name })
    }

    render() {

      const { activeItem } = this.state 
      return(
      <div className="AssetPoolView">
     
        <MDBContainer>
                    <Menu className="ui pointing six item menu">
                        <Menu.Item
                        name="/home/asset_pool/computers"
                        active={activeItem === "/home/asset_pool/computers"}
                        onClick={this.handleItemClick}
                        >
                        Computers
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/asset_pool/desktops" 
                        active={activeItem === "/home/asset_pool/desktops"} 
                        onClick={this.handleItemClick}>
                        Desktops
                        </Menu.Item>
                        
                        <Menu.Item 
                        name="/home/asset_pool/laptops"
                        active={activeItem === "/home/asset_pool/laptops"} 
                        onClick={this.handleItemClick}>
                        Laptops
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/asset_pool/ups"
                        active={activeItem === "/home/asset_pool/ups"} 
                        onClick={this.handleItemClick}>
                        UPS
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/asset_pool/compo"
                        active={activeItem === "/home/asset_pool/compo"} 
                        onClick={this.handleItemClick}>
                        Comp
                        </Menu.Item>
                        

                        <Menu.Item 
                        name="/home/asset_pool/oth"
                        active={activeItem === "/home/asset_pool/oth"} 
                        onClick={this.handleItemClick}>
                        Others
                        </Menu.Item>

                    </Menu>
          
          <Switch>
            {/* <Route path="/computers" component={Publi}/> */}

            <AuthRoute exact  path="/home/asset_pool" component={Publi} props={this.props}/>
            <AuthRoute  path="/home/asset_pool/computers" component={Publi} props={this.props}/>
            <AuthRoute  path="/home/asset_pool/desktops"  component={Deskt} props={this.props} />
            <AuthRoute  path="/home/asset_pool/laptops"   component={Lapt}  props={this.props} />
            <AuthRoute  path="/home/asset_pool/ups"       component={Upst}  props={this.props} />
            <AuthRoute  path="/home/asset_pool/compo"     component={Com}   props={this.props} />
            <AuthRoute  path="/home/asset_pool/oth"       component={Other} props={this.props} /> 

          </Switch>
        </MDBContainer>
      </div>
    )
  }
}

export default AssetPoolView;
