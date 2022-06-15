
const initState = {
  posts: []
}

const postReducer = (state = initState, action) => {

  if(action.type === 'ADD_POST') {
    let newPosts = [...state.posts, action.post];
    return {
      ...state,
      posts: newPosts
    }
  }

  else if(action.type === 'ADD_POST_ERR') {
    console.log('Add post error: ', action.err);
    return state;
  }

  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id;
    });

    return {
      ...state,
      posts: newPosts
    }
  }

  else if(action.type === 'DELETE_POST_ERR') {
    console.log('Delete post error: ', action.err);
    return state;
  }

  else {
    return state;
  }
}

export default postReducer;
