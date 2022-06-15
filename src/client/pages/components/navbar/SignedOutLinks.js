import React, { Component } from 'react';
import { Text, Image } from 'rebass';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
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
        <Link to='/login' style={{textDecoration: 'none'}} >
          <Text px={[1, 2, 3]} py={3} fontSize={[1, 2, 2]} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Log In</Text>
        </Link>
        <Link to='/signup' style={{textDecoration: 'none'}} >
          <Text px={[1, 2, 3]} py={3} fontSize={[1, 2, 2]} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Sign Up</Text>
        </Link>
      </React.Fragment>
    );
}

export default SignedOutLinks;
