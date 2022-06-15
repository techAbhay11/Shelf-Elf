
const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {

  if(action.type === 'LOGIN_SUCCESS') {
    console.log('Login success!');
    return {
      ...state,
      authError: null
    }
  }

  else if(action.type === 'LOGIN_ERR') {
    console.log('Login failed!');
    return {
      ...state,
      authError: action.err.message
    }
  }

  if(action.type === 'SIGNUP_SUCCESS') {
    console.log('Signup success!');
    return {
      ...state,
      authError: null
    }
  }

  else if(action.type === 'SIGNUP_ERR') {
    console.log('Signup failed!');
    return {
      ...state,
      authError: action.err.message
    }
  }

  else if(action.type === 'LOGOUT_SUCCESS') {
    console.log('Logout success!');
    return state;
  }

  else {
    return state;
  }
}

export default authReducer;
