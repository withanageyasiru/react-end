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
    // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImViZmJiNzJmYTNhMGIzMGRkMWQxMTJhOGQ0NjNlNzQ2ZTA1ZTMzMjJjMjY3Y2E4YzZlYmJjYmJiYWVhOTQ2NGYzZTUxNGI2YzUwNTM1NTZhIn0.eyJhdWQiOiIxIiwianRpIjoiZWJmYmI3MmZhM2EwYjMwZGQxZDExMmE4ZDQ2M2U3NDZlMDVlMzMyMmMyNjdjYThjNmViYmNiYmJhZWE5NDY0ZjNlNTE0YjZjNTA1MzU1NmEiLCJpYXQiOjE1NTAwNzgxNzAsIm5iZiI6MTU1MDA3ODE3MCwiZXhwIjoxNTgxNjE0MTcwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.en433D9pE7d_EB-_loJtcs0iFSjahQVl72Gz_YnFbvzXC3gAsHepqToRFxvu-hiPZHFixoMzRIdyooDu47mglW21grI1EzBsqYFSKnzI5O-9o37Q_gRyaZuj2aM2eKk47DTBidAgJ6Hwxpay679fxnetksoC0QCvIBC_JJt3WVUyLRtPXeJevwaZwNtaJp4FLOJrorNMp16svj-lJ3H_38ErYb3CYDGa7efRbTPZ44RMMK6jylozfNd3lCEkBeLscSOw7szFD1rxV-9FCAVh89xRGBr0l1rqFWKco9nskz3cT9qOTIVeQVPzfSyUs3phvDZrDgB7mDhiE0Vus1PoMYyTvB9JnEcSigXLUkbhcr12WT0wlj3dNRvEQ8AtrHjmylmg8dlxmGhK6p0W8GaGHjfCmUxsU02uSbZ6bUw51WtPybJzkFNFpV1gRJGqRxF8m1dZX7fxF-Ty6yg97obN-_q_ZykHf44utpILkXRA011RpSs_SoSaMPmhd4gM66nQeZThcg_t5p97McRTeU6dyD1qZwyADZb4DW7MbMpjgdRxIGSS7RO1En3suDItSErUUnbssiKw9DNueUqfsNRbm2TYR_EBr2kEri81rdEu3MmCnBp4Eb1c02nR5LfGTqoFxXggHBkMtE9rr4ZtXDQs8dTZRTGPSArA_aA3WWRFKSk';

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
  /*
    onClick(){
      axios.get('http://104.248.24.192:8080:8000/api/export').
       then(function (res) {return Console.log('done');}); 
  
    
    }
  
  */
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
                    <td><Link to={'/request/edit/' + arequest.id} ><MDBBtn size="sm" outline color="info">Edit</MDBBtn></Link>  &nbsp;
                                       <a href="#!" onClick={this.onDelete.bind(this, arequest.id)}><MDBBtn size="sm" outline color="danger">Delete</MDBBtn></a>
                    </td>
                  </tr>
                )
              })

            }

          </MDBTableBody>
        </MDBTable>

        {/*}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Asset</th>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>

                        </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.arequests.map(arequest=>{ 
                          return (
                                 <tr key={arequest.id}>
                                   <td>{arequest.id}</td>
                                   <td>{arequest.type}</td>
                                   <td>{arequest.from}</td>
                                   <td>{arequest.to}</td>
                                   <td>{arequest.reason}</td>
                                   <td>{arequest.description}</td>
                                   <td>{arequest.status==0?("Not approved yet"):("Approved")}</td>
                                   <td>
                                   <Link to={'/request/edit/' +arequest.id} ><MDBBtn size="sm" outline color="info">Edit</MDBBtn></Link>  &nbsp;
                                       <a href="#" onClick={this.onDelete.bind(this,arequest.id)}><MDBBtn size="sm" outline color="danger">Delete</MDBBtn></a> 
                                   
                                    </td>
                                 </tr>
                                 )
                         })
                        
                      }


                    </tbody>
                </table>

                    */}

        <div className="row text-center" style={{ marginTop: '100px' }}>
          <Workbook filename="example.xlsx" element={<button className="btn btn-lg btn-primary">Try me!</button>}>
            <Workbook.Sheet data={this.state.arequests} name="Sheet A">
              <Workbook.Column label="Foo" value="type" />
              <Workbook.Column label="Bar" value="id" />
            </Workbook.Sheet>

          </Workbook>
        </div></div>


      /*}   <div className="card bg-light mt-3">
 <div className="card-header">
     Laravel 5.7 Import Export Excel to database Example - ItSolutionStuff.com
 </div>
 <div className="card-body">
     <form  >
      
     <Link to={'/api/export'} >Edit</Link>
         <button className="btn btn-warning" href="http://104.248.24.192:8080:8000/api/export" >Export User Data</button>
     </form>
 </div>
</div>
*/


    );
  }
}

