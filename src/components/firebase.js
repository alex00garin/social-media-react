import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaER4K6l8kWUn_bvpWKBkcQXDncSHoUSs",
  authDomain: "auth-form-7e20d.firebaseapp.com",
  projectId: "auth-form-7e20d",
  storageBucket: "auth-form-7e20d.appspot.com",
  messagingSenderId: "538811916372",
  appId: "1:538811916372:web:51edd7046bb25913df4dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;