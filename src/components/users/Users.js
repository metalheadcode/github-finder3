import React from 'react'
import Spinner from '../layouts/Spinner';
import UserItem from './UserItem';

const Users = ({users, loading}) => {
  
  if(loading) {
    return <Spinner/>
  }else{
    return (
      <div style={stylesGrid}>
        { users.map( user => <UserItem key={user.id} user={user}/> ) }
      </div>
    )
  }
};

const stylesGrid = {
  display: 'grid',
  gridTemplateColumns : 'repeat(3, 1fr)',
  gridGap : '1rem'
}

export default Users
