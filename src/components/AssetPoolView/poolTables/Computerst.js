
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBListGroup, MDBListGroupItem } from 'mdbreact';
import React, { Component } from 'react';
import But from '../poolButtons/ComputerButton'
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
        type:"computers"
    })
const data={ type : "computers"}  //this.state
let url = "http://127.0.0.1:8000/api/auth/pool";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhjYzUwMmM1ZjdjMzVlZTFmZjA4MGMyNzdmMTFjNThhYzIxOGFiYzQ1NjAwNTRhNDE4OTFiMTNiODZhZjQ2OGM4ZjQxZGMwM2M0ZTdmNDNmIn0.eyJhdWQiOiIxIiwianRpIjoiOGNjNTAyYzVmN2MzNWVlMWZmMDgwYzI3N2YxMWM1OGFjMjE4YWJjNDU2MDA1NGE0MTg5MWIxM2I4NmFmNDY4YzhmNDFkYzAzYzRlN2Y0M2YiLCJpYXQiOjE1NDk4MTM0NDQsIm5iZiI6MTU0OTgxMzQ0NCwiZXhwIjoxNTgxMzQ5NDQ0LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.chViJ9CAhBjPzM4bcvYdcH5v9_ykLQXxhIxZ-zdRHGt560x0l8RbsiHGnHCr2gLquAIS8E8HWIXqLeAZeC-W-OYIkze3Ns8LaDL1l2tulayxRy3s8PmFjXmxgiNIoEDY2UIjEg5_qJvL0LzEszrgsEbERfNXH-C9A6nqY5tjfKHwywtfjziGOuzyEhx31tsE70G6BYeIWiRdNdKHHO09Q58dWfHskD8bjsxjthUHhfyf18FqcPonN74DbDL-cGRCO9TWBBUarrLWBPD-RPVAo1h4p7dj0TwNqkqufVMbL-gsxkAEMx-VWRGl04KO2TzSgtuBc2PxA0ayPFR4Z32YD38-FkHN0fp3DYpYlfe_UMfKZOrs5I828TReYOpGKb0pMYggI2GbD5cpnPzv2jzPrGtVVEy_W8H_kBUb7gZrBxJKQUdZMK2b_lTtO5SuoOxaepPrCxEwkxvKc_ycbXhy7JGK5iKFPc1y-J-fow3OSRvjBjwGFWiTwhz4q515PnLvj0OVlLmyVGbWMF_SOunQDf0mtE8CaHsjzrkt8Dw3fYETdE8s1x1qQtiKB4qsjo5NBPD4IEeGfrUTDv7RghLeROGD7FzKr2gYOCqzJPczxcYKjJayJXHuchLfCeCYFGbcKItmQyUHFmOWEKZrCp9SbCfJKQJ_O4tmIAL6QGY6HyI';

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

axios.post(url,{type:'computers',})
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
      <MDBTableHead color="brown" textWhite>
        <tr>
          <th>ID</th>
          <th>User id</th>
          <th>title</th>
          <th>More Details</th>
          <td>butt</td>
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

