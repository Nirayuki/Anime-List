if(localStorage.getItem('uid') == null){
    if(!location.href === 'http://127.0.0.1:5500/'){
        window.location.replace('../index.html');
        console.log('tá caindo aqui')
    }
}

