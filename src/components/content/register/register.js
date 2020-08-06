import React from 'react';

class RegisterComponent extends React.Component {
    state = { 
        name:'',
        email:'',
        pwd:''
     }

     getName=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({name: event.target.value})

    }

    getEmail=(event)=>{
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        this.setState({email: event.target.value})
    }

    getUserId=(event)=>{
        // console.log(event)
        // console.log(event.target.value)
        this.setState({uid: event.target.value})
    }
    render() { 
        return ( 
            <div>
            <h2>Register page will render here..!!</h2>
            <form >
                    <label>Name: </label>
                    <input type='text' id="name" onChange={this.getName} required></input>
                    <br></br>
                    <label>Emailid: </label>
                    <input type='text' id="email" onChange={this.getEmail}></input>
                    <br></br>
                    <label>UserId:</label>
                    <input type="text" id="uid" onChange={this.getUserId}></input>
                    <br></br>
                    <label>Password</label>
                    <input type="password" id="pwd" onChange={this.getPassword} required></input>
                    <br></br>
                    <label>Confirm Password</label>
                    <input type="password" id="cpwd" required></input>
                    <br></br>
                    <button type="button" onClick={this.saveUser}>Save User</button>
                    <br></br>
                    
                </form>
            </div>
         );
    }
}
 
export default RegisterComponent;