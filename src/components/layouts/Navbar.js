import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <Fragment>
      <div className="navbar bg-primary">
        <h3>
          <i className={icon}/> {title}
        </h3>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </Fragment>
  )
};

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder'
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar