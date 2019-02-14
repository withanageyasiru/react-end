import React, { Component } from 'react';
import Axios from 'axios';
import But from './buttonfile'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
class Assetsadd extends Component {

    constructor()   
   {
      super();

       this.state = {
            department_id:98,
            arr:[],

         }
    
    }

    
    handleSubmit = (event) =>
    {
      //  Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      //  Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYjRlZTNhMzEyN2I3NWY1MDZhNmEzNjI4ZTBhMGQ2NDIyMjZlMzNjMThhMzBkODY4MDVhN2M2NDJiMzdjOGIxODQxYjY4YjQ4YzZhZDkwIn0.eyJhdWQiOiIxIiwianRpIjoiMmJiNGVlM2EzMTI3Yjc1ZjUwNmE2YTM2MjhlMGEwZDY0MjIyNmUzM2MxOGEzMGQ4NjgwNWE3YzY0MmIzN2M4YjE4NDFiNjhiNDhjNmFkOTAiLCJpYXQiOjE1NTAwNTUxNzMsIm5iZiI6MTU1MDA1NTE3MywiZXhwIjoxNTgxNTkxMTczLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YPKH7zLwtmFRdC6pUfZQ4SNq3pOIlw54EpaBDFfUjffm1vSSqQUZbKE5D08QjkkvrOv7LntZmaA_7g9qWFw4jc0udY-527xadHeevpGGLssaHSzic9SxfJjXTkVpG2q9tEhFlfbPEJqas5b75fzu5tXwT0cK1LKAtUrEpQ4LSPwzH20InfRVqZNmTUQcwZ_bq_4GsFUCnXustQncgqKsiPUdXCpy5JHs0pB3881YnxTGyMvMblMl4uwbyteAJVbAhdSWHIPac4xsZ578Yui_2DXpUlDB9ufvtS_v2HYd0frGUBlTiZnNmp-vYWwj2-CIhLl0_cr2fI1OhSADzSla5JSJLJtgxd9K322gmWMzEk68bCVRqQaexWqZajQ1gitqkIpvH7SE5kuP7HgCEAtk_meI13meRr8J_R4Xqfq-WonAyH7i8siwATYm5XZnXJ1o5ZUgje0-oGiLyUN0VcExv9UJE2g_nVRqlLjqn5YW5mxFqdc3HK0eO26A0hwnnIG2HZXGM7Pwr1jphCmWCA69nROKa83_UtmAkv9kgQJLkdppHuVbNnmXFlLR3Fxp5rjFSyocNDl4pAk36sAslYeqeIWiNdk8mSf3f5OvAwcXNzhFQ2YahY59uexWbqo4T39O49jw_1GjIIDbm6uh-2PCwr6kzWVeLPxvRKHZuNkea5w';

       event.preventDefault()
       const data = this.state
      
       console.log(data)

       let url = "http://104.248.24.192:8080/api/auth/asstDep";
       Axios.post(url,data)
       .then(response=>{
        
         this.setState({
            // arr:response.data.data.original.datas
            arr:response.data.assetByDepartment
       
           
       })
       // console.log(response.data.data.original.datas);
       console.log(this.state.arr);
       });


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


   
    render() { 
        
        return ( 
             
            <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Write to us</p>
            <div className="grey-text">
            
            <MDBInput  type="number" label="Department Id"  name='department_id'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
           
            <MDBBtn outline color="secondary"onClick={this.handleSubmit=this.handleSubmit.bind(this)}>
                Search.. <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
        <th>brandName</th>
          <th>price</th>
          <th>warrantyStatus</th>
          <th>assetStatu</th>
          <th>More...</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
               
               this.state.arr.map(ari =>{
                return(
               <tr key={ari.id}>
               <td>{ari.brandName}</td>
               <td>{ari.price}</td>
               <td>{ari.warrantyStatus}</td>
               <td>{ari.assetStatus}</td>
                <td><But val={ari} /> </td> 
               
             </tr>
              )}
           ) }  
      </MDBTableBody>
    </MDBTable>
             </div>
            
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
         );
    }
}
 
export default Assetsadd;

