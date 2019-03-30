import React from 'react';
import Axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput,
    MDBMask,
    MDBView
} from 'mdbreact';

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            status: 0
        };
    }

    apicall() {

        let url = "http://104.248.24.192:8080/api/auth/login";
        let postData = {
            email: this.state.email,
            password: this.state.password
        };

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                "X-Requested-With": "XMLHttpRequest",
            }
        };

        Axios.post(url, postData, axiosConfig)
            .then((res) => {
                this.props.setToken(res.data.access_token);
                
                console.log(this.props.accessToken);


                this.props.setAuth(true);
                Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
                Axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
                localStorage.setItem('Authorization' , 'Bearer ' + res.data.access_token)

                Axios.get("http://104.248.24.192:8080/api/auth/user")
                .then((res) => {
                    
                    this.props.setLevel(res.data.status);
                    console.log(res.data.status);

                })
                .catch((err) => {
                    console.log("AXIOS ERROR: ", err);
                })

                console.log("RESPONSE RECEIVED: ", res);
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
    }

    // Validate whether the form is filled with required data
    // before allowing submission.
    validateInput() {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.apicall();
    }

    render() {
        return (
            <div className="Login">
                <MDBView>
                    <img src="https://syscoem.com.mx/pdv/assets/images/1374-2000x1333.jpg" className="img-fluid" alt="background" />
                    <MDBMask className="d-flex justify-content-center align-middle" overlay="teal-light">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol size="12" className="py-5 my-4"></MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="6" className="n-text-center">
                                    <h1 className="display-1">
                                        <strong className="teal-text">Sim</strong><span className="">Centric</span>
                                    </h1>
                                    <hr />
                                    <h1 className="mdb-color-text">
                                        ASSET TRANSFER SYSTEM
                                    </h1>
                                </MDBCol>
                                <MDBCol md="1">
                                </MDBCol>
                                <MDBCol md="5">
                                    <MDBCard>
                                        <MDBCardBody>
                                            <MDBCardHeader className="form-header tempting-azure-gradient rounded flex-center">
                                                <h3 className="my-3">
                                                    <MDBIcon icon="lock" /> Login
                                                </h3>
                                            </MDBCardHeader>
                                            <form  onSubmit={this.handleSubmit}>
                                                <div className="grey-text">
                                                    <MDBInput
                                                        label="Type your email"
                                                        icon="envelope"
                                                        group
                                                        type="email"
                                                        validate
                                                        error="wrong"
                                                        success="right"

                                                        id="email"
                                                        value={this.state.email}
                                                        onChange={this.handleChange}
                                                    />
                                                    <MDBInput
                                                        label="Type your password"
                                                        icon="lock"
                                                        group
                                                        type="password"
                                                        validate

                                                        id="password"
                                                        value={this.state.password}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="text-center mt-4">
                                                    <MDBBtn
                                                        color="elegant"
                                                        className="mb-3 rounded"
                                                        type="submit"

                                                        disabled={!(this.validateInput())}
                                                    >
                                                        Login
                                                    </MDBBtn>
                                                </div>
                                            </form>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        )
    }
}

export default Login;
