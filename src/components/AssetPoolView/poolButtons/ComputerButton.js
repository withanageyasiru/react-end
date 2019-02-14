import React, { Component } from 'react';
import { MDBContainer,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn,MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBListGroup,MDBListGroupItem } from 'mdbreact';
import Axios from 'axios';

class ModalPage extends Component {
    constructor(props)   
   {
      super(props);

      this.state = {
        modal6: false,
        modal7: false,
        arri:[""],
        from:"",
        id:0,
        to:"",
        reason:"",
        description:"",
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
 const data = this.state
 console.log(data)
 e.preventDefault();
 Axios.post("http://104.248.24.192:8080/api/auth/astreq", {
     id:this.state.id,
    from: this.state.from,
    to: this.state.to,
    reason: this.state.reason,
    description: this.state.description
      })
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
      <MDBBtn color="info" onClick={this.toggle(8)}>More Details</MDBBtn>
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle(8)}>More Details...</MDBModalHeader>
        <MDBModalBody>
        {
        this.state.arri.map(far =>{
            return(
              <div>
                <MDBListGroup style={{ width: "22rem" }}key={far.id}>
                <MDBListGroupItem>{far.id}</MDBListGroupItem>
                <MDBListGroupItem>{far.brandName}</MDBListGroupItem>
                <MDBListGroupItem>{far.price}</MDBListGroupItem>
                 <MDBListGroupItem>{far.warrantyStatus}</MDBListGroupItem>
                <MDBListGroupItem>{"you can choose this asssets ...."}</MDBListGroupItem> 
               </MDBListGroup>
               
               <form >


 <div className="form-group">
                        {/* <label className="control-label col-sm-2" htmlFor="id">Asset Id</label> */}
                        <div className="col-sm-10">
                        <MDBInput  type="number" label="Asset Id"  name='id'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
     </div>
</div>                  



<div className="form-group">
    {/* <label className="control-label col-sm-2" htmlFor="from">From:</label> */}
    <div className="col-sm-10">
    <MDBInput  type="date" label="From"  name='from'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              </div>
</div>

<div className="form-group">
    
    <div className="col-sm-10">
    <MDBInput  type="date" label="TO"  name='to'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              </div>
</div>

<div className="form-group">
    
    <div className="col-sm-10">
        <select className="form-control" id="reason" type="text" value={this.state.reason} name='reason' onChange={this.handleChange=this.handleChange.bind(this)}>

            <option disabled hidden value=''></option>
            <option>For Extra Usage</option>
            <option>For On going Project</option>
            <option>For Take Home</option>
            <option>For Getting Out</option>
        </select>
    </div>

    <div className="form-group">
       
        <div className="col-sm-10">
            {/* <input type="text" className="form-control" id="description" name="description" placeholder="Any more comments" value={this.state.arequest_description}
                onChange={this.onChangeDescription}></input> */}
        <MDBInput  type="text" label="comments"  name='description'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
            
        </div>
    </div>
</div>

</form>
</div>
            )
        })
          } 
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={this.PutReq=this.PutReq.bind(this)}>Request This</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
     
    </MDBContainer>
    );
  }
}

export default ModalPage;