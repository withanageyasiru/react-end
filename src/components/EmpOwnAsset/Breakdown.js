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
      endpoint: "http://localhost:8000/",
      //endpoint: "http://104.248.24.192:3001/",
      message: [],
      rows: [],
      assets: [],
      key : "",
      dipHead : "",
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


  componentDidMount() {

    //todo
    
  }

  functionSetBreakdown(){
    
    var url = "/breakdown/store";

    axios.get(url, {
      notiId: this.state.notiId,
      responseType: this.props.value,
    })
      .then(response => {
        
      });

  }

 
 

  render() {
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

          {/* <tbody>
            {console.log(this.state.assets)}
            {this.state.assets.map((item, id) => {
              return (
                <tr key={id}>
                  <td className = "text-center">{item.created_at}</td>
                  <td className = "text-center">
                    {item.user.firstName} {item.user.lastName}
                  </td>
                  {this.tableDataRender.call(this,item)}
                  <td className = "text-center">{item.asset.type}</td>
                  <td className = "text-center">{item.asset.brandName}</td>
                  <td>
                    <PopUp value={item} status={this.state.User_status} />
                  </td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
        {/* <button onClick={this.send} >connect</button> */}
      </div>
    );
  }
}

export default NotiMsg;
