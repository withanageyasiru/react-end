import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Axios from 'axios';

class Tess extends Component {
    constructor(props)   
    {
       super(props);
 
        this.state = {
           
          
            code:0,
            modal14: false,
             
            
 
          }
     
     }

     toggle = nr => (event) => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
       
      }

     handleSubmit = (event) =>
     {
        Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYjRlZTNhMzEyN2I3NWY1MDZhNmEzNjI4ZTBhMGQ2NDIyMjZlMzNjMThhMzBkODY4MDVhN2M2NDJiMzdjOGIxODQxYjY4YjQ4YzZhZDkwIn0.eyJhdWQiOiIxIiwianRpIjoiMmJiNGVlM2EzMTI3Yjc1ZjUwNmE2YTM2MjhlMGEwZDY0MjIyNmUzM2MxOGEzMGQ4NjgwNWE3YzY0MmIzN2M4YjE4NDFiNjhiNDhjNmFkOTAiLCJpYXQiOjE1NTAwNTUxNzMsIm5iZiI6MTU1MDA1NTE3MywiZXhwIjoxNTgxNTkxMTczLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YPKH7zLwtmFRdC6pUfZQ4SNq3pOIlw54EpaBDFfUjffm1vSSqQUZbKE5D08QjkkvrOv7LntZmaA_7g9qWFw4jc0udY-527xadHeevpGGLssaHSzic9SxfJjXTkVpG2q9tEhFlfbPEJqas5b75fzu5tXwT0cK1LKAtUrEpQ4LSPwzH20InfRVqZNmTUQcwZ_bq_4GsFUCnXustQncgqKsiPUdXCpy5JHs0pB3881YnxTGyMvMblMl4uwbyteAJVbAhdSWHIPac4xsZ578Yui_2DXpUlDB9ufvtS_v2HYd0frGUBlTiZnNmp-vYWwj2-CIhLl0_cr2fI1OhSADzSla5JSJLJtgxd9K322gmWMzEk68bCVRqQaexWqZajQ1gitqkIpvH7SE5kuP7HgCEAtk_meI13meRr8J_R4Xqfq-WonAyH7i8siwATYm5XZnXJ1o5ZUgje0-oGiLyUN0VcExv9UJE2g_nVRqlLjqn5YW5mxFqdc3HK0eO26A0hwnnIG2HZXGM7Pwr1jphCmWCA69nROKa83_UtmAkv9kgQJLkdppHuVbNnmXFlLR3Fxp5rjFSyocNDl4pAk36sAslYeqeIWiNdk8mSf3f5OvAwcXNzhFQ2YahY59uexWbqo4T39O49jw_1GjIIDbm6uh-2PCwr6kzWVeLPxvRKHZuNkea5w';

        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url = "http://127.0.0.1:8000/api/auth/deleteAssets";
        Axios.post(url, data)
            .then((res) => {
                
                console.log(res);
                
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })
           
     }

     handleChange = (event) =>
     {
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({

            [event.target.name]:event.target.value,
           
            
        })
     }


    render() { 
        
        return (  
            <MDBContainer>



      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">delete form...</p>
            <div className="grey-text">
              <MDBInput  type="number" label="Asset Code"  name='code'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              
             <MDBBtn color="primary" onClick={this.toggle(14)}>Delete</MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Confirmation...</MDBModalHeader>
          <MDBModalBody>
            Are you sure do you want to delete this????????????
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>Cancel</MDBBtn>
            <MDBBtn color="primary" onClick={this.handleSubmit=this.handleSubmit.bind(this)}>Yes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
              
             
             
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
         );
    }
}
 
export default Tess;
