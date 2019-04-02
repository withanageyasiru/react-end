import React from 'react';
import { Switch ,Link } from 'react-router-dom';
import { MDBPagination, MDBPageItem, MDBNavLink, MDBCol, MDBRow,MDBBtn,MDBContainer } from 'mdbreact';
import AuthRoute from '../../components/AuthRoute';
import EmpAdd from '../../components/EmpManage/EmpAdd';
import EmpEdit from '../../components/EmpManage/EmpEdit';
import EmpRem from '../../components/EmpManage/EmpRem';
import { Menu } from 'semantic-ui-react';

// EmpManage - add/remove/edit employee details
// For Admins
class EmpManage extends React.Component {
    state = {  }
    handleItemClick = (e, { name }) => {
        this.props.history.push(name)
        this.setState({ activeItem: name })
    }

    render() {

      const { activeItem } = this.state 
      return(
          <MDBContainer>
            <div className="EmpManage">
                {/* Your component code goes in components under 
                    src/components/EmpManage directory */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
                    <Menu className="ui pointing three item menu">
                        <Menu.Item
                        name="/home/emp_manage/add"
                        active={activeItem === "/home/emp_manage/add"}
                        onClick={this.handleItemClick}
                        >
                        Add
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/emp_manage/remove" 
                        active={activeItem === "/home/emp_manage/remove"} 
                        onClick={this.handleItemClick}>
                        Remove
                        </Menu.Item>
                        
                        <Menu.Item 
                        name="/home/emp_manage/edit"
                        active={activeItem === "/home/emp_manage/edit"} 
                        onClick={this.handleItemClick}>
                        Edit
                        </Menu.Item>
                    </Menu>
                <MDBRow>

                </MDBRow>
                <hr />
                <div className="EmpManageContent">
                    <Switch>
                        <AuthRoute exact path="/home/emp_manage" component={EmpAdd} props={this.props} />
                        <AuthRoute path="/home/emp_manage/add" component={EmpAdd} props={this.props} />
                        <AuthRoute path="/home/emp_manage/edit" component={EmpEdit} props={this.props} />
                        <AuthRoute path="/home/emp_manage/remove" component={EmpRem} props={this.props} />
                    </Switch>
                </div>
                
            </div>
            </MDBContainer>
        )
    }
}

export default EmpManage;
