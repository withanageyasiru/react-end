
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBContainer } from 'mdbreact';
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
let url = "http://104.248.24.192:8080/api/auth/pool";
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNmODVkNjZjZjZkNDY3YzJlYTM1ZmY5ZjgzZTcxN2RiZjI1ZDgyMmQ2NWQwODMyMmE4NWE2YmNhOTU1ZTU3YWY1N2I1ZjMwOWM4NGEwNWUzIn0.eyJhdWQiOiIxIiwianRpIjoiY2Y4NWQ2NmNmNmQ0NjdjMmVhMzVmZjlmODNlNzE3ZGJmMjVkODIyZDY1ZDA4MzIyYTg1YTZiY2E5NTVlNTdhZjU3YjVmMzA5Yzg0YTA1ZTMiLCJpYXQiOjE1NDk5MzY5NTUsIm5iZiI6MTU0OTkzNjk1NSwiZXhwIjoxNTgxNDcyOTU0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.fPVjfZLCC1XZ0GeiCsy_6aRFFMtApVEATyEjPc93hiBBM_4l5TR-Yiw63dnL0wQdwfQ4CjSJ_73DP7loWuo7dZdxxgtTx33F8SykLbkKuY-GMwVpA3Lcj1IKimg3zOOiB3AzAuFafQ5vIVaYCQlkC1EKCI8b6Ms1RK17Cs725IAp8yYTD2wqDckKk-K82mtiVBoBVUgNCxEQYBUp-K9NVBwFLpgEm0PtaV5mQzvcvxt1oUIq5Le7he2fmm34D7g53JUMsw6VJAnPlB3lbBWdb1-BmbQogDFEYNu9hsBx2VkLC29vlVOFo0vjVGyNDmfQAGHCbOuen5YveBYDTdJ5TZ0Kr8Btc-tGpdgUYlWiQgWo-J6AOSYWojXvc8n3MF0mW-T7PRdI4zP0HGbXGhDdi1NWHG-okp4InfcQKstUrqfVOOqTkvNn-2DVDoOVdIcEdZfzflSbIouFtj7Sr767JmkrXE6sWzy2ELYFGbyT7AZhj47Hn6dBRpUHqv63Ml-aNdgKoibSNh6BK-uYc_t94hL7fdC0nBh8w6jD3Yx_Z20owWEQPdnLno7BAslg-fSQpPshQ2xzQM6rZVHPa2xc40QjafVQVsSWlijn6DwLLWxVZltEQFZJOFfiCarB_cWlZIZrP78r1buwOjRzFgm0r6F9hZPd0eYVXatgxJL_ZGs';

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

