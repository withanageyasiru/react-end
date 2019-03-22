
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Axios from 'axios';
import EmpByAssetExport from "./AllAssetsExport";
import AssetExprert from "./AssetExport";
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
          msg:" ", 
            
 
          }
     
     }



     render(){
         return(
            <div className="container">
                 <hr/>
            <div className="row">
       
                                <div class="col-sm-6" ><MDBCol></MDBCol><AssetExprert/></div>
                                <div class="col-sm-6" ><MDBCol></MDBCol><EmpByAssetExport/></div>
       </div>
    
    <hr/>
        <div className="row">
                            <div class="col-sm-6" ><MDBCol></MDBCol>place ur card </div>
                            <div class="col-sm-6" ><MDBCol></MDBCol>place ur card </div>
        </div>
        </div>
         )
         
    }
}
 
export default Tess;
