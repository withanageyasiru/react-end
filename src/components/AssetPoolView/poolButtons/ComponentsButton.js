import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBListGroup,MDBListGroupItem,MDBInput } from 'mdbreact';
import Axios from 'axios';
class ModalPage extends Component {
    constructor(props)   
   {
      super(props);

      this.state = {
        modal6: false,
        modal7: false,
        arri:[""]
      }
      this.toggle = this.toggle.bind(this);
    //    console.log(this.props.);
    }


toggle = nr => () => {
  let modalNumber = 'modal' + nr
//   console.log(this.props);
  this.setState({
    [modalNumber]: !this.state[modalNumber],
    arri:[this.props.val]
    // console.log(this.props);
  });
}
// componentWillMount()
// {
//     console.log(this.arri);
// }
PutReq=(e)=>{
  //this.props.val.id
  //let url = "http://127.0.0.1:8000/api/auth/astreq";
  e.preventDefault();
  Axios.post("http://104.248.24.192:8080/api/auth/astreq", {
        id : this.props.val.id,
        type : 1,
        descript : "my machine is less powerfull "
       })
      .then((res) => {
          
          console.log("RESPONSE RECEIVED: ");
      })
      .catch((err) => {
          console.log("AXIOS ERROR: ", err);
      })
 
 
 }


render() {
  return (
      
    <MDBContainer>
      <MDBBtn color="info" onClick={this.toggle(8)}>More Details</MDBBtn>
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle(8)}>More Details...</MDBModalHeader>
        <MDBModalBody>
        {
        this.state.arri.map(far =>{
            return(
                <MDBListGroup style={{ width: "22rem" }}key={far.id}>
                <MDBListGroupItem>{far.id}</MDBListGroupItem>
                <MDBListGroupItem>{far.status}</MDBListGroupItem>
                <MDBListGroupItem>{far.availability}</MDBListGroupItem>
                 <MDBListGroupItem>{far.type}</MDBListGroupItem>
                <MDBListGroupItem>{"you can choose this asssets ...."}</MDBListGroupItem> 
               
              </MDBListGroup>
             
            )
        })
          } 
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
          <MDBBtn color="primary"  onClick={this.PutReq=this.PutReq.bind(this)}>Request This</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
     
    </MDBContainer>
    );
  }
}

export default ModalPage;