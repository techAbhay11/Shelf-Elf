import React, { Component } from 'react';
import '../app.css';
import WizardHat from '../assets/img/hat.png';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

class Home extends Component {

  render() {
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
                  <Image src={WizardHat} />
                </Box>
                <Box p={3} width={1/2} mx='auto'>
                  <Heading as='h1'>
                    Welcome to Shelf Elf!
                  </Heading>
                  <Text fontSize={2} my={2}>
                    Behold!
                  </Text>
                </Box>
                {
                  !this.props.auth.uid ? (
                    <Box p={3} width={1/2} mx='auto'>
                      <Heading as='h1'>
                        Log in to discuss about books!
                      </Heading>
                    </Box>
                  ) : null
                }
            </Card>
          </Box>

        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps)(Home);
