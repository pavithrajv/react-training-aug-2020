import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="nav">
                <ul>
                {/* <p id="welcome">Welcome,Pavithra!!</p> */}
            <li><Link to="/products" style={{textDecoration:"none", marginTop:"-20px"}}>
                <h2>Products</h2>
            </Link></li>
            <li><Link to="/dashboard" style={{textDecoration:"none"}}>
                <h2>Dashboard</h2>
            </Link></li>
            </ul>
            
            </div>
         );
    }
}
 
export default Navbar;