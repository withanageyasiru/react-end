import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Axios from 'axios';
 import Sc from '../EmpManage/sucmsgpagee';
 import Fa from '../EmpManage/failmsgpage';
class Tess extends Component {
    constructor(props)   
    {
       super(props);
 
        this.state = {
           
          name:"",
          email: ""
        
            
             
            
 
          }
     
     }

     handleSubmit = (event) =>
     {
        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url =  localStorage.getItem("baseUrl") + "api/auth/createDep";
        Axios.post(url, data)
            .then((res) => {
                this.setState({
                  msg:"suc"
                })
                console.log("RESPONSE RECEIVED: ");
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
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({

            
            // [event.target.name]:event.target.value
            // [event.target.idn]:event.target.value,
             
            
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
            
            {this.state.msg=="suc"?<Sc />:null}
            {this.state.msg=="fail"?<Fa />:null}
         
        
          <form>
          <MDBRow>
      <MDBCol md="6" className="mb-3">
            <p className="h5 text-center mb-4">Create Departments..</p>
            <div className="grey-text">
            <MDBInput  type="text" label="Department Name"  name='name'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
            <MDBInput  type="text" label="Department Email"  name='email'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
             
              </div>
            
             
              
              <MDBBtn outline color="info" onClick={this.handleSubmit=this.handleSubmit.bind(this)}>Update<MDBIcon far icon="paper-plane" className="ml-1" /></MDBBtn> 
              </MDBCol>
      </MDBRow>
          </form>
      
    </MDBContainer>
         );
    }
}
 
export default Tess;
