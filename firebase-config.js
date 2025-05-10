const firebaseConfig = {
    apiKey: "AIzaSyC-random-example-key1234567890",
    authDomain: "clinic-system-demo.firebaseapp.com",
    projectId: "clinic-system-demo",
    storageBucket: "clinic-system-demo.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:exampleappid123456"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  