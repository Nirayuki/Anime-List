
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

const user = "";

if(localStorage.getItem('uid') == null){
    if(!location.href === 'http://127.0.0.1:5500/'){
        window.location.replace('../index.html');
    }
}else{
    if(location.href === 'http://127.0.0.1:5500/'){
        window.location.replace('../pages/dashboard.html');
    }
}

const register = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    auth.createUserWithEmailAndPassword(email, senha)
    .then((res) => {

        db.collection("users").doc(res.user.uid).set({
            uid: res.user.uid,
            name: res.user.displayName,
            photo: res.user.photoURL,
            createAt: Date.now(),
        })
        .then(() => {
            console.log("Documento criado com sucesso");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

        localStorage.setItem('uid', res.user.uid);

        window.location.replace('../pages/dashboard.html');

    })
    .catch((err) =>{
        console.log(err.message);
    })
}


const signIn = () =>{
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value


    auth.signInWithEmailAndPassword(email, senha)
    .then((res) =>{
        localStorage.setItem('uid', res.user.uid);
        window.location.replace('../pages/dashboard.html');
    })
    .catch((err) =>{
        console.log(err.message);
    })
}

