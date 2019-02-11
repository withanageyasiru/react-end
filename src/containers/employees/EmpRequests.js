import React from 'react';
import Message from '../../components/EmpRequests/Message';

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
