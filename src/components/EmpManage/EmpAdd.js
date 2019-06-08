import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Axios from 'axios';
import Msgs from './sucmsgpagee';
import Msgs2 from './failmsgpage';
class Tess extends Component {
    constructor(props)   
    {
       super(props);
 
        this.state = {
           
          firstName:"",
          lastName:"",
          nic : "",
          status:0,
          email:"",
          password:"",
          password_confirmation : "",
          department_id:0,
         
             
            
 
          }
     
     }

     handleSubmit = (event) =>
     {
        // Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYjRlZTNhMzEyN2I3NWY1MDZhNmEzNjI4ZTBhMGQ2NDIyMjZlMzNjMThhMzBkODY4MDVhN2M2NDJiMzdjOGIxODQxYjY4YjQ4YzZhZDkwIn0.eyJhdWQiOiIxIiwianRpIjoiMmJiNGVlM2EzMTI3Yjc1ZjUwNmE2YTM2MjhlMGEwZDY0MjIyNmUzM2MxOGEzMGQ4NjgwNWE3YzY0MmIzN2M4YjE4NDFiNjhiNDhjNmFkOTAiLCJpYXQiOjE1NTAwNTUxNzMsIm5iZiI6MTU1MDA1NTE3MywiZXhwIjoxNTgxNTkxMTczLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YPKH7zLwtmFRdC6pUfZQ4SNq3pOIlw54EpaBDFfUjffm1vSSqQUZbKE5D08QjkkvrOv7LntZmaA_7g9qWFw4jc0udY-527xadHeevpGGLssaHSzic9SxfJjXTkVpG2q9tEhFlfbPEJqas5b75fzu5tXwT0cK1LKAtUrEpQ4LSPwzH20InfRVqZNmTUQcwZ_bq_4GsFUCnXustQncgqKsiPUdXCpy5JHs0pB3881YnxTGyMvMblMl4uwbyteAJVbAhdSWHIPac4xsZ578Yui_2DXpUlDB9ufvtS_v2HYd0frGUBlTiZnNmp-vYWwj2-CIhLl0_cr2fI1OhSADzSla5JSJLJtgxd9K322gmWMzEk68bCVRqQaexWqZajQ1gitqkIpvH7SE5kuP7HgCEAtk_meI13meRr8J_R4Xqfq-WonAyH7i8siwATYm5XZnXJ1o5ZUgje0-oGiLyUN0VcExv9UJE2g_nVRqlLjqn5YW5mxFqdc3HK0eO26A0hwnnIG2HZXGM7Pwr1jphCmWCA69nROKa83_UtmAkv9kgQJLkdppHuVbNnmXFlLR3Fxp5rjFSyocNDl4pAk36sAslYeqeIWiNdk8mSf3f5OvAwcXNzhFQ2YahY59uexWbqo4T39O49jw_1GjIIDbm6uh-2PCwr6kzWVeLPxvRKHZuNkea5w';

        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url =  localStorage.getItem("baseUrl")+"api/auth/addUser";
        Axios.post(url, data)
            .then((res) => {
                this.setState({
                  msg:"suc"
                })
                console.log("RESPONSE RECEIVED: ");
                // ${{<Msgs />}}
            })
            .catch((err) => {
              this.setState({
                msg:"fail"
              })
                console.log("there is aa ERROR: ", err);
            })


     }

     handleChange = (event) =>
     {
        event.preventDefault()
        this.setState({
             [event.target.name]:event.target.value,  
        })
     }

    //  componentWillUnmount()
    //  {
    //    {<Msgs />}
    //  }


    render() { 
        
        return (  
         
            <MDBContainer>
            <hr /> 
           
            {this.state.msg=="suc"?<Msgs />:null} 
            {this.state.msg=="fail"?<Msgs2 />:null}
         
        
          <form>
            <p className="h5 text-center mb-4">Add Employees</p>
            <div className="grey-text">
                <MDBInput  type="text" label="First Name"  name='firstName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" label="Last Name"  name='lastName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="number" label="Status"  name='status'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" length="9" label="NIC No"  name='nic'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" label="Email"  name='email'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" label="Passward"  name='password'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" label="Password Confirmation"  name='password_confirmation'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" label="Department"  name='departmentName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />               
            </div>
             
            
      <MDBBtn outline color="primary"onClick={this.handleSubmit=this.handleSubmit.bind(this)}>
                Add <i class="fas fa-plus-circle"></i>
              </MDBBtn>
          </form>
      
    </MDBContainer>
         );
    }
}
 
export default Tess;
