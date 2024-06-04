import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaPCmlVKVgj0m49cTykpdqc2Rc6mlIy-4",
  authDomain: "organic-food-3a04d.firebaseapp.com",
  projectId: "organic-food-3a04d",
  storageBucket: "organic-food-3a04d.appspot.com",
  messagingSenderId: "359767198872",
  appId: "1:359767198872:web:dc5e8cbb01e3128bb914ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
