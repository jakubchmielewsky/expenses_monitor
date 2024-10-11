import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFm71s6mS0IGDpZXq0RW8olrtdbZAZVfQ",
    authDomain: "expenses-monitor-54cee.firebaseapp.com",
    projectId: "expenses-monitor-54cee",
    storageBucket: "expenses-monitor-54cee.appspot.com",
    messagingSenderId: "358137739425",
    appId: "1:358137739425:web:dbe7f5df371105071a58e0",
    measurementId: "G-NV5PQ8S4TQ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth};