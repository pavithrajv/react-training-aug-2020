import React from 'react';
import { Link } from 'react-router-dom';
 class Header extends React.Component {
     
     render() {
        const menuitem = {
            color:"red",
            backgroundColor:"pink",
            display:'inline',
            padding: '10px',
            margin: '5px'
            
        }
     
     
         return ( 
             <div>
             
             <span>
                <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                        <Link to="/dashboard" style={{ textDecoration:'none'}}>Dashboard</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none'}}>Products</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/register" style={{ textDecoration:'none'}}>Register</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/" style={{ textDecoration:'none'}}>Login</Link>
                    </li>
                </ul>
            </span>
             </div>
          );
     }
 }
  
 export default Header ;