import React from 'react';
import { Switch } from 'react-router-dom';
import { MDBContainer ,MDBPagination, MDBPageItem, MDBNavLink, MDBCol, MDBRow ,MDBBtn} from 'mdbreact';
import AuthRoute from '../../components/AuthRoute';
import AssetAdd from '../../components/AssetManage/AssetAdd';
import AssetEdit from '../../components/AssetManage/AssetEdit';
import AssetRem from '../../components/AssetManage/AssetRem';
import { Menu } from 'semantic-ui-react';

// AssetManage - add/remove/edit assets
// For Finance
class AssetManage extends React.Component {
    state = {  }
    handleItemClick = (e, { name }) => {
        this.props.history.push(name)
        this.setState({ activeItem: name })
    }

    render() {

      const { activeItem } = this.state 
      return(
          <MDBContainer>
            <div className="AssetManage">

            <Menu className="ui pointing three item menu">
                        <Menu.Item
                        name="/home/asset_manage/add"
                        active={activeItem === "/home/asset_manage/add"}
                        onClick={this.handleItemClick}
                        >
                        Create
                        </Menu.Item>

                        <Menu.Item 
                        name="/home/asset_manage/remove"
                        active={activeItem === "/home/asset_manage/remove"} 
                        onClick={this.handleItemClick}>
                        Delete
                        </Menu.Item>
                        
                        <Menu.Item 
                        name="/home/asset_manage/edit"
                        active={activeItem === "/home/asset_manage/edit"} 
                        onClick={this.handleItemClick}>
                        Update
                        </Menu.Item>
                    </Menu>
                {/* Your component code goes in components under 
                    src/components/AssetManage directory */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
               
                <hr />
                <div className="AssetManageContent">
                    <Switch>
                        <AuthRoute path="/home/asset_manage/add" component={AssetAdd} props={this.props} />
                        <AuthRoute path="/home/asset_manage/edit" component={AssetEdit} props={this.props} />
                        <AuthRoute path="/home/asset_manage/remove" component={AssetRem} props={this.props} />
                    </Switch>
                </div>
            </div>
            </MDBContainer>
        )
    }
}

export default AssetManage;
