import React, { Component } from 'react';
import { Box, Button, Text } from 'rebass';

class AddComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if(this.state.content !== "") {
      this.props.addComment(this.state);
      this.setState({content: ''}, () => {
        // this.props.history.push('/posts');
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
          <Box width={['90%', '80%', '65%']} mx='auto' px={2} my={3}>
            <textarea style={{width: '100%', height: '100px'}} type="text" onChange={this.handleChange} name="content" value={this.state.content} id="content" placeholder="Add Comment" />
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

export default AddComments;
