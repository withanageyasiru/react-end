import React from 'react';
import { Switch, Link  } from 'react-router-dom';
import AuthRoute from '../../components/AuthRoute';
import Edit from '../../components/AssetRequest/Edit';
import List from '../../components/AssetRequest/List';
import Store from '../../components/AssetRequest/Store';
import View from '../../components/AssetRequest/View';
import { MDBBtn , MDBContainer } from "mdbreact";
import { Menu } from 'semantic-ui-react';
class AssetRequest extends React.Component {
    state = {  }
    handleItemClick = (e, { name }) => {
        this.props.history.push(name)
        this.setState({ activeItem: name })
    }

    render() {

      const { activeItem } = this.state 
      return(
            <div className="AssetRequest">
                
          <MDBContainer>
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
                    <Menu className="ui pointing two item menu">
                        <Menu.Item
                        name="/home/asset_request/requests"
                        active={activeItem === "/home/asset_request/requests"}
                        onClick={this.handleItemClick}
                        >
                        Add
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/asset_request/request/store" 
                        active={activeItem === "/home/asset_request/request/store"} 
                        onClick={this.handleItemClick}>
                        Remove
                        </Menu.Item>
                        
                    </Menu>

                <Switch>
                    <AuthRoute exact path="/home/asset_request" component={List} props={this.props} />
                    <AuthRoute exact path="/home/asset_request/requests" component={List} props={this.props} />
                    <AuthRoute exact path="/home/asset_request/request/store" component={Store} props={this.props} />
                    <AuthRoute exact path="/home/asset_request/request/edit/:id" component={Edit} props={this.props} />
                    {/* <AuthRoute exact path="/home/asset_request/request/view" component={View} props={this.props} /> */}
                </Switch>
                </MDBContainer>
            </div>
        )
    }
}

export default AssetRequest;
