import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../login/login.css'

class LoginComponent extends React.Component {
    state = { 
        uname:'',
        pwd:'',
        users:[],
        msgResponse:'',
        pwdResponse:''
     }
     getUname=(event)=>{
         console.log(event.target.value)
         this.setState({uname:event.target.value})
     }

     getPwd=(event)=>{
        console.log(event.target.value)
        this.setState({pwd:event.target.value})
    }
    // componentWillMount() {
    //     this.checkLogin()
    // }

    checkLogin = () => {
        console.log("check login rendered..")
        
        Axios.get('http://localhost:3002/allusers')
            .then(response => {
                console.log(response.data)
                this.setState({ users: response.data })
                if(this.state.users.map(user=>{
                    if(user.userid == this.state.uname){
                        if(user.pwd == this.state.pwd){
                            console.log("login success..!!")
                            this.setState({msgResponse:"login success"})
                            this.props.history.push('/dashboard')
                        }
                        else{
                            console.log("enter valid password....")
                            this.setState({msgResponse:"enter valid password...."})
                        }
                    }
                    else{
                        console.log("enter valid credentials..")
                        this.setState({msgResponse:"enter valid credentials.."})
                    }
                    
                }));
                
                console.log("msgResponse:",this.state.msgResponse)
                
            }).catch(error => {
                console.log(error)
            })
            console.log("this.state.users:",this.state.users)
    }
    
    render() { 
        return ( 
            <div id="loginbox">
            <center><b>LOGIN HERE.!!</b></center>
            <form style={{marginTop:"30px"}}>
                <p>Username</p>
                <input type="text" id="uname" onChange={this.getUname} placeholder="Enter username"></input><br></br>
                <p>Password</p>
                <input type="password" id="pwd" onChange={this.getPwd} placeholder="enter password"></input><br></br>
                <button onClick={this.checkLogin} id="login" >Login</button><span style={{ color: "red",marginLeft:"20px" }}>{this.state.msgResponse}</span>
                {/* <span style={{ color: "red",marginLeft:"20px" }}>{this.state.pwdResponse}</span> */}
                <br></br><br></br>
                <Link to='/register' id="reg">Don't have an account?,signup here</Link>
                    
            </form>
            </div>
         );
    }
}
 
export default LoginComponent;