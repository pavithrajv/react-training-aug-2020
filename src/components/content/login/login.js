import React from 'react';

class LoginComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <h2>Login page will render here..!!</h2>
            <form>
                <label>Username</label>
                <input type="text" id="uname" placeholder="Enter username"></input><br></br>
                <label>Password</label>
                <input type="password" id="pwd" placeholder="enter password"></input><br></br>
                <button type="button">Login</button>
                    
            </form>
            </div>
         );
    }
}
 
export default LoginComponent;