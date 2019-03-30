import React from 'react';
import Routes from './Routes';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true,
            accessToken: "",
            levelOfAuthentication: 9
        };
    }

    componentDidMount() {
        // access token verification goes here:
        // ==== ==== ==== ====
        this.setState({
            accessToken : localStorage.getItem('Authorization'),
        })
        
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
