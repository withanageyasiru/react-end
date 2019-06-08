import React from 'react';
import Routes from './Routes';
import Axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true,
            accessToken: "",
            levelOfAuthentication: 9,
            baseUrl : "http://127.0.0.1:8000/",
            nodeUrl : "http://127.0.0.1:3001/",
            //baseUrl : "http://127.0.0.1:8000/",
            //baseUrl : "http://104.248.24.192:8080/",
            //nodeUrl : "http://104.248.24.192:3001/"
        };
    }

    UNSAFE_componentWillMount() {
        localStorage.setItem('baseUrl' , this.state.baseUrl)
        localStorage.setItem('nodeUrl' , this.state.nodeUrl)

        Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        Axios.defaults.headers.common['Authorization'] = localStorage.getItem("Authorization");
        this.setState({
            accessToken : localStorage.getItem('Authorization'),
            levelOfAuthentication : localStorage.getItem('userStatus')
        })
        console.log(localStorage.getItem('Authorization'));
}

    componentDidMount() {
        // access token verification goes here:
        // ==== ==== ==== ====
        
        if (this.state.accessToken !== null && this.state.accessToken !== "") {
            console.log('this is for test', this.state.accessToken);
            this.setState({ isAuthenticated: true });
        }
        // if (this.props.cookies.get('auth')) {
        //     this.setState({ isAuthenticated: true });
        // }
        // ==== ==== ==== ====
        this.setState({ isAuthenticating: false });
    }

    // Method to toggle User authentication
    setAuthentication = (value) => {
        this.setState({ isAuthenticated: value });
    }

    // Method to set Access Token
    setAccessToken = (value) => {
        this.setState({ accessToken: value });
    }

    setLevel = (value) => {
        this.setState({ levelOfAuthentication: value });
    }

    render() {
        const childProps = {
            isAuth: this.state.isAuthenticated,
            levelAuth: this.state.levelOfAuthentication,
            accessToken: this.state.accessToken,
            setAuth: this.setAuthentication,
            setToken: this.setAccessToken,
            setLevel: this.setLevel
        };

        return (
            !this.state.isAuthenticating &&
            <div className="App">
                <Routes childProps={childProps} />
            </div>
        )
    }
}

export default App;
