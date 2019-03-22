import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Workbook from 'react-excel-workbook';
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class List extends Component {
  constructor(props) {
    super();
    this.state = {
      arequests: [],
      type : false
    }
    this.renderStatus = this.renderStatus.bind(this);
  }




  //calling API
  componentDidMount() {
    this.setState({
      type : this.props.type
    })
    axios.get('http://104.248.24.192:8080/api/auth/requests')
      .then(response => {
        this.setState({
          arequests: response.data
          
        });
      });
  }


  onDelete(arequest_id) {
    axios.delete('http://104.248.24.192:8080/api/auth/request/delete/' + arequest_id)
      .then(response => {
        //removing the deleted items from the front end 
        var arequests = this.state.arequests;

        for (var i = 0; i < arequests.length; i++) {
          if (arequests[i].id === arequest_id) {
            arequests.splice(i, 1);
            this.setState({ arequests: arequests });
          }
        }

        this.setState({ alert_message: "success" })
      }).catch(error => {
        this.setState({ alert_message: "error" });
      })

  }

  renderStatus(data){
    console.log(this.state.arequests);
    switch(data){
      case 0: return("Not approved yet");
      case 1: return("Rejected by Department Head");
      case 3: return("Accepted by Department Head");
      case 7: return("Rejected by IT ");
      case 15: return("Approved");
    }
  }

  render() {
    return (
      <div>
        <hr />

        <MDBTable striped responsive>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Asset</th>
              {!this.state.type ? <th>From</th> : <></>}
              {!this.state.type ? <th>To</th> : <></>}            
              <th>Reason</th>
              {!this.state.type ? <th>Description</th> : <></>}
              <th>Status</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>

            {
              this.state.arequests.map(arequest => {
                return (
                  <tr key={arequest.id}>
                    <td>{arequest.id}</td>
                    <td>{arequest.type}</td>
                    {!this.state.type ? <td>{arequest.from}</td> : <></>}
                    {!this.state.type ? <td>{arequest.to}</td> : <></>} 
                    <td>{arequest.reason}</td>
                    {!this.state.type ? <td>{arequest.description}</td> : <></>}                    
                    {/* <td>{arequest.status === 0 ? ("Not approved yet") : ("Approved")}</td> */}
                    <td>{this.renderStatus(arequest.status )}</td>
                    <td><Link to={'/request/edit/' + arequest.id} ><MDBBtn className = "rounded-pill" size="sm" outline color="info">Edit</MDBBtn></Link>  &nbsp;
                                       <a href="#!" onClick={this.onDelete.bind(this, arequest.id)}><MDBBtn className = "rounded-pill" size="sm" outline color="danger">Delete</MDBBtn></a>
                    </td>
                  </tr>
                )
              })

            }

          </MDBTableBody>
        </MDBTable>
        </div>

    );
  }
}

