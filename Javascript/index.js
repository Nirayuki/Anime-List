
const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyBmK5SwSajlH3usuyu5O-5hPpk02B_bPGw",
   authDomain: "disboard-51924.firebaseapp.com",
   projectId: "disboard-51924",
   storageBucket: "disboard-51924.appspot.com",
   messagingSenderId: "339827705754",
   appId: "1:339827705754:web:967de7bd0d58dd300d5c23",
   measurementId: "G-6NG93QXGVS"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    auth.createUserWithEmailAndPassword(email, senha)
    .then((res) => {
        console.log(res.user);
    })
    .catch((err) =>{
        console.log(err.message);
    })
}