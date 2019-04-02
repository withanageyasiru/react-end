
import { Switch ,Link } from 'react-router-dom';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import AuthRoute from '../../components/AuthRoute';
import Abc from '../../components/EmpAssets/byid';
import Def from '../../components/EmpAssets/bydepid';
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class Assetspp extends Component {
    state = {  }
    handleItemClick = (e, { name }) => {
      this.props.history.push(name)
      this.setState({ activeItem: name })
  }

    render() {

      const { activeItem } = this.state 
      return(
      <div>
      <MDBContainer>
          <Menu className="ui pointing two item menu">
            <Menu.Item
              name="/home/emp_assets/id"
              active={activeItem === "/home/emp_assets/id"}
              onClick={this.handleItemClick}
            >
            </Menu.Item>

            <Menu.Item 
              name="/home/emp_assets/depid" 
              active={activeItem === "/home/emp_assets/depid"} 
              onClick={this.handleItemClick}>
            </Menu.Item>
          </Menu>
        
         
            
              <Switch>
                
                <AuthRoute exact path="/home/emp_assets/" component={Abc} props={this.props}/>
                <AuthRoute path="/home/emp_assets/id" component={Abc} props={this.props}/>
                <AuthRoute exact path="/home/emp_assets/depid" component={Def} props={this.props} />
                
              </Switch>
            </MDBContainer>
          </div> );
    }
}
 
export default Assetspp;
