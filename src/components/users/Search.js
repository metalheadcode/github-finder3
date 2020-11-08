import React, { Component } from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text : ''
    }
  };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired
  };

  onSubmit = (event) => {
    event.preventDefault();
    if(this.state.text === ''){
      this.props.showAlert('Please insert something', 'light');
    }else{
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    };
  };

  onChange = (event) => this.setState({ [event.target.name] : event.target.value });

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search Users...."
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="btn btn-block btn-dark"
          />
        </form>

        {this.props.showClear &&
          <button
          className="btn btn-block btn-light"
          onClick={this.props.clearUser}
          >Clear</button>
        }
        
      </Fragment>
    )
  }
}

export default Search
