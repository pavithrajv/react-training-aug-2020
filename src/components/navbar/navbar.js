import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div id="nav">
                <p id="welcome">Welcome,Pavithra!!</p>
            <Link to="/products" id="pro">
                <h2>Products</h2>
            </Link>
            <Link to="/dashboard" id="dash">
                <h2>Dashboard</h2>
            </Link>
            
            </div>
         );
    }
}
 
export default Navbar;