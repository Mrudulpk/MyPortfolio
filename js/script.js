var nameerror=document.getElementById('name-error')
var emailerror=document.getElementById('email-error')
var subjecterror=document.getElementById('subject-error')
var messageerror=document.getElementById('message-error')

function validateName(){
    var name=document.getElementById('name').value
    if(name.length==0){
        nameerror.innerHTML = 'Name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = 'Write full name' 
        return false
    }
    nameerror.innerHTML='<i class="bi bi-check-circle-fill"></i>'
    return true
}