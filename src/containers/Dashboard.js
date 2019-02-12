import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';



class Dashboard extends React.Component {

    getUser(){
        axios.get("http://104.248.24.192:8080/api/auth/login")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    }

    render() {
        return (
            <div className="Dashboard text-center">
                <MDBRow>
                    <MDBCol className="py-5 my-5"></MDBCol>
                </MDBRow>
                <h1 className="display-3">
                    Welcome, {" "}
                </h1>
                {/* Your component code goes here */}
                {/* To see further instructions on how to add components,
                    routes inside this component view CONTRIBUTING.md */}
                {/* Feel free to delete above comments once your component
                    is succesfully implemented to the system */}
            </div>
        )
    }
}

export default Dashboard;
