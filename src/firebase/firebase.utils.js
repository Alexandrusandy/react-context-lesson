import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB90WFMtHCM1Er79q8jEA8i0xTf5nukbMU',
  authDomain: 'store-db-8f7ed.firebaseapp.com',
  projectId: 'store-db-8f7ed',
  storageBucket: 'store-db-8f7ed.appspot.com',
  messagingSenderId: '1055830092905',
  appId: '1:1055830092905:web:e2917a9fea94b1370a06f8',
  measurementId: 'G-X0EFHXE0TV',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
