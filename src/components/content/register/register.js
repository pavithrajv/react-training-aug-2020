import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './register.css'

class RegisterComponent extends React.Component {

    state = {
        name: '',
        email: '',
        uid: '',
        pwd: '',
        cpwd: '',
        nameError: '',
        emailError: '',
        useridError: '',
        pwdError: '',
        cpwdError: '',
        buttonStatus: true


    }


    getName = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        this.checkValidation()


    }


    getEmail = (event) => {
        this.setState({ email: event.target.value })
        this.checkValidation()
    }


    getUserId = (event) => {
        this.setState({ uid: event.target.value })
        this.checkValidation()
    }
    getPwd = (event) => {
        console.log(event.target.value)
        this.setState({ pwd: event.target.value })
        this.checkValidation()
    }


    getCpwd = (event) => {
        console.log(event.target.value)
        this.setState({ cpwd: event.target.value })
        this.checkValidation()
    }


    checkValidation = () => {


        if (this.state.name == "" || this.state.name.length < 4) {
            this.setState({ nameError: "please enter valid name", buttonStatus: true })
        }
        else {
            this.setState({ nameError: '', buttonStatus: false })
        }
        if (this.state.email == "" || !this.state.email.match('@gmail.com')) {
            this.setState({ emailError: 'please enter valid email', buttonStatus: true })
        }
        else {
            this.setState({ emailError: '', buttonStatus: false })
        }
        if (this.state.uid == "" || this.state.uid.length < 4) {
            this.setState({ useridError: 'please enter valid userid', buttonStatus: true })
        }
        else {
            this.setState({ useridError: '', buttonStatus: false })
        }
        if (this.state.pwd == '' || this.state.pwd.length <= 4) {
            this.setState({ pwdError: "please enter valid password", buttonStatus: true })
        }
        else {
            this.setState({ pwdError: '', buttonStatus: false })
        }
        if (this.state.cpwd == '' || this.state.pwd != this.state.cpwd) {
            this.setState({ cpwdError: 'Enter the same password again' })
        }
        else {
            this.setState({ cpwdError: '', buttonStatus: false })
        }



    }


    saveUser = () => {
        console.log("save user rendered..")


        let userDetails = {
            "id": this.state.uid,
            "name": this.state.name,
            "email": this.state.email,
            "userid": this.state.uid,
            "pwd": this.state.pwd,
            "cpwd": this.state.cpwd
        }
        console.log("userDetails:", userDetails)
        this.checkValidation()
        console.log(this.state.pwdError)

        Axios.post('http://localhost:3002/allusers', userDetails)
            .then(response => {
                console.log(response)
                console.log(this.props.history.push('/login'))
            }).catch(error => {
                console.log(error)
            })

    }


    render() {
        return (
            <div id="registerbox">
                <h2>REGISTER HERE.!!</h2>
                <form>
                    <p>Name </p>
                    <input type='text' id="name" onChange={this.getName} required></input><span >{this.state.nameError}</span>
                    <br></br>
                    <p>Emailid </p>
                    <input type='text' id="email" onChange={this.getEmail} required></input><span >{this.state.emailError}</span>
                    <br></br>
                    <p>UserName</p>
                    <input type="text" id="uid" onChange={this.getUserId} required></input><span >{this.state.useridError}</span>
                    <br></br>
                    <p>Password</p>
                    <input type="password" id="pwd" onChange={this.getPwd} required></input><span >{this.state.pwdError}</span>
                    <br></br>
                    <p>Confirm Password</p>
                    <input type="password" id="cpwd" onChange={this.getCpwd} required></input>
                    <br></br><br></br>
                    <button id="save" onClick={this.saveUser} disabled={this.state.buttonStatus} style={{ backgroundcolor: 'white', color: ' black', border: '2px solid #008CBA' }}>SignUp</button>
                    <br></br><br></br>
                    <Link to='/login' id="reg">Already a member,login here..</Link>
                </form>
            </div>
        );
    }

}

export default RegisterComponent;