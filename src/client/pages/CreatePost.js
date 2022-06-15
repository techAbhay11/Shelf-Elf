import React, { Component } from 'react';
import AddPost from './components/AddPost';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { connect } from 'react-redux';
import { addPost } from '../reduxStore/actions/postActions';
import { deleteBook } from '../reduxStore/actions/deleteActions';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class CreatePost extends Component {

  addPost = (post) => {
    this.props.addPost(post);
  }

  render() {
    if(!this.props.auth.uid) return <Redirect to='/login' />
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
                <Box p={3} width='90%' mx='auto'>
                  <Heading as='h1'>
                    Welcome to Shelf Elf!
                  </Heading>
                  <Text fontSize={2} my={2}>
                    Create your post!
                  </Text>
                </Box>
            </Card>
          </Box>

          <AddPost addPost={this.addPost}/>

        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
