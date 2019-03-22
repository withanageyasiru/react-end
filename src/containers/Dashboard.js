import React from 'react';
import { MDBRow , MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol  } from 'mdbreact';
import axios from 'axios';
import OwnRequests from '../components/AssetRequest/List';
import OwnAssets from '../components/Breakdowns/Breakdown';
                /* 
                    this class need 3 componenets 
                    if logged user is 
                        normal user 
                            -show his existing assets
                            -his requests with status
                        
                        financial user
                            -show new users
                            -new assets
                        
                        Department Head
                            -new requests
                            -his requests

                        Admin
                            -new requests
                            -new users

                    
                */


class Dashboard extends React.Component {

    // getUser(){
    //     axios.get("http://104.248.24.192:8080/api/auth/login")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
    // }


        constructor(props){
            super(props);
            this.state = {
                userStatus : 0
            }
        }

        switcher(usertype){
            switch(usertype){
                case 0:
                    //render elements of normal user
                    return(
                        <div>
                             <MDBCol>
                                <MDBCard style={{ width: "50rem" }}>
                                    {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves /> */}
                                    <MDBCardBody>
                                    <MDBCardTitle>ASSET REQUESTS</MDBCardTitle>
                                    <MDBCardText>
                                        <OwnRequests type={true}/>
                                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                             </MDBCol>

                             <MDBCol>
                                <MDBCard style={{ width: "50rem" }}>
                                    {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves /> */}
                                    <MDBCardBody>
                                    <MDBCardTitle>OWN ASSET</MDBCardTitle>
                                    <MDBCardText>
                                        <OwnAssets type={true}/>
                                    </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                             </MDBCol>
                        </div>
                    );
                case 1:
                    //render elements of department head
                    return(
                        <div>
                            
                        </div>
                    );
                case 2:
                    //render elements of financial user
                    return(
                        <div>
                            
                        </div>
                    );
                case 3:
                    //render elements of admin
                    return(
                        <div>
                            
                        </div>
                    );
    
            }
        }

    render() {
        return (
            <div className="Dashboard text-center">
                <MDBRow>
                    <MDBCol className="py-5 my-5"></MDBCol>
                </MDBRow>
                {this.switcher(this.state.userStatus)}
                {/* <h1 className="display-3">
                    Welcome to Asset Transfer System!{" "}
                    
                </h1> */}
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
