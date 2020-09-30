import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDweUwhrsw3VTicclz5_AfQ8aH2Gy3fMMU",
    authDomain: "pokecommerce-coder.firebaseapp.com",
    databaseURL: "https://pokecommerce-coder.firebaseio.com",
    projectId: "pokecommerce-coder",
    storageBucket: "pokecommerce-coder.appspot.com",
    messagingSenderId: "403721931969",
    appId: "1:403721931969:web:411cbcf355c282a207d840"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}