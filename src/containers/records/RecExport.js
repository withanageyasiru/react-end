import React from 'react';
import Export from '../../components/RecExport/Exports';

// RecExport - export a customized records to a pdf file
// For Admins (for now)
class RecExport extends React.Component {
    render() {
        return (
            <div className="RecExport">
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete these comments once your component
                    is succesfully implemented to the system */}
                <Export props={this.props} />
            </div>
        )
    }
}

export default RecExport;
