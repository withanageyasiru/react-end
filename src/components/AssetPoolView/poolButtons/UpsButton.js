import React, { Component } from 'react';
import { MDBContainer,MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBListGroup,MDBListGroupItem } from 'mdbreact';
import Axios from 'axios';
import Msgs from '../../EmpManage/sucmsgpagee';
import Msgs2 from '../../EmpManage/failmsgpage';

class ModalPage extends Component {
    constructor(props)   
   {
      super(props);

      this.state = {
        modal6: false,
        modal7: false,
        arri:[""],
        msg:" ",
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
  //this.props.val.id
  //let url = "http://127.0.0.1:8000/api/auth/astreq";
  e.preventDefault();
  Axios.post("http://104.248.24.192:8080/api/auth/astreq", {
    id:this.props.val.id,
    from: this.state.from,
    to: this.state.to,
    reason: this.state.reason,
    description: this.state.description
       })
      .then((res) => {
        this.setState({
          msg:"suc"
        })
       console.log("RESPONSE RECEIVED: ");
   })
   .catch((err) => {
      this.setState({
          msg:"fail"
        })
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
            
             
            
        })
     }

render() {
  return (
      
    <MDBContainer>
    
           {this.state.msg=="suc"?<Msgs />:null}
           {this.state.msg=="fail"?<Msgs2 />:null}
    <MDBBtn color="info" onClick={this.toggle(8)}>More Details</MDBBtn>
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle(8)}>More Details...</MDBModalHeader>
        <MDBModalBody>
        {
        this.state.arri.map(far =>{
            return(
              <div>
              {/* <MDBListGroup style={{ width: "22rem" }}key={far.id}>
                <MDBListGroupItem>{far.id}</MDBListGroupItem>
                <MDBListGroupItem>{far.capacity}</MDBListGroupItem>
                <MDBListGroupItem>{far.brandName}</MDBListGroupItem>
                 <MDBListGroupItem>{far.price}</MDBListGroupItem>
                
              </MDBListGroup> */}
          <div className="col-sm-10">
              <h6>Asset Details..</h6>
               <b>Asset ID: {far.id}</b><br/>
               <b>BrandName: {far.brandName}</b><br/>
               <b>Type: {far.type}</b><br/>
               <b>Price: {far.price}</b><br/>
               <b>Warranty Status : {far.warrantyStatus===1? <b>in warratty</b> : <b >out warratty</b>}</b><br/>
               <b>Warranty <i>Expire Date</i> : {far.expireDate}</b><br/><br/>
          </div>     
               <form >


                

  <div className="form-group">
 {/* <label className="control-label col-sm-1" htmlFor="from">From:</label>  */}
    <div className="col-sm-10">
    <h6>Asset Details..</h6>
    <MDBInput  type="date"   name='to'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
     </div>
</div>

<div className="form-group">
<label className="control-label col-sm-2" htmlFor="from">To:</label> 
    <div className="col-sm-10">
    <MDBInput  type="date" label="TO"  name='to'  validate error="wrong"  success="right" onChange={this.handleChange=this.handleChange.bind(this)} />
              </div>
</div>

<div className="form-group">

    <div className="col-sm-10">
    <h6>Reason for request..</h6>
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
          
          <MDBBtn color="primary" onClick={this.PutReq=this.PutReq.bind(this)}>Request This</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
     
    </MDBContainer>
    );
  }
}

export default ModalPage;