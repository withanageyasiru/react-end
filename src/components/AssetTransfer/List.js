import React, { Component } from 'react';
import axios from 'axios';

export default class List2 extends Component {
    constructor(){
        super();
        this.state={
          transfers:[],
        }
      }

      //calling API
  componentDidMount(){
    axios.get(localStorage.getItem("baseUrl") + 'api/transfers')
    .then(response=>{
      this.setState({
        transfers:response.data
    });
  });
}


onDelete(transfer_id){
    axios.delete(localStorage.getItem("baseUrl") + 'api/transfer/delete/'+transfer_id)
    .then(response=>{ 
        //removing the deleted items from the front end 
      var transfers=this.state.transfers;
  
      for(var i=0;i<transfers.length;i++){
        if(transfers[i].id === transfer_id)
        {
            transfers.splice(i,1);
          this.setState({transfers:transfers});
        }
      }
      
        this.setState({ alert_message: "success" })
    }).catch(error => {
        this.setState({ alert_message: "error" });
    })
  
  }


    render() {
        return (
            <div>
                <hr />

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Reason</th>
                            <th scope="col">From Department</th>
                            <th scope="col">From Employee</th>
                            <th scope="col">To Department</th>
                            <th scope="col">To Employee</th>
                            <th scope="col">Asset Type</th>
                            <th scope="col">Asset ID</th>
                            <th scope="col">Action</th>
    
                        </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.transfers.map(transfer=>{ 
                          return (
                                 <tr key={transfer.id}>
                                   <td>{transfer.id}</td>
                                   <td>{transfer.reason}</td>
                                   <td>{transfer.fromDept}</td>
                                   <td>{transfer.fromUser}</td>
                                   <td>{transfer.toDept}</td>
                                   <td>{transfer.toUser}</td>
                                   <td>{transfer.assetType}</td>
                                   <td>{transfer.assetID}</td>
                                   <td><a href="/transfers" onClick={this.onDelete.bind(this,transfer.id)}>Delete</a></td>
                                 </tr>
                        
                             
                             )
                         })
                        
                      }


                    </tbody>
                </table>


            </div>
        );
    }
}

