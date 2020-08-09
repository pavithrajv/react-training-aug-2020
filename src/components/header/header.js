import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
 class Header extends React.Component {
     
     render() {

         return ( 
            <div id="head">
            <h2 id="logo">Product Inventory System</h2>
            
            <Link to="/login" id="logout">
                <h2>Logout</h2>
            </Link>
        </div>
          );
     }
 }
  
 export default Header ;