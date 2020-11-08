import React, { Fragment, Component } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  };

  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  }

  render() {
    const {login, username} = this.props.user;

    if(this.props.loading){
      return <Spinner/>
    } else {
      return (
        <Fragment>
          {login}
          {username}
        </Fragment>
      )
    }
  }
}

export default User