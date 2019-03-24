// import packages
import React, { Component } from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
//import Message from "./components/Message";
import PopUp from "./PopUp";

class NotiMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //endpoint: "http://localhost:3001/",
      endpoint: "http://104.248.24.192:3001/",
      message: [],
      rows: [],
      assets: [],
      key : "",
      dipHead : "kasun",
      User_id : 0,
      User_status : 1
    }; // this is where we are connecting to with sockets
    this.setMessage = this.setMessage.bind(this);
    this.tableDataRender = this.tableDataRender.bind(this);
  }

  tableRender(){
    if(this.state.User_status===3){
      return <th scope="col" className = "text-center"> DEPARTMENT HEAD </th>
    }
  }

  tableDataRender(item){
    if(this.state.User_status===3){
      return <td  className = "text-center"> {item.head.firstName} {item.head.lastName} </td>
    }
  }

  componentDidMount() {

    
    var url = "http://104.248.24.192:8080/api/auth/user";

    axios.get(url, {
      notiId: this.state.notiId,
      responseType: this.props.value,
    })
      .then(response => {
        // handle success
        this.setState({
          User_status : response.data.status,
          User_id : response.data.id
        })
        if (this.state.User_status===1) { this.setState({ key : 'assetreq'})}
        if (this.state.User_status===3) { this.setState({ key : 'assetreq_it'})}
        if(this.state.User_status===1){url = "http://104.248.24.192:8080/api/auth/showreq";}
        if(this.state.User_status===3){url = "http://104.248.24.192:8080/api/auth/showreqforit";}
        
        axios.get(url, {
          notiId: this.state.notiId,
          responseType: this.props.value,
        })
          .then(response => {
            // handle success
            this.setState({
              key: response.id,
            })
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
          

          // if (this.state.User_status===1) { this.setState({ key : 'assetreq'})}
          // if (this.state.User_status===3) { this.setState({ key : 'assetreq_it'})}
        console.log("user" , response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    
  }

  // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint);

    // this emits an event to the socket (your server) with an argument of 'red'
    // you can make the argument any color you would like, or any kind of data you want to send.
    
    

    socket.emit("connect", this.state.key);
    // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
  };

  setMessage(message) {
    //this.state.assets = [JSON.parse(message)];
    console.log("return form node", message);
    if (JSON.parse(message).user===this.state.User_id){   //set user id to filter out
          console.log(JSON.parse(message).user);
      
        this.setState({
          assets: JSON.parse(message).requests
          //assets: message.original.requests
        });

    }
    if (JSON.parse(message).status===this.state.User_status){   //set user id to filter out
        console.log(JSON.parse(message).user);

          this.setState({
          assets: JSON.parse(message).requests
          //assets: message.original.requests
          });

    }
    //this.state.message.push(JSON.parse(message).message);
    console.log(JSON.parse(message));
     //console.log(message);
  }

  render() {
    const socket = socketIOClient(this.state.endpoint);
    // socket.on is another method that checks for incoming events from the server
    // This method is looking for the event 'change color'
    // socket.on takes a callback function for the first argument
    socket.emit("connect", "asreq");
    socket.on(this.state.key, message => {
      // getting realtime updates
      //this.state.message.push("holas");
      this.setMessage(message);
    });
    console.log(this.state.assets);
    return (
      <div>
        <table className="table">
          <thead className="bg-info">
            <tr>
              <th scope="col" className = "text-center">DATE</th>
               <th scope="col" className = "text-center">REQUESTED EMPLOYEE</th>
               {/* {this.state.User_status===3 ? <th scope="col"> DEPARTMENT HEAD </th>:<> } */}
              {this.tableRender()}
              {/*<th scope="col">DEPARTMENT HEAD</th> */}
              <th scope="col" className = "text-center">ASSET TYPE </th>
              <th scope="col" className = "text-center">BRAND</th>
              <th scope="col"></th>
              {/* <th scope="col" /> */}
            </tr>
          </thead>

          <tbody>
            {console.log(this.state.assets)}
            {this.state.assets.map((item, id) => {
              return (
                <tr key={id}>
                  <td className = "text-center">{item.created_at}</td>
                  <td className = "text-center">
                    {item.user.firstName} {item.user.lastName}
                  </td>
                  {/* <td className = "text-center">kasun</td> */}
                  {this.tableDataRender.call(this,item)}
                  {/* <td  className = "text-center"> {item.head.firstName} </td> */}
                  <td className = "text-center">{item.asset.type}</td>
                  <td className = "text-center">{item.asset.brandName}</td>
                  <td>
                    <PopUp value={item} status={this.state.User_status} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <button onClick={this.send} >connect</button> */}
      </div>
    );
  }
}

export default NotiMsg;
