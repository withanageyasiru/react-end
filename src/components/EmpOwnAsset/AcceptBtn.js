import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import { toast } from 'mdbreact';

export default class AcceptBtn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notiId: 0,
      responseType: 0,
      css: 'btn btn-outline-success',
      labl: 'accept',
      status: 0,
      respond: false,
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFiZDZhZjczMjQ1OTBkMmVlYjQ1MzhjYTI4ZDFmMDQ4ZDBlNGM3MjNkODc0NjUwNGZkOGQ4YmRhYzI4ZDYwYmU3ODY3OTJjNjUzZTBlZjNiIn0.eyJhdWQiOiIxIiwianRpIjoiYWJkNmFmNzMyNDU5MGQyZWViNDUzOGNhMjhkMWYwNDhkMGU0YzcyM2Q4NzQ2NTA0ZmQ4ZDhiZGFjMjhkNjBiZTc4Njc5MmM2NTNlMGVmM2IiLCJpYXQiOjE1NDk3MTk5OTYsIm5iZiI6MTU0OTcxOTk5NiwiZXhwIjoxNTgxMjU1OTk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.QeoAnHTH-_Ir_z7ucMbW2R4b70q_U7Oz04dIDRXI5IEeohXzB5UVXgmvbq4R-TppzQmrdy0Pq4tRqCurtut_6G4wam6Xv9JwS5qjtJgkSzdeSy74j7t7qUe3-3pMZDcwWUMY_2kz3qx2wg1rng9CP-HI4n5Oc4euctlQun7pcb_ZsM2hF34dYCHBxzhAxOyYz9rFPpSkrjtG6xByGhOgIOhb6lz4NSMetVRUjUPWsW8cKLLa3gg85_uFLFJBoX6NBEzKcOKWMl_ka2rl8Z_yMRgH0ogAz4-2Qr7xTnlAFeMA8Th3NYzJAaIT_LD0_IcXudmRySD93fdwbWz1VaUWVyZFhOaMRQwAmUZhCvYTwOPlLToeokscEo76fedPXEmGZSQB51RUpLVhmPW_mz2JXU_EGKKuQ9ZRUmfhGPFtTmj386D-pbNAkLVnMfcUDWeFe_kSgaY3fAfRaWp5Jm8KDLNjR5X4cMQMZLV-K8zzz_lJoyacT170dAp5vLabL5GNIu3e5RhoSCdP__IUrl8TAaSOB9boqIML77AfG1TDZBq-M_JU1Kf5SavrpJTybkN2p4px0g8aWegmbUfHnLAx-Hx64YVxQE-ErMsdNSdJ508HkIAy9E9eIHhPzLGvS5JQys0C8UGG5JeqGHBtpLqn7p6L4TAPMkQamqpM0bdFQwc',
      //url : "http://127.0.0.1:8000/"
      url: "http://104.248.24.192:8080/"


    };
    // bind
    this.apicall = this.apicall.bind(this);
  }

  notify(type) {

    switch (type) {
      case 'info':
        toast.info('Info message', {
          autoClose: 3000
        });
        break;
      case 'success':
        toast.success('Success message', {
          position: "top-right",
        });
        break;
      case 'warning':
        toast.warn('Warning message');
        break;
      case 'error':
        toast.error('Error message');
        break;
      default:
    };

  }



  componentDidMount() {
    console.log(this.props)
    this.setState({
      respond: this.props.response,
      notiId: this.props.id,
      status: this.props.status
    })

    
    this.switcher();
  }

  switcher() {
    switch (this.props.value) {
      case 0:
        this.setState({
          css: "btn btn-outline-danger",
          labl: "Reject"
        });
        break;
      case 1:
        this.setState({
          css: "btn btn-outline-success",
          labl: "Accept",
          respond: true,
        });
        break;
      default:
        break;
    }
  }

  apicall() {

    //let token = document.head.querySelector('meta[name="csrf-token"]');
    //this.login();
    var url;// eslint-disable-next-line
    if (this.state.status == 1) {  url = "http://104.248.24.192:8080/api/auth/responhead" ; } // eslint-disable-next-line
    if (this.state.status == 3) {  url = "http://104.248.24.192:8080/api/auth/responit" ; } // eslint-disable-next-line
    var postData = {
      id: this.state.notiId,
      response: this.state.respond,
    };

    axios.post(url, postData)
      .then((res) => {
        this.notify('success');
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }

  render() {
    return (
      <div>
        <button className={this.state.css} onClick={this.apicall}> {this.state.labl}
        </button>
      </div>
    );
  }
}


if (document.getElementById('acptbtn')) {
  ReactDOM.render(<AcceptBtn />, document.getElementById('acptbtn'));
}
