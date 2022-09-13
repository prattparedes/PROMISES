// usar fetch trae una PROMISE
// fetch('https://jsonplaceholder.typicode.com/users/1')
const emailRef = document.querySelector(".email");
console.log(emailRef);

console.log("<------------------Trayendo data de fetch-------------------->");
// COMO DESBLOQUEAR LA DATA QUE HAY EN FETCH (2 métodos)

// 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
  //puedes ponerle cualquier nombre pero response es Best practise
  response.json().then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
  });
});

// Mejor forma de hacerlo que poniendo doble .then => .then
const phoneNum = document.querySelector('.phone')

fetch("https://jsonplaceholder.typicode.com/users/2")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    phoneNum.innerHTML = data.phone
  });   


// 2. Async/Await             (Best practise)

const mail = document.querySelector('.website')

async function main() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
   const data = await response.json()
   console.log(data)
   mail.innerHTML = data.website
}

main();
