import React from 'react';
import Message from "../../components/EmpRequest/Message";
import axios from 'axios';
// EmpRequests - View assets requested by employees
// For Admins, Department Heads
class EmpRequests extends React.Component {
    
    render() {
        return (
            <div className="EmpRequests" >
                <Message/>
            </div>
        )
    }
}

export default EmpRequests;
