let firebaseConfig = {
    apiKey: "AIzaSyBMaSUD2a2LSgs7u9e9nNiTsxV_s8EHJ3I",
    authDomain: "blogging-website-ffe58.firebaseapp.com",
    projectId: "blogging-website-ffe58",
    storageBucket: "blogging-website-ffe58.appspot.com",
    messagingSenderId: "194664372501",
    appId: "1:194664372501:web:92449c42c00e228dde311c",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()