import React, { Component } from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { connect } from 'react-redux';
import { logInUser } from '../reduxStore/actions/authActions';
import LogInForm from './components/LogInForm';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {

  logInUser = (cred) => {
    this.props.logInUser(cred);
    // console.log(cred);
  }

  render() {
    if(this.props.auth.uid) return <Redirect to='/' />
    return (
      <React.Fragment>
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
              }}>
                <Box p={3} width={1/2} mx='auto'>
                  <Heading as='h1'>
                    Log in to Shelf Elf!
                  </Heading>
                </Box>
            </Card>
          </Box>
          <LogInForm logInUser={this.logInUser} />
          <Box p={3} width={['80%', '65%', 1/2]} mx='auto'>
            {
              this.props.authError ? (
                <Text fontSize={3} color='red' mt={2} mb={2}>
                  { this.props.authError }
                </Text>
              ) : null
            }
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.firestore);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (cred) => {
      dispatch(logInUser(cred));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
