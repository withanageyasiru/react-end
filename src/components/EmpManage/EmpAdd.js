import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Axios from 'axios';
class Tess extends Component {
    constructor(props)   
    {
       super(props);
 
        this.state = {
           
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
        Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhjNTk5YTRkNDMwMGEwYTczN2RjMzMwZGRkMDMyOTc2NGVkYmE1N2M4N2E3MzIwYzYzZmUzODhlNjQ0MTMzM2NmYmU2ZjdiNGI1MDE1MGFlIn0.eyJhdWQiOiIxIiwianRpIjoiOGM1OTlhNGQ0MzAwYTBhNzM3ZGMzMzBkZGQwMzI5NzY0ZWRiYTU3Yzg3YTczMjBjNjNmZTM4OGU2NDQxMzMzY2ZiZTZmN2I0YjUwMTUwYWUiLCJpYXQiOjE1NDk4MTA0MTUsIm5iZiI6MTU0OTgxMDQxNSwiZXhwIjoxNTgxMzQ2NDE1LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.ZvY_HdEGJEus8blsHciIWMnO8gEFhYzz2bbZVxr5KTcgcVBXF-Gq0K5AH_pz-OFA9VeCeXP-Xo8R3NRpJOAItunRzWOerezIlM3IewEfcl6kSgo75dS8MO3VMaO-eM2ANnO90iBTTpC6NXjMn7MfVUN-enes_bPD_spzo1LLBOvcq9CXeFo8u2lmMVs7UsnGGZ6CgXYTCGe4MUbkpJ5eztxyEHm-haOGIcbuxzSu7_PsBs-FRRlkQusit_vTzjR3O71rqDXyjQtK2ZAvDwA43Dg2-0X2QAxM5QDgJ4GeZUgTHiUNIeRp0FcHuKtnJ9PLnzzk39_xaVPXnk-ExvyTqBzWmY76jzGfWnntClSR2d4R-dyhMbrDX55dPS4CzG3c1uZnOLbDoMTfCFDLJ7iT5RQZcD9pKTMLVO3JrU-C9iZ-M7-lk_mCf9HyN0IPswr92UfuA_bvmfxtHds_Gc3dCaVR3gpaMGP-ywoVZA1ylrCcRr1eHGcA_YzGYjlQKLpOGYdhdirrEmeKxbVqp3zRza9RFcZ2Op1WJU9kGUmpeHvbKMCMSDjQ5Ofgspjnfg1SUAZUtiQWHYhvrUk-xh-boQtLEQcgc8QljA6e2KEI0j0bkOJktfIGoQF-EPaJ-z2pOer-3n6FENMfsnp3JstbHhix7-zsWoP4aTVp8PQPVp4';

        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url = "http://127.0.0.1:8000/api/auth/addUser";
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
            // [event.target.idn]:event.target.value,
             
            
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
                
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Add Employees</p>
            <div className="grey-text">
            <MDBInput  type="text" label="First Name"  name='firstName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="text" label="Last Name"  name='lastName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="number" label="Status"  name='status'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="Activeness"  name='activeness'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="text" label="Email"  name='email'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="text" label="Passward"  name='password'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="text" label="Department name"  name='departmentName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              
              
              
              <MDBBtn outline color="secondary"onClick={this.handleSubmit=this.handleSubmit.bind(this)}>
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
              
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
         );
    }
}
 
export default Tess;
