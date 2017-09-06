import React, { Component } from 'react';
import logo from './gfa.png';
import './App.css';
import firebase from 'firebase';
import Auth from './Auth';
import Unauth from './Unauth';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {user: null};
  }
  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => this.setState({user}));
  }
  
  handleLogin(e){
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogout(e){
    e.preventDefault();
    firebase.auth().signOut();
  }
  render() {
  const loginButton = <button className="button" onClick={this.handleLogin.bind(this)}>Iniciar sesión</button>;
  const logoutButton = <button className="button" onClick={this.handleLogout.bind(this)}>Cerrar sesión</button>;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} width="200" alt="logo" />
          <h2>Login GFA</h2>
          {this.state.user ? logoutButton : loginButton}
        </div>
        <br/>
        <div className="App-intro">
          {this.state.user ? <Auth/> : <Unauth/>}
        </div>
      </div>
    );
  }
}

export default App;
