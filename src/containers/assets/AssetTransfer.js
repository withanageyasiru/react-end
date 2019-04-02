import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { MDBBtn } from "mdbreact";
import AuthRoute from '../../components/AuthRoute';
import List from '../../components/AssetTransfer/List';
import Store from '../../components/AssetTransfer/Store';
import { Menu } from 'semantic-ui-react';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

// AssetTransfer - transfer assets among pool and users
// For Admins
class AssetTransfer extends React.Component {
    state = {  }
    handleItemClick = (e, { name }) => {
        this.props.history.push(name)
        this.setState({ activeItem: name })
    }

    render() {

      const { activeItem } = this.state 
      return(
           <MDBContainer>
            <div className="AssetTransfer">
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}

        <Menu className="ui pointing two item menu">
            <Menu.Item
              name="/home/asset_transfer/transfers"
              active={activeItem === "/home/asset_transfer/transfers"}
              onClick={this.handleItemClick}
            >
            Transfers
            </Menu.Item>

            <Menu.Item 
              name="/home/asset_transfer/transfer/store"
              active={activeItem === "/home/asset_transfer/transfer/store"} 
              onClick={this.handleItemClick}>
              New Transfer
            </Menu.Item>
          </Menu>
        

               
                <Switch>
                    <AuthRoute exact path="/home/asset_transfer" component={List} props={this.props} />
                    <AuthRoute exact path="/home/asset_transfer/transfers" component={List} props={this.props} />
                    <AuthRoute exact path="/home/asset_transfer/transfer/store" component={Store} props={this.props} />
                </Switch>
            </div>
            </MDBContainer>
        )
    }
}

export default AssetTransfer;
