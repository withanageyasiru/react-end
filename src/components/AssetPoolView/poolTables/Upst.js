
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBListGroup, MDBListGroupItem } from 'mdbreact';
import React, { Component } from 'react';
import But from '../poolButtons/UpsButton'
import axios from 'axios';


class BasicTable extends Component {

  constructor(props)   
   {
      super(props);

       this.state = {
       
        arr:[],
        modal6: false,
        modal7: false,
        type:"com"
       
                  };
    
    }
                          

componentDidMount(){
    this.setState({
        type:"ups"
    })
const data={ type : "ups"}  //this.state
let url = "http://127.0.0.1:8000/api/auth/pool";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJiYjRlZTNhMzEyN2I3NWY1MDZhNmEzNjI4ZTBhMGQ2NDIyMjZlMzNjMThhMzBkODY4MDVhN2M2NDJiMzdjOGIxODQxYjY4YjQ4YzZhZDkwIn0.eyJhdWQiOiIxIiwianRpIjoiMmJiNGVlM2EzMTI3Yjc1ZjUwNmE2YTM2MjhlMGEwZDY0MjIyNmUzM2MxOGEzMGQ4NjgwNWE3YzY0MmIzN2M4YjE4NDFiNjhiNDhjNmFkOTAiLCJpYXQiOjE1NTAwNTUxNzMsIm5iZiI6MTU1MDA1NTE3MywiZXhwIjoxNTgxNTkxMTczLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YPKH7zLwtmFRdC6pUfZQ4SNq3pOIlw54EpaBDFfUjffm1vSSqQUZbKE5D08QjkkvrOv7LntZmaA_7g9qWFw4jc0udY-527xadHeevpGGLssaHSzic9SxfJjXTkVpG2q9tEhFlfbPEJqas5b75fzu5tXwT0cK1LKAtUrEpQ4LSPwzH20InfRVqZNmTUQcwZ_bq_4GsFUCnXustQncgqKsiPUdXCpy5JHs0pB3881YnxTGyMvMblMl4uwbyteAJVbAhdSWHIPac4xsZ578Yui_2DXpUlDB9ufvtS_v2HYd0frGUBlTiZnNmp-vYWwj2-CIhLl0_cr2fI1OhSADzSla5JSJLJtgxd9K322gmWMzEk68bCVRqQaexWqZajQ1gitqkIpvH7SE5kuP7HgCEAtk_meI13meRr8J_R4Xqfq-WonAyH7i8siwATYm5XZnXJ1o5ZUgje0-oGiLyUN0VcExv9UJE2g_nVRqlLjqn5YW5mxFqdc3HK0eO26A0hwnnIG2HZXGM7Pwr1jphCmWCA69nROKa83_UtmAkv9kgQJLkdppHuVbNnmXFlLR3Fxp5rjFSyocNDl4pAk36sAslYeqeIWiNdk8mSf3f5OvAwcXNzhFQ2YahY59uexWbqo4T39O49jw_1GjIIDbm6uh-2PCwr6kzWVeLPxvRKHZuNkea5w';

// axios.post(url, {
//     type : 'computers',
//   })
//   .then(function (response) {
//       this.arr=response.data
//     console.log(this.state.arr);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

axios.post(url,{type:'ups',})
.then(response=>{
 
  this.setState({
     arr:response.data.data.original.datas

    
})
// console.log(response.data.data.original.datas);
console.log(this.state.arr);
});



}

  render() {
// console.log(this.state.arr);

    return ( 
        <div>
       <MDBTable >
      <MDBTableHead color="black" textWhite>
        <tr>
        <th>Id</th>
          <th>brandName</th>
          <th>price</th>
          <th>warrantyStatus</th>
          <td>more..</td>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
           {
               
         this.state.arr.map(ari =>{
          return(
         <tr key={ari.id}>
         <td>{ari.id}</td>
         <td>{ari.brandName}</td>
         <td>{ari.price}</td>
         <td>{ari.assetStatus}</td>
         <td><But val={ari} /> </td>
         
       </tr>
        
          )
      }
     
      )
          }   
  </MDBTableBody>
      
    </MDBTable>
    
    <MDBContainer>
     
      {/* console.log(""); */}
      
    </MDBContainer>
    </div> 
    );
  }
}
 
export default BasicTable;

