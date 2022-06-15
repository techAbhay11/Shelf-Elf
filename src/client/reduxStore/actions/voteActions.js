
export const upvotePost = (post) => {
  return (dispatch, getState, { getFirestore }) => {
    const firebase = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firebase.collection('posts').add({
      ...post,
      posted_by: {
        username: profile.username,
        user_id: userId,
        user_link: 'old.reddit.com'
      },
      timestamp: new Date(),
      upvotes: 1
    }).then(() => {
      dispatch({ type: 'ADD_POST', post: post });
    }).catch((err) => {
      dispatch({ type: 'ADD_POST_ERR', err: err });
    });
  }
}
