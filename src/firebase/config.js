import { initializeApp, getFirestore } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnr8eHqTi3HGDaewF6EoY1hT7Z2u2mh6M",
  authDomain: "miniblog-db13c.firebaseapp.com",
  projectId: "miniblog-db13c",
  storageBucket: "miniblog-db13c.appspot.com",
  messagingSenderId: "1063292839645",
  appId: "1:1063292839645:web:0ae504074f24017c989d34"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}