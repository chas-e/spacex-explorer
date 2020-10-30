import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARPRNMdJftbWo7UI_OK0IZ5qsdj-zE6Cs",
    authDomain: "spacex-explorer-0618.firebaseapp.com",
    databaseURL: "https://spacex-explorer-0618.firebaseio.com",
    projectId: "spacex-explorer-0618",
    storageBucket: "spacex-explorer-0618.appspot.com",
    messagingSenderId: "585264784460",
    appId: "1:585264784460:web:2395af0f222b70b45e00e9"
  };

  firebase.initializeApp(firebaseConfig);

  // local variables
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  // auth functions
function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut;
}
  
// export functions and observer
export { login, logout, auth };