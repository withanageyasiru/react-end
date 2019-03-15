import React, { Component } from 'react';



                /* 
                    this class need 3 componenets 
                    if logged user is 
                        normal user 
                            -show his existing assets
                            -his requests with status
                        
                        financial user
                            -show new users
                            -new assets
                        
                        Department Head
                            -new requests
                            -his requests

                        Admin
                            -new requests
                            -new users

                    
                */
export default class AssetBreakdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            userStatus : 0
        }
    }

    switcher(usertype){
        switch(usertype){
            case 0:
                //render elements of normal user
                return(
                    <div>
                         
                    </div>
                );
            case 1:
                //render elements of department head
                return(
                    <div>
                        
                    </div>
                );
            case 2:
                //render elements of financial user
                return(
                    <div>
                        
                    </div>
                );
            case 3:
                //render elements of admin
                return(
                    <div>
                        
                    </div>
                );

        }
    }

    render() {
        return (
            <div>
               {this.switcher(this.userStatus)}
            </div>
        );
    }
}

