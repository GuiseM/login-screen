document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('random').innerHTML = parseInt(Math.random() * 10000)
});

let loginO = document.getElementById('login');
if(loginO) {
    loginO.addEventListener('click', function(){ login()});
}
let reg = document.getElementById('reg')
if(reg) {
    reg.addEventListener('click', function(){ register()});
}

function login(){
    username = document.getElementById('nome').value
    password = document.getElementById('senha').value
    var user = JSON.parse(localStorage.getItem("user"));
    if (user.username == username || user.email == username && user.password == password) {
        document.getElementById('resultadologin').innerHTML = "Login efetuado com sucesso! Entrando..."
        document.getElementById('resultadologin').style.opacity = '100%'

        document.getElementById('everyonelogin').style.cursor = 'wait' 
        document.getElementById('login').style.cursor = 'wait' 
    
        setTimeout(function(){
            window.location.replace("user.html");
        }, 4000)
    } else {
        document.getElementById('resultadologin').innerHTML = "Usuário ou senha incorretos. Tente novamente"
        document.getElementById('resultadologin').style.opacity = '100%'
    }
}

function register(){
    var username = document.getElementById('nome').value
    var password = document.getElementById('senha').value
    var email = document.getElementById('email').value
    if (username == "" || password == "" || email == ""){
        document.getElementById('resultadoregister').innerHTML = "Você deve preencher todos os campos"
        document.getElementById('resultadoregister').style.opacity = '100%'
    } else {
    var user = {
        username: username,
        password: password,
        email: email
    }
    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById('resultadoregister').innerHTML = "Cadastrado com sucesso!"
    document.getElementById('resultadoregister').style.opacity = '100%'

    document.getElementById('everyoneregister').style.cursor = 'wait' 
    document.getElementById('reg').style.cursor = 'wait' 

    setTimeout(function(){
        window.location.replace("index.html");
    }, 2000)
}
}

// console.log(localStorage.getItem("user"));
// localStorage.clear();

