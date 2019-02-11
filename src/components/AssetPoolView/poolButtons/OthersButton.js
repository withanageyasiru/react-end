import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBListGroup,MDBListGroupItem } from 'mdbreact';

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
                <MDBListGroupItem>{far.description}</MDBListGroupItem>
                <MDBListGroupItem>{far.price}</MDBListGroupItem>
                 <MDBListGroupItem>{far.status}</MDBListGroupItem>
                <MDBListGroupItem>{"you can choose this asssets ...."}</MDBListGroupItem> 
              </MDBListGroup>
         
            )
        })
          } 
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
          <MDBBtn color="primary">Request This</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
     
    </MDBContainer>
    );
  }
}

export default ModalPage;