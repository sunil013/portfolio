import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCgJ35J4ZsC1zLJMBT1paBgfEDa36NPq1I",
  authDomain: "portfolio-a1513.firebaseapp.com",
  projectId: "portfolio-a1513",
  storageBucket: "portfolio-a1513.appspot.com",
  messagingSenderId: "160729620778",
  appId: "1:160729620778:web:5139104dd0be5a5360fe53",
  measurementId: "G-V8RQGNJ1V6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logEvent = (event, params) => {
  firebaseLogEvent(analytics, event, params);
};
