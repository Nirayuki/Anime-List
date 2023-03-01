
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

document.getElementById('senha').addEventListener("keypress", function(event){
   if(event.key === 'Enter'){
        event.preventDefault();
        signIn();
    }
})

document.getElementById('btn_entrar').onkeydown = function(e){
    console.log(e.code);
}

if(localStorage.getItem('uid') == null){
    if(!location.href === 'http://127.0.0.1:5500/'){
        window.location.replace('../index.html');
    }
}else{
    if(location.href === 'http://127.0.0.1:5500/'){
        window.location.replace('../pages/dashboard.html');
    }
}

if(document.getElementById('form').style.display !== "none"){
    console.log("caiu aqui")
    document.getElementById('register').style.setProperty('display', 'none');
}

const register = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const username = document.getElementById('username').value

    auth.createUserWithEmailAndPassword(email, senha)
    .then((res) => {

        db.collection("users").doc(res.user.uid).set({
            uid: res.user.uid,
            name: username,
            photo: res.user.photoURL,
            createAt: Date.now(),
        })
        .then(() => {
            localStorage.setItem('uid', res.user.uid);
            window.location.replace('../pages/dashboard.html');
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });

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


const login = () =>{
    document.getElementById('form').style.setProperty('display', 'none');
    document.getElementById('register').style.setProperty('display', 'block');
}

const backLogin = () =>{
    document.getElementById('form').style.setProperty('display', 'block');
    document.getElementById('register').style.setProperty('display', 'none');
}
