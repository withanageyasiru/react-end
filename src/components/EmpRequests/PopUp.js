import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import AcceptBtn from './AcceptBtn';

class ModalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal6: false,
            modal7: false
        };
    }

    toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render() {
        return <Container>
            <Button color="info" onClick={() => this.toggle(8)}>
              Details!
            </Button>
            {/*  */}
            {console.log(this.props.value)}
            <Modal isOpen={this.state.modal8} toggle={() => this.toggle(8)} fullHeight position="right">
              <ModalHeader toggle={() => this.toggle(8)}>
                {this.props.value.user.firstName} {this.props.value.user.lastName}
              </ModalHeader>
              <ModalBody>
              <h6>{this.props.value.user.firstName} {this.props.value.user.lastName} is requesting a {this.props.value.asset.type} becourse of his {this.props.value.description} </h6>
              <br/>
              <h6>Asset Details</h6> 
              <b>Asset ID : {this.props.value.asset.id} </b><br/>
              <b>Brand : {this.props.value.asset.brandName}</b><br/>
              <b>Type : {this.props.value.asset.type}</b><br/>
              <b>Price : {this.props.value.asset.price}</b><br/>
              <b>Warranty Status : {this.props.value.asset.warrantyStatus===1? <b>in warratty</b> : <b >out warratty</b>}</b><br/>
              <b>Warranty Expire Date : {this.props.value.asset.expireDate}</b><br/><br/>
              <h6>Employee Details</h6> 
              <b> {this.props.value.user.firstName} {this.props.value.user.lastName}</b><br/>
              <b>User ID : {this.props.value.user.id}</b><br/>
              <b>Email : {this.props.value.user.email}</b><br/>
              {/* <b>Status : {this.props.value.user.status}</b><br/> */}

              </ModalBody>
              <ModalFooter toggle={() => this.toggle(8)}>
                {/* <Button onClick={() => this.toggle(8)}><AcceptBtn value={1}  /></Button>
                        <Button color="primary">Save changes</Button> */}
                <a href="#!" onClick={() => this.toggle(8)}>
                  <AcceptBtn value={1} response={true} id ={this.props.value.id} status = {this.props.value.user.status} />
                </a>
                <a href="#!" onClick={() => this.toggle(8)}>
                   <AcceptBtn value={0} response={false} id ={this.props.value.id} status = {this.props.value.user.status} />
                </a>
              </ModalFooter>
            </Modal>
          </Container>;
    }
}

export default ModalPage;