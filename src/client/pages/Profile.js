import React, { Component } from 'react';
import '../app.css';
import Unicorn from '../assets/img/unicorn.png';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component {

  render() {
    if(!this.props.auth.uid) return <Redirect to='/' />

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
                <Box width={1/2} mx='auto'>
                  <Image src={Unicorn} />
                </Box>
                <Box p={3} width={1/2} mx='auto'>
                  <Heading as='h1'>
                    { this.props.profile.username }
                  </Heading>
                  <Text fontSize={2} my={2}>
                    { this.props.profile.email }
                  </Text>
                </Box>
            </Card>
          </Box>

        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps)(Profile);
