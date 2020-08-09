import React from 'react';

import Navbar from '../../navbar/navbar';
import '../../navbar/navbar.css';
import ChartComponent from './chart.js';

class DashboardComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
            <Navbar></Navbar>   
            <ChartComponent></ChartComponent>
            
            </div>
         );
    }
}
 
export default DashboardComponent;