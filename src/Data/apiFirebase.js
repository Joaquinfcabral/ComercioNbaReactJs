import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5nsOrpiic1QyGh_zF6TwkeY_gXyBIY8Q",
  authDomain: "comercio-nba.firebaseapp.com",
  projectId: "comercio-nba",
  storageBucket: "comercio-nba.appspot.com",
  messagingSenderId: "884390900827",
  appId: "1:884390900827:web:6f90909b43a00c72be3b7e"
};


const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app); 
