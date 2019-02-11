import React from 'react';
<<<<<<< HEAD
import Message from "../../components/EmpRequest/Message";
import axios from 'axios';
=======
import Message from '../../components/EmpRequests/Message';

>>>>>>> 16a8d2cae1f96e524736bc647c5d762f4126eaf5
// EmpRequests - View assets requested by employees
// For Admins, Department Heads
class EmpRequests extends React.Component {
    
    render() {
        return (
            <div className="EmpRequests" >
                <Message props={this.props}/>
            </div>
        )
    }
}

export default EmpRequests;
