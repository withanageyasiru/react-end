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
             computerType:"jjh",
             vga:0,
             memory:0,
             storageCapacity:0,
             processor:0,
             
            
 
          }
     
     }

     handleSubmit = (event) =>
     {
        // Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYjRlZTNhMzEyN2I3NWY1MDZhNmEzNjI4ZTBhMGQ2NDIyMjZlMzNjMThhMzBkODY4MDVhN2M2NDJiMzdjOGIxODQxYjY4YjQ4YzZhZDkwIn0.eyJhdWQiOiIxIiwianRpIjoiMmJiNGVlM2EzMTI3Yjc1ZjUwNmE2YTM2MjhlMGEwZDY0MjIyNmUzM2MxOGEzMGQ4NjgwNWE3YzY0MmIzN2M4YjE4NDFiNjhiNDhjNmFkOTAiLCJpYXQiOjE1NTAwNTUxNzMsIm5iZiI6MTU1MDA1NTE3MywiZXhwIjoxNTgxNTkxMTczLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YPKH7zLwtmFRdC6pUfZQ4SNq3pOIlw54EpaBDFfUjffm1vSSqQUZbKE5D08QjkkvrOv7LntZmaA_7g9qWFw4jc0udY-527xadHeevpGGLssaHSzic9SxfJjXTkVpG2q9tEhFlfbPEJqas5b75fzu5tXwT0cK1LKAtUrEpQ4LSPwzH20InfRVqZNmTUQcwZ_bq_4GsFUCnXustQncgqKsiPUdXCpy5JHs0pB3881YnxTGyMvMblMl4uwbyteAJVbAhdSWHIPac4xsZ578Yui_2DXpUlDB9ufvtS_v2HYd0frGUBlTiZnNmp-vYWwj2-CIhLl0_cr2fI1OhSADzSla5JSJLJtgxd9K322gmWMzEk68bCVRqQaexWqZajQ1gitqkIpvH7SE5kuP7HgCEAtk_meI13meRr8J_R4Xqfq-WonAyH7i8siwATYm5XZnXJ1o5ZUgje0-oGiLyUN0VcExv9UJE2g_nVRqlLjqn5YW5mxFqdc3HK0eO26A0hwnnIG2HZXGM7Pwr1jphCmWCA69nROKa83_UtmAkv9kgQJLkdppHuVbNnmXFlLR3Fxp5rjFSyocNDl4pAk36sAslYeqeIWiNdk8mSf3f5OvAwcXNzhFQ2YahY59uexWbqo4T39O49jw_1GjIIDbm6uh-2PCwr6kzWVeLPxvRKHZuNkea5w';

        event.preventDefault()
        const data = this.state
       
        console.log(data)

        let url = "http://104.248.24.192:8080/api/auth/addAssets";
        Axios.post(url, data)
            .then((res) => {
                
                console.log("RESPONSE RECEIVED: ");
            })
            .catch((err) => {
                console.log("someeee ERROR: ", err);
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
              <MDBInput  type="text" label="Type(D/L)"  name='computerType'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="VGA"  name='vga'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="RAM"  name='memory'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="Storage"  name='storageCapacity'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              <MDBInput  type="number" label="Processor"  name='processor'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              



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
