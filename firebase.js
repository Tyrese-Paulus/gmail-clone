import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZ_AcXbnQ3ZI7ykKMdmFDx00ZBRr9bvB0",
    authDomain: "clone-61199.firebaseapp.com",
    projectId: "clone-61199",
    storageBucket: "clone-61199.appspot.com",
    messagingSenderId: "837612944274",
    appId: "1:837612944274:web:872ff91609f62cd142df4b",
    measurementId: "G-J981DWXRRX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };