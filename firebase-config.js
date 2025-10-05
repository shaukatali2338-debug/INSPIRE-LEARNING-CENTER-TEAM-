// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaYVACDboNPh64VzLoTuVubq5sN2b467o",
  authDomain: "admin-app-11b96.firebaseapp.com",
  databaseURL: "https://admin-app-11b96-default-rtdb.firebaseio.com",
  projectId: "admin-app-11b96",
  storageBucket: "admin-app-11b96.firebasestorage.app",
  messagingSenderId: "22654847083",
  appId: "1:22654847083:web:1878c0f3b69bae1a1a892e",
  measurementId: "G-MK2D03GMZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };