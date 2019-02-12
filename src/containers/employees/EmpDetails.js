import React from 'react';
import Emd from '../../components/EmpDetails/viewdetails';

// EmpDetails - view employee list/details
// For Admins, Department Heads
class EmpDetails extends React.Component {
    render() {
        return (
            <div className="EmpDetails">
               <Emd />
            </div>
        )
    }
}

export default EmpDetails;
