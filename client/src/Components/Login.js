import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


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
            <div>
                <h1>LOGIN</h1>
                <form onSubmit ={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email-ID" value={this.state.email} onChange={this.onChange}/>
                    <input type="password" name="password" placeholder="Code" value={this.state.password} onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
            </div>
         );
    }

    
}