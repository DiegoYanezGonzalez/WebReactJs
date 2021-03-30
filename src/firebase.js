import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD66A1y8wNNFuE2N_EUmkUa9A9WwPpaCPc",
    authDomain: "ecommerce-all-4b85f.firebaseapp.com",
    projectId: "ecommerce-all-4b85f",
    storageBucket: "ecommerce-all-4b85f.appspot.com",
    messagingSenderId: "355452312199",
    appId: "1:355452312199:web:5d3f8243ef416da3a57622"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}