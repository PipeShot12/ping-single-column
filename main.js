const form = document.getElementsByTagName('form')[0].addEventListener('submit',(e)=>e.preventDefault())

function validate(form){
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regex.test(form.email.value)){
       document.querySelector('.input').style = 'border:2px solid var(--Light-Red)'
       document.querySelector('.error-text').innerHTML = 'Please provied a valid email address'
       return false
    }
    document.querySelector('.input').style = ''
    document.querySelector('.error-text').innerHTML= ''
    return true
}