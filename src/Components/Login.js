import React, { Component } from 'react';
import './login.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Details from './Details';
class Login extends Component {
    state={
        loginName:"Login",
        username:'',
        password:''
    }
    onInputChange=(event)=>{
        this.setState(
            {
                username:event.target.value,
                password:event.target.value
            }
        )
    }
    
    onSubmit=()=>{
        if(this.state.username === '' && this.state.password ==='' ) {
            alert("enter values");
        }
        else {
            alert("Successfull");
        //     <Router>
        //         {/* <Link to ="/Details"></Link> */}
        //         <Route exact path="/Details" component={Details} />
        //    </Router>
        }
    }
    render () {
        console.log(this.username);
        return(
        <div className="logincontainer">
            <ul>
                <div className="uldiv">
                    {this.state.loginName}
                </div>  
                <li>
                    Username<br/>
                    <input type="text" placeholder="Enter email" className="instyle" onChange={this.onInputChange}/>
                </li>
                <li>
                    Password<br/>
                    <input type="text" placeholder="********" className="instyle" onChange={this.onInputChange} />
                </li>
            </ul>
            <button className="btn" type="submit" onClick={this.onSubmit}>Submit</button> 
            <br/>
            <input type="date" name="mydate"/>
        </div>
        
        )
    }
}
export default Login;