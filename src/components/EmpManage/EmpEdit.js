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
        // Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhjYzUwMmM1ZjdjMzVlZTFmZjA4MGMyNzdmMTFjNThhYzIxOGFiYzQ1NjAwNTRhNDE4OTFiMTNiODZhZjQ2OGM4ZjQxZGMwM2M0ZTdmNDNmIn0.eyJhdWQiOiIxIiwianRpIjoiOGNjNTAyYzVmN2MzNWVlMWZmMDgwYzI3N2YxMWM1OGFjMjE4YWJjNDU2MDA1NGE0MTg5MWIxM2I4NmFmNDY4YzhmNDFkYzAzYzRlN2Y0M2YiLCJpYXQiOjE1NDk4MTM0NDQsIm5iZiI6MTU0OTgxMzQ0NCwiZXhwIjoxNTgxMzQ5NDQ0LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.chViJ9CAhBjPzM4bcvYdcH5v9_ykLQXxhIxZ-zdRHGt560x0l8RbsiHGnHCr2gLquAIS8E8HWIXqLeAZeC-W-OYIkze3Ns8LaDL1l2tulayxRy3s8PmFjXmxgiNIoEDY2UIjEg5_qJvL0LzEszrgsEbERfNXH-C9A6nqY5tjfKHwywtfjziGOuzyEhx31tsE70G6BYeIWiRdNdKHHO09Q58dWfHskD8bjsxjthUHhfyf18FqcPonN74DbDL-cGRCO9TWBBUarrLWBPD-RPVAo1h4p7dj0TwNqkqufVMbL-gsxkAEMx-VWRGl04KO2TzSgtuBc2PxA0ayPFR4Z32YD38-FkHN0fp3DYpYlfe_UMfKZOrs5I828TReYOpGKb0pMYggI2GbD5cpnPzv2jzPrGtVVEy_W8H_kBUb7gZrBxJKQUdZMK2b_lTtO5SuoOxaepPrCxEwkxvKc_ycbXhy7JGK5iKFPc1y-J-fow3OSRvjBjwGFWiTwhz4q515PnLvj0OVlLmyVGbWMF_SOunQDf0mtE8CaHsjzrkt8Dw3fYETdE8s1x1qQtiKB4qsjo5NBPD4IEeGfrUTDv7RghLeROGD7FzKr2gYOCqzJPczxcYKjJayJXHuchLfCeCYFGbcKItmQyUHFmOWEKZrCp9SbCfJKQJ_O4tmIAL6QGY6HyI';

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
              
              
              
              <MDBBtn outline color="secondary"onClick={this.handleSubmit=this.handleSubmit.bind(this)}>
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
