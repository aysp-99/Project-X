import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../style.css';


export default class Login extends React.Component {
    constructor(props){
        super(props)
        let loggedIn=false
        this.state = {
            email: '',
            password:'',
            loggedIn
        }
        
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        const {email,password} = this.state
        console.log(email==='S@gmail.com' && password==='qwe')
        if( email==='S@gmail.com' && password==='qwe'){
            this.setState({
                loggedIn: true
            })
           
        }        
        else {
            alert("pass is incorrect")
        }

    }

    render(){
        if(this.state.loggedIn){
            return <Redirect to="/landingpage"/>
        }
        return ( 
            <div class="login">
            <div class="login-triangle"></div>
  
            <h2 class="login-header">Log in</h2>
            <div>
                
                <form class="login-container" onSubmit ={this.handleSubmit}>
                    <p><input type="email" name="email" placeholder="Email-ID" value={this.state.email} onChange={this.onChange}/></p>
                    <p><input type="password" name="password" placeholder="Code" value={this.state.password} onChange={this.onChange}/></p>
                   <p><input type="submit"/></p>
                </form>
            </div>
            </div>
         );
    }

    
}
