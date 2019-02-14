// import React from "react";
// import { Switch, Link } from 'react-router-dom';
// import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
// import AuthRoute from '../AuthRoute';

// import Publi from "./poolTables/Computerst";
// import Deskt from "./poolTables/Desktopt";
// import Lapt from "./poolTables/Laptopst";
// import Upst from "./poolTables/Upst";
// import Com from "./poolTables/Componentst";
// import Other from "./poolTables/Otherst";


// class PoolView extends React.Component {

//   render() {
//     return (
//       <div>
       
//         <MDBContainer>
//           <MDBDropdown>
//             <MDBDropdownToggle caret color="primary">
//               MDBDropdown
//             </MDBDropdownToggle>
//             <MDBDropdownMenu basic>
//               <MDBDropdownItem href="/home/asset_pool/computers">Computers</MDBDropdownItem>
//               <MDBDropdownItem  href="/home/asset_pool/desktops" >Desktops</MDBDropdownItem>
//               <MDBDropdownItem  href="/home/asset_pool/laptops" >Laptops</MDBDropdownItem>
//               <MDBDropdownItem  href="/home/asset_pool/ups" >Ups</MDBDropdownItem>
//               <MDBDropdownItem  href="/home/asset_pool/compo" >Components</MDBDropdownItem>
//               <MDBDropdownItem  href="/home/asset_pool/oth" >Others</MDBDropdownItem>
//             </MDBDropdownMenu>
//           </MDBDropdown>
//           <Switch>
            
//             <AuthRoute path="/home/asset_pool/computers" component={Publi} props={this.props}/>
//             <AuthRoute exact path="/home/asset_pool/desktops" component={Deskt} props={this.props} />
//             <AuthRoute exact path="/home/asset_pool/laptops" component={Lapt} props={this.props} />
//             <AuthRoute exact path="/home/asset_pool/ups" component={Upst} props={this.props} />
//             <AuthRoute exact path="/home/asset_pool/compo" component={Com} props={this.props} />
//             <AuthRoute exact path="/home/asset_pool/oth" component={Other} props={this.props} /> 
//           </Switch>
//         </MDBContainer>
//       </div>
//     );
//   }

// }

// export default PoolView;
