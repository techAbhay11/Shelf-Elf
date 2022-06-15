import React, { Component } from 'react';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { connect } from 'react-redux';
import { signUpUser } from '../reduxStore/actions/authActions';
import SignUpForm from './components/SignUpForm';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {

  signUpUser = (cred) => {
    this.props.signUpUser(cred);
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
                    Sign up to Shelf Elf!
                  </Heading>
                </Box>
            </Card>
          </Box>
          <SignUpForm signUpUser={this.signUpUser} />
          <Box p={3} width={1/2} mx='auto'>
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
    signUpUser: (cred) => {
      dispatch(signUpUser(cred));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
