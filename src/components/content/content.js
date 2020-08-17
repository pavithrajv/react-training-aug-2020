import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DashboardComponent from './dashboard/dashboard';
import ProductsComponent from './products/products';
import RegisterComponent from './register/register';
import LoginComponent from './login/login';
import editProduct from './products/editProduct';
import addProduct from './products/addProduct';

class ContentComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <Switch>
                <Route path='/addproduct' component={addProduct}></Route>
                <Route path='/login' component={LoginComponent}></Route>    
                <Route exact path='/dashboard' component={DashboardComponent}></Route>    
                <Route path='/products' component={ProductsComponent}></Route>
                <Route path='/register' component={RegisterComponent}></Route>
                <Route path='/' exact component={LoginComponent}></Route>
                <Route path='/editproduct' component={editProduct}></Route>
                
                
                </Switch>
            </div>
         );
    }
}
 
export default ContentComponent;