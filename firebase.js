import firebase from "./firebase"
import { getStorage } from "firebase/storage";
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
      apiKey: "AIzaSyDM8PzJRBvYdFWOLLL55g--I2rjNY5FaOA",
      authDomain: "disneyplus-clone-2eb8a.firebaseapp.com",
      projectId: "disneyplus-clone-2eb8a",
      storageBucket: "disneyplus-clone-2eb8a.appspot.com",
      messagingSenderId: "336199444576",
      appId: "1:336199444576:web:8cddc9f9637a5ff988fb05",
      measurementId: "G-CKLEGLM3LM"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export {db, app as firebase}
//     const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app(); 


   
export const storage = getStorage();
  
