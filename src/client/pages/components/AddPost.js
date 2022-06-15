import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Button, Text } from 'rebass';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.title !== "" && this.state.content !== "") {
      this.props.addPost(this.state);
      this.setState({title: '', content: ''}, () => {
        this.props.history.push('/posts');
      });
    }
  }

  render() {
    return (
      <div>
        <Box
        as='form'
        onSubmit={this.handleSubmit}
        py={3}
        width={['90%', '90%', '75%']}
        mx='auto'
        >
          <Text
            fontSize={[ 1, 3, 4 ]}
            color='secondary'
            mt={3} mb={2} px={2}
            width={['90%', '80%', '65%']}
            mx='auto'
          >New Post</Text>
          <Box width={['90%', '80%', '65%']} mx='auto' px={2} my={3}>
            <input style={{width: '100%'}} type="text" onChange={this.handleChange} name="title" value={this.state.title} id="title" placeholder="Title" />
          </Box>
          <Box width={['90%', '80%', '65%']} mx='auto' px={2} my={3}>
            <textarea style={{width: '100%', height: '100px'}} type="text" onChange={this.handleChange} name="content" value={this.state.content} id="content" placeholder="Content" />
          </Box>
          <Box width={['90%', '80%', '65%']} mx='auto' px={2} my={3}>
            <Button variant='primary' px={2} mr={2} type="submit" style={{cursor: "pointer"}}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    );
  }
}

export default withRouter(AddPost);
