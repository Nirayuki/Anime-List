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


window.addEventListener("load", (e) => {

    console.log("Terminou de carregar tudo")
})


document.body.addEventListener("load", (e) => {
    console.log("body")
})

let uid = localStorage.getItem("uid");
var data = {};

var docRefHeader = db.collection("users").doc(uid);

docRefHeader.get()
.then((doc) => {
    if (doc.exists) {
        data = doc.data();
        console.log(data);
        if (window.location.pathname === "/pages/perfil.html") {
            data.photo !== null ? document.getElementById('photo').setAttribute('src', data.photo) : null
            document.getElementById('username').value = data.name;
        }
        data.photo !== null ? document.getElementById('photoURL').setAttribute('src', data.photo) : null



    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
})
    .finally(() => {
        document.getElementById('preloader').style.display = "none";
});


// ----------------------------------------------------------------- INDEX ------------------------------------------------------------------------

const register = () => {
    const email = document.getElementById('email_register').value
    const senha = document.getElementById('senha_register').value
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
        .catch((err) => {
            console.log(err.message);
        })
}


const signIn = () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value


    auth.signInWithEmailAndPassword(email, senha)
        .then((res) => {
            localStorage.setItem('uid', res.user.uid);
            window.location.replace('../pages/dashboard.html');
        })
        .catch((err) => {
            console.log(err.message);
        })
}

const signOut = () => {
    console.log("caindo aqui");
    localStorage.removeItem('uid');
    window.location.replace('../index.html');
}

// ----------------------------------------------------------------- HEADER ------------------------------------------------------------------------




// ----------------------------------------------------------------- PERFIL ------------------------------------------------------------------------



