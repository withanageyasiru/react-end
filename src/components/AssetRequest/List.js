import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Workbook from 'react-excel-workbook';
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      arequests: [],
    }
  }




  //calling API
  componentDidMount() {
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

  render() {
    return (
      <div>
        <hr />

        <MDBTable striped responsive>
          <MDBTableHead>
            <tr>
              <th>#</th>
              <th>Asset</th>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Description</th>
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
                    <td>{arequest.from}</td>
                    <td>{arequest.to}</td>
                    <td>{arequest.reason}</td>
                    <td>{arequest.description}</td>
                    <td>{arequest.status === 0 ? ("Not approved yet") : ("Approved")}</td>
                    <td><Link to={'/request/edit/' + arequest.id} ><MDBBtn className = "rounded-pill" size="sm" outline color="info">Edit</MDBBtn></Link>  &nbsp;
                                       <a href="#!" onClick={this.onDelete.bind(this, arequest.id)}><MDBBtn className = "rounded-pill" size="sm" outline color="danger">Delete</MDBBtn></a>
                    </td>
                  </tr>
                )
              })

            }

          </MDBTableBody>
        </MDBTable>

        {/* <div className="row text-center" style={{ marginTop: '100px' }}>
          <Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Try me!</button>}>
            <Workbook.Sheet data={this.state.arequests} name="Sheet A">
              <Workbook.Column label="Foo" value="type" />
              <Workbook.Column label="Bar" value="id" />
            </Workbook.Sheet>

          </Workbook>
        </div> */}
        </div>

    );
  }
}

