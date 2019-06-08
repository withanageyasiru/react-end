import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Axios from 'axios';
class Tess extends Component {
    constructor(props)   
    {
       super(props);
 
        this.state = {
           
            code:0,
            type:"vgf",
            brandName:"jjj",
             price:"kkk",
             warrantyStatus:0,
             assetStatus:0,
             availability:0,
             expireDate:"2019-01-31",
             capacity:"jjh",
             
             
            
 
          }
     
     }

     handleSubmit = (event) =>
     {
        
        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url = localStorage.getItem("baseUrl") + "api/auth/addAssets";
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
        this.setState({
             [event.target.name]:event.target.value,   
        })
     }


    render() { 
        
        return (  
          <MDBContainer>
          <form>  
   <MDBRow>
   <MDBCol md="6" className="mb-3">
       
         {/* <p className="h5 text-center mb-4">Add assets</p> */}
         <div className="grey-text">
         <MDBInput  type="text" label="Asset Type"  name='type'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              
                <MDBInput  type="text" label="Brand Name"  name='brandName'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
                <MDBInput  type="number" label="Asset Code"  name='code'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="Price"  name='price'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="Warrenty Status"  name='warrantyStatus'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="Asset Status"  name='assetStatus'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="Asset Availability"  name='availability'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              </div>
           </MDBCol>
           <MDBCol md="6" className="mb-3">
           <div className="grey-text">
           <MDBInput  type="date" label="Expire date"  name='expireDate'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} /> 
           <MDBInput  type="text" label="capacity"  name='capacity'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
           {/* <MDBInput  type="number" label="VGA"  name='vga'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
           <MDBInput  type="number" label="RAM"  name='memory'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
           <MDBInput  type="number" label="Storage"  name='storageCapacity'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
           <MDBInput  type="number" label="Processor"  name='processor'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
            */}


           <MDBBtn outline color="primary"onClick={this.handleSubmit=this.handleSubmit.bind(this)}>
             Send <MDBIcon far icon="paper-plane" className="ml-1" />
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
