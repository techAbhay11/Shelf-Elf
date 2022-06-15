import React, { Component } from 'react';
import { Text, Image } from 'rebass';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/img/wizard.png';
import { connect } from 'react-redux';
import { logOut } from '../../../reduxStore/actions/authActions';

const SignedInLinks = (props) => {
    return (
      <React.Fragment>
        <Link to='/posts' style={{textDecoration: 'none'}} >
          <Text px={[1, 2, 3]} py={3} fontSize={[1, 2, 2]} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Posts</Text>
        </Link>
        <Link to='/search' style={{textDecoration: 'none'}} >
          <Text px={[1, 2, 3]} py={3} fontSize={[1, 2, 2]} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Search</Text>
        </Link>
        <Link to='/about' style={{textDecoration: 'none'}} >
          <Text px={[1, 2, 3]} py={3} fontSize={[1, 2, 2]} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>About</Text>
        </Link>
        <Link to='/profile'>
          <Image
            src={Avatar}
            sx={{
              width: 36,
              height: 36,
              borderRadius: 9999,
              backgroundColor: 'white'
            }}
            mx={[1, 2, 3]}
          />
        </Link>
        <Link to='#' style={{textDecoration: 'none'}} onClick={() => props.logOut()} >
          <Text px={[1, 2, 3]} py={3} fontSize={[1, 2, 2]} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Log Out</Text>
        </Link>
      </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logOut());
    }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
