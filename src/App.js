import React, {Component, Fragment} from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';

import './App.css';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      users : [],
      user : {},
      loading : false,
      alert: null
    }
  };

  // function searchUser
  searchUser = async text => {
    this.setState({ loading:true });
    const response = await axios.create({
      baseURL : 'https://api.github.com',
      timeout : 5000,
      headers : { Authorization : process.env.REACT_APP_GITHUB_TOKEN }
    }).get(`/search/users?q=${text}`);
    this.setState({ loading: false, users : response.data.items });
  }

  getUser = async username => {
    this.setState({ loading:true });
    const response = await axios.create({
      baseURL : 'https://api.github.com',
      timeout : 5000,
      headers : { Authorization : process.env.REACT_APP_GITHUB_TOKEN }
    }).get(`/users/${username}`);
    this.setState({ loading: false, user : response.data });
  }

  clearUser = ()=> {
    this.setState({ users:[], loading: false });
  }

  showAlert = (msg, type) => {
    this.setState({alert: {msg, type}});
    setTimeout(() => this.setState({ alert: null }),2500);
  }

  render() {

    const {user, users, loading, alert} = this.state;

    return (
      <Router>
        <div className="App">
          <div>
            <Navbar/>
            <div className="container">
              <Alert alert={alert}/>
              <Switch>
                <Route exact path="/" render={ props => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser} 
                      clearUser={this.clearUser}
                      showClear={users.length > 0 ? true : false}
                      showAlert={this.showAlert}
                    />
                    <Users users={users} loading={loading}/>
                  </Fragment>
                )}/>

                <Route exact path="/about" component={About}/>
                <Route exact path="/users/:login" render={(props) => (
                  <User { ...props } getUser={this.getUser} user={user} loading={loading}/>
                )}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
