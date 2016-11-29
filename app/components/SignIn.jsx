import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class SignIn extends React.Component {

  signIn(event) {
    event.preventDefault()
    axios.post('/api/token', {
      email: this.refs['email'].value,
      password: this.refs['password'].value
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  render() {
    return (
      <div>
        <div className="container">
        <div className="row">
          <form className="col s12">
            <h2 className="auth-title center-align">Sign-In</h2>
            <div className="col s10 offset-s1">
              <label>Email</label>
              <input type="email" ref="email"/>
            </div>
            <div className="col s10 offset-s1">
              <label>Password</label>
              <input type="password" ref="password" />
              <button type="button" name="button" onClick={this.signIn.bind(this)}><Link to="/">Sign-In</Link></button>
            </div>
          </form>
          </div>
        </div>
      </div>
    )
  }
}