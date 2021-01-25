import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import logo from './../logo.svg';
import './Login.css';
import AuthService from './../services/AuthService';

class Login extends Component<RouteComponentProps> {
    state = { username: '', password: '', isChecked: false }
    handleChecked(){
        this.setState({
            isChecked: !this.state.isChecked
        });
    }
    async handleSubmit(event: any){
        event.preventDefault();
        const postData = {
            username: this.state.username,
            password: this.state.password
        }
        const response = await AuthService.doUserLogin(postData);
        console.log('response', response);
        if(response) {
            AuthService.handleLoginSuccess(response, this.state.isChecked);
            this.props.history.push('/home');
        } else {
            alert('Please check your credentials');
        }
    }
    render() {
        const { username, password, isChecked } = this.state;
        return (
            <div className="form-signin">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                    <input 
                        name="username"
                        type="text" 
                        value={username}
                        onChange={event => this.setState({ username: event.target.value })}
                        id="inputUsername" 
                        className="form-control" 
                        placeholder="Email address" 
                        required
                    />
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <input 
                        name="password"
                        type="password" 
                        value={password}
                        onChange={event => this.setState({ password: event.target.value })}
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Password" 
                        required
                    />
                    <div className="checkbox mb-3">
                    <label onClick={() => this.handleChecked()}>
                        <input 
                            type="checkbox" 
                            value="remember-me" 
                            checked={isChecked}
                            onChange={() => this.handleChecked()}
                        /> Remember me
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
                </form>
            </div>
        )
    }
}

export default Login;