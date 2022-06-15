import React, { Component } from 'react';
import { Box, Flex, Button, Text } from 'rebass';
import { Prompt } from 'react-router-dom';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      success: {

      },
      isBlocking: false,
      formValid: true
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {
        case "email":
          {
            if(value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "c";
                return { success };
              })
            }
            else {
              this.setState(prevState => {
                let success = { ...prevState.success };
                success[name] = "w";
                return { success };
              })
            }
            break
          }

          case "password":
            {
              if(value.length >= 6) {
                this.setState(prevState => {
                  let success = { ...prevState.success };
                  success[name] = "c";
                  return { success };
                })
              }
              else {
                this.setState(prevState => {
                  let success = { ...prevState.success };
                  success[name] = "w";
                  return { success };
                })
              }
              break
            }
          default:
            break
    }


    this.setState({
      [name]: value
    }, () => {
      if(this.state.email.length > 0 || this.state.password.length > 0) {
        this.setState({isBlocking: true});
      } else {
        this.setState({isBlocking: false});
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.success.email === "c" && this.state.success.password === "c") {
      this.setState({isBlocking: false, formValid: true}, () => {
        this.props.logInUser({ email: this.state.email, password: this.state.password });
        this.setState({email: '', password: ''});
      });
    }
    else {
      this.setState({ formValid: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Box
        as='form'
        onSubmit={this.handleSubmit}
        py={3}
        width={['90%', '65%', 1/2]}
        mx='auto'
        >
          <Prompt
            when={this.state.isBlocking}
            message={(location) => `The login form is being filled. Are you sure you want to leave the page?`}
          />
          <Flex mb={3}>
            <Box width={1/2} px={2}>
              <input type="text" onChange={this.handleChange} name="email" value={this.state.email} id="email" placeholder="Email" />
            </Box>
            <Box width={1/2} px={2}>
              <input type="password" onChange={this.handleChange} name="password" value={this.state.password} id="password" placeholder="Password" />
            </Box>
          </Flex>
          <Flex flexWrap='wrap'>
              <Button variant='primary' px={2} mr={2} type="submit" style={{cursor: "pointer"}}>
                Submit
              </Button>
          </Flex>
          {
            this.state.formValid ? null : (
              <Text fontSize={3} color='red' mt={2} mb={2}>
                Enter the registered email and make sure that the password is correct.
              </Text>
            )
          }
        </Box>
      </React.Fragment>
    );
  }
}

export default LogInForm;
