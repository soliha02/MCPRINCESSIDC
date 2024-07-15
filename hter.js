let login_input = document.getElementById('login')
let password_input = document.getElementById('password')
let btn = document.getElementById('btn')
let wrapper = document.getElementById('wrapper')

wrapper.style.display = 'none'

btn.addEventListener('click' , ()=>{
    if (login_input.value == 'login' && password_input.value == 'password'){
        alert('Saytga hush KELIBSIZ')
        wrapper.style.display = 'block'
    } else {
        alert('иди погуляй')
    }
    })