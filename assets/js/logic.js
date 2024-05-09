let formEl = document.getElementById("submitting")
console.log(formEl)



formEl.addEventListener("submit", function(event){
event.preventDefault();
let username = document.getElementById("username").value
console.log(username)


})