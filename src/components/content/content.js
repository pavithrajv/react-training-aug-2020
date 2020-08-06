import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DashboardComponent from './dashboard/dashboard';
import ProductsComponent from './products/products';
import RegisterComponent from './register/register';
import LoginComponent from './login/login';

class ContentComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2>Content!!!!!</h2>

                <Switch>
                <Route exact path='/dashboard' component={DashboardComponent}></Route>    
                <Route path='/products' component={ProductsComponent}></Route>
                <Route path='/register' component={RegisterComponent}></Route>
                <Route path='/' exact component={LoginComponent}></Route>
                </Switch>
            </div>
         );
    }
}
 
export default ContentComponent;