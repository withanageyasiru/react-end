import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Axios from 'axios';
class Tess extends Component {
    constructor(props)   
    {
       super(props);
 
        this.state = {
           id:0,
          firstName:"namal",
          lastName:"jjj",
          status:0,
          activeness:0,
          email:"cccc",
          password:"",
          departmentName:0,
             
            
 
          }
     
     }

     handleSubmit = (event) =>
     {
        // Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYjRlZTNhMzEyN2I3NWY1MDZhNmEzNjI4ZTBhMGQ2NDIyMjZlMzNjMThhMzBkODY4MDVhN2M2NDJiMzdjOGIxODQxYjY4YjQ4YzZhZDkwIn0.eyJhdWQiOiIxIiwianRpIjoiMmJiNGVlM2EzMTI3Yjc1ZjUwNmE2YTM2MjhlMGEwZDY0MjIyNmUzM2MxOGEzMGQ4NjgwNWE3YzY0MmIzN2M4YjE4NDFiNjhiNDhjNmFkOTAiLCJpYXQiOjE1NTAwNTUxNzMsIm5iZiI6MTU1MDA1NTE3MywiZXhwIjoxNTgxNTkxMTczLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YPKH7zLwtmFRdC6pUfZQ4SNq3pOIlw54EpaBDFfUjffm1vSSqQUZbKE5D08QjkkvrOv7LntZmaA_7g9qWFw4jc0udY-527xadHeevpGGLssaHSzic9SxfJjXTkVpG2q9tEhFlfbPEJqas5b75fzu5tXwT0cK1LKAtUrEpQ4LSPwzH20InfRVqZNmTUQcwZ_bq_4GsFUCnXustQncgqKsiPUdXCpy5JHs0pB3881YnxTGyMvMblMl4uwbyteAJVbAhdSWHIPac4xsZ578Yui_2DXpUlDB9ufvtS_v2HYd0frGUBlTiZnNmp-vYWwj2-CIhLl0_cr2fI1OhSADzSla5JSJLJtgxd9K322gmWMzEk68bCVRqQaexWqZajQ1gitqkIpvH7SE5kuP7HgCEAtk_meI13meRr8J_R4Xqfq-WonAyH7i8siwATYm5XZnXJ1o5ZUgje0-oGiLyUN0VcExv9UJE2g_nVRqlLjqn5YW5mxFqdc3HK0eO26A0hwnnIG2HZXGM7Pwr1jphCmWCA69nROKa83_UtmAkv9kgQJLkdppHuVbNnmXFlLR3Fxp5rjFSyocNDl4pAk36sAslYeqeIWiNdk8mSf3f5OvAwcXNzhFQ2YahY59uexWbqo4T39O49jw_1GjIIDbm6uh-2PCwr6kzWVeLPxvRKHZuNkea5w';

        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url = "http://104.248.24.192:8080/api/auth/updateUser";
        Axios.post(url, data)
            .then((res) => {
                
                console.log("RESPONSE RECEIVED: ");
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

            
            // [event.target.name]:event.target.value
            [event.target.id]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            [event.target.name]:event.target.value,
            
             
            
        })
     }


    render() { 
        
        return (  
            <MDBContainer>
                
     
          <form>
          <MDBRow>
   <MDBCol md="6" className="mb-3">
            <p className="h5 text-center mb-4">update form...</p>
            <div className="grey-text">
            <MDBInput  type="number" label="User Id"  id='id'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              
            <MDBInput  type="text" label="First Name"  name='firstName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" label="Last Name"  name='lastName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="number" label="Status"  name='status'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
             
             
              <MDBInput  type="number" label="Activeness"  name='activeness'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              </div>
           </MDBCol>
           <MDBCol md="6" className="mb-3">
           <div className="grey-text">
             
              <MDBInput  type="text" label="Email"  name='email'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="text" label="Passward"  name='password'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="text" label="Department name"  name='departmentName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              
              
              
              <MDBBtn outline color="primary"onClick={this.handleSubmit=this.handleSubmit.bind(this)}>
                Update<MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
              </div>
           
          
           
         
       
           </MDBCol>
           {/* <MDBCol md="6" className="mb-3">
    
     
             </MDBCol> */}
     </MDBRow>
          </form>
       
     
    </MDBContainer>
         );
    }
}
 
export default Tess;
