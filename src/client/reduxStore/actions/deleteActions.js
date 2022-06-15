
export const deletePost = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firebase = getFirestore();
    firebase.collection('posts').doc(id).delete()
      .then(() => {
        dispatch({ type: 'DELETE_POST', id: id });
      }).catch((err) => {
        dispatch({ type: 'DELETE_POST_ERR', err: err });
      });
  }
}
