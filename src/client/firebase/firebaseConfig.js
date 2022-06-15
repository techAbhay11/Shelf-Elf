
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import "firebase/analytics";


var firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true});
// firebase.analytics();

export default firebase;
