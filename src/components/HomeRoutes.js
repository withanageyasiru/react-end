import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Dashboard from '../containers/Dashboard';
import UnknownPage from '../containers/UnknownPage';

// Importing containers related to Asset settings
import AssetBreakdown from '../containers/assets/AssetBreakdown';
import AssetBreakManage from '../containers/assets/AssetBreakManage';
import AssetCategory from '../containers/assets/AssetCategory';
import AssetManage from '../containers/assets/AssetManage';
import AssetOwned from '../containers/assets/AssetOwned';
import AssetPoolView from './assetsComponents/AssetPoolView';
import AssetRequest from '../containers/assets/AssetRequest';
import AssetTransfer from '../containers/assets/AssetTransfer';

// Importing containers related to Employee settings
import EmpAssets from '../containers/employees/EmpAssets';
import EmpDetails from '../containers/employees/EmpDetails';
import EmpManage from '../containers/employees/EmpManage';
import EmpRequests from '../containers/employees/EmpRequests';
import EmpResign from '../containers/employees/EmpResign';

// Importing containers related to Department settings
import DeptDetails from '../containers/departments/DeptDetails';
import DeptManage from '../containers/departments/DeptManage';

// Importing containers related to Records
import RecExport from '../containers/records/RecExport';
import RecHistory from '../containers/records/RecHistory';


let HomeRoutes = ({ childProps }) => (
    <Switch>
        <AuthRoute exact path="/home/" component={Dashboard} props={childProps} />

        <AuthRoute path="/home/asset_breakdown" component={AssetBreakdown} props={childProps} />
        <AuthRoute path="/home/asset_break_manage" component={AssetBreakManage} props={childProps} />
        <AuthRoute path="/home/asset_category" component={AssetCategory} props={childProps} />
        <AuthRoute path="/home/asset_manage" component={AssetManage} props={childProps} />
        <AuthRoute path="/home/asset_owned" component={AssetOwned} props={childProps} />
        <AuthRoute path="/home/asset_pool" component={AssetPoolView} props={childProps} />
        <AuthRoute path="/home/asset_request" component={AssetRequest} props={childProps} />
        <AuthRoute path="/home/asset_transfer" component={AssetTransfer} props={childProps} />
        
        <AuthRoute path="/home/emp_assets" component={EmpAssets} props={childProps} />
        <AuthRoute path="/home/emp_details" component={EmpDetails} props={childProps} />
        <AuthRoute path="/home/emp_manage" component={EmpManage} props={childProps} />
        <AuthRoute path="/home/emp_requests" component={EmpRequests} props={childProps} />
        <AuthRoute path="/home/emp_resignation" component={EmpResign} props={childProps} />

        <AuthRoute path="/home/dept_details" component={DeptDetails} props={childProps} />
        <AuthRoute path="/home/dept_manage" component={DeptManage} props={childProps} />

        <AuthRoute path="/home/record_export" component={RecExport} props={childProps} />
        <AuthRoute path="/home/record_history" component={RecHistory} props={childProps} />

        {/* For unmatching URLs, following is the 404 page */}
        <Route component={UnknownPage} />
    </Switch>
);

export default HomeRoutes;