import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Axios from 'axios';
class Tess extends Component {
    constructor(props)   
    {
       super(props);
 
        this.state = {
           
           types:"vgf",
            brandName:"jjj",
            code:0,
             price:"kkk",
             warrantyStatus:0,
             assetStatus:0,
             availability:0,
             expireDate:"2019-01-31",
             capacity:"jjh",
            //  vga:0,
            //  memory:0,
            //  storageCapacity:0,
            //  processor:0,
             
            
 
          }
     
     }

     handleSubmit = (event) =>
     {
        Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwMGFkNDk2MTAyZjc5OWQxZDM0ZjNiYTJlOGUzZTE1NTFkOWVkM2Q2YmZjOGFkYTZjODEzZjdjMDcwYWE2OGFlOWRhM2RlMGQ1MGJmMmU2In0.eyJhdWQiOiIxIiwianRpIjoiMjAwYWQ0OTYxMDJmNzk5ZDFkMzRmM2JhMmU4ZTNlMTU1MWQ5ZWQzZDZiZmM4YWRhNmM4MTNmN2MwNzBhYTY4YWU5ZGEzZGUwZDUwYmYyZTYiLCJpYXQiOjE1NDk3OTQzMzIsIm5iZiI6MTU0OTc5NDMzMiwiZXhwIjoxNTgxMzMwMzMyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.bLnjldq5f-CTSiVdfK2qVbwIQOQyfR8h3LsugN58UlPwJxr1nS2nSlqrWt-fbpQMybMulosBcHXacefErcQJt1jthbCWAQT46PYtMAN0jpe7jCLv84ZD69V-IwLaUplqdOxd_pySFRlC6vXCNLUCilcxjGcWeiXTydS2O_Dcj2SK9c85o3lO3VQtzfk1r9nOSYePRsiKMVjFb15CwXWC9SpmHA4i3hQgQ1u2zgnE3335Xqr6v-nxLmsOPQG2ksYbscuAtS-p4vn0Xcwomi-UoFGPmsx-p9Cb3rohuks2WsGvgVjMvA15WeSLNQYINmwBrvvBhcWVpgMNqlN9AntYXA9sgKCcW8lSCz8aMSExoA2LU7XDAWvileO3Uor6Fv-KIy_4CYO7szplADNHx6HWUNeM4swkRcmuNwvLb9DxYRGC39xowcIiJ9o_7ZHTPsJCIwziELbXpYlRZ-ZiDdF-kx99iWgBN5USAINiag1Mh8bkf3dbhQgppYG2sK2DM-afmnQ3oCKmeQoqkTqoT1vqxFwva3-N8V2JBu5yjkSdXnM5k1Czry-8N5Gs_QtQCEGhRlw-JgAlhbUgZ_0fUXLJyRQiEpGruw0Dk1xigb60GXG5tjj81s0kxWg-p1iW2JFf1_3wpNaHbKyB_TQ6pJvkNUy12ENhVam5av75Fvn1WDw';

        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url = "http://127.0.0.1:8000/api/auth/updateAssets";
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
             [event.target.name]:event.target.value,
             [event.target.name]:event.target.value,
            //  [event.target.name]:event.target.value,
            //  [event.target.name]:event.target.value,
            //  [event.target.name]:event.target.value,
            //  [event.target.name]:event.target.value,
             
            
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
           <MDBInput  type="text" label="Asset Type"  name='types'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
             
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
  
  
             <MDBBtn outline color="secondary"onClick={this.handleSubmit=this.handleSubmit.bind(this)}>
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
