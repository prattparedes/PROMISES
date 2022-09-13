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


console.log('<----------------------------------------COMO CREAR UNA PROMESA------------------------------->')
// HOW TO CREATE A PROMISE

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {                  // Con esto hacemos que demore 2 segundos en aparecer el promise
            resolve('VIP')
        }, 2000);
    })
}

console.log(getSubscriptionStatus())

//calling the promise (Sale VIP)

// 1. Usando Then 1

getSubscriptionStatus().then((response) => console.log(response))


// 2. Usando Async/Await
async function funciónPromise() {
    console.log(await getSubscriptionStatus())
}

funciónPromise()

// Crear un promise para que aparezca la ultima clase y el ultimo dia de conexion y que demore 3 segundos en cargar

const lastClassRef = document.querySelector('.lastclass')
const lastConnectRef = document.querySelector('.lastconnect')

function getLastClass() {
    return new Promise ((resolve, reject) => {
        resolve('Flexbox Class')
    })
}

function getLastConnection() {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            resolve('12/09/2022')
        }, 3000)   
    })
}

//Calleando con then y otro con async/await

getLastClass().then((data) => {
    lastClassRef.innerHTML = data
})


async function getLastConnectionREF() {
    lastConnectRef.innerHTML = await getLastConnection()
}

getLastConnectionREF();