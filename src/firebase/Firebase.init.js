
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.config";
const initializeFirebaseApp = () => {

 
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
}
export default initializeFirebaseApp


// Initialize Firebase