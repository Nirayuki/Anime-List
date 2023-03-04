document.getElementById('senha').addEventListener("keypress", function(event){
   if(event.key === 'Enter'){
        event.preventDefault();
        signIn();
    }
})

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

const login = () =>{
    document.getElementById('form').style.setProperty('display', 'none');
    document.getElementById('register').style.setProperty('display', 'block');
}

const backLogin = () =>{
    document.getElementById('form').style.setProperty('display', 'block');
    document.getElementById('register').style.setProperty('display', 'none');
}
