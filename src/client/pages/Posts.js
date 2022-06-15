import React, { Component } from 'react';
import { Box, Card, Image, Heading, Text, Flex, Button } from 'rebass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

class Posts extends Component {

  render() {
    const posts = this.props.posts;
    const postList = posts ? (
      posts.map((post) => {
        const date = post.timestamp.toDate();
        let minutes = date.getMinutes();
        if(minutes < 10) {
          minutes = '0' + minutes
        }
        return (
           <Card
             sx={{
               p: 1,
               borderRadius: 2,
               boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
             }} my={3} key={post.id}>
              <Link to={'/posts/' + post.id} style={{color: '#000', textDecoration: 'none'}}>
                 <Box p={4} width={['90%', '75%', '67%']} mx='auto'>
                   <Heading as='h1' fontSize={4} mb={4}>
                     {post.title}
                   </Heading>
                   <Text color='purple' fontSize={3} my={3}>
                     By: {post.posted_by.username}
                   </Text>
                   <Text fontSize={2} my={3}>
                     {`${date.getHours()}:${minutes}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`}
                   </Text>
                 </Box>
              </Link>
           </Card>
         )
     })
    ) : (
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
          <Box p={4} width={2/3} mx='auto'>
            {/*<Heading as='h1'>
              No Posts here
            </Heading>*/}
            <div className="loader">Loading...</div>
          </Box>
      </Card>
    )
    return (
      <React.Fragment>
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            <Heading as='h1' fontSize={5} my={2}>
              Shelf Elf!
            </Heading>
            <Link to="/createpost">
              <Button variant='primary' fontSize={3} p={2} style={{cursor: "pointer"}}>
                Create Post
              </Button>
            </Link>
            <Text fontSize={4} mt={2} mb={4}>
              Posts:
            </Text>
            {postList}
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'posts', orderBy: ['timestamp', 'desc'] }])
)(Posts);
