
export const logInUser = (cred) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      cred.email, cred.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERR', err: err });
    });
  }
}

export const signUpUser = (cred) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      cred.email, cred.password
    ).then((res) => {
      console.log(res);
      return firestore.collection('users').doc(res.user.uid).set({
        username: cred.username,
        email: cred.email,
        joined_date: new Date(),
      });
    }).then(() => {
      console.log("signup success");
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERR', err: err });
    });
  }
}

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGOUT_ERR', err: err });
    })
  }
}
