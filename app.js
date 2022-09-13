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
        setTimeout (() => {
            resolve('Flexbox Class')
        }, 1500)
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


console.log('<----------------EJERCICIO PROMISES-------------------->')
/**
 * EJERCICIO DE PROMISES
 * 1. Crea una función llamada "GetVideo"
 * 2. Acepta un parámetro llamado 'SubscriptionStatus'
 * 3. Retorna una promesa dentro de la función que:
 *      - Si es "VIP" resolve("show video")
 *      - Si es "FREE" resolve("show trailer")
 *      - Si no es ninguno reject ("No video")
 * 4. console.log el resultado de getVideo () en main ()
 */

// Creando promise suscripción
function EstadoSuscripción (suscripción) {
    return new Promise ((resolve, reject) => {
        resolve (suscripción)
    })
}

let Suscripción_texto = document.querySelector('.suscripcion')

async function SuscripcionREF (suscripcion) {
    Suscripción_texto.innerHTML = await EstadoSuscripción(suscripcion)
}

SuscripcionREF('VIP')

//MI MANERA
function GetVideo(SubscriptionStatus) {
    if (SubscriptionStatus === 'VIP') {
        return new Promise ((resolve, reject) => {
            resolve ('show video')
        })
    } 
    else if (SubscriptionStatus === 'FREE') {
        return new Promise ((resolve, reject) => {
            resolve ('Update Subscription to Show Video')
        })
    }
    else {
        return new Promise ((resolve, reject) => {
            resolve ('No video')
        })
    }
}

async function main_1(argument1) {
    console.log(await GetVideo(argument1))
}

main_1('FREE')

//MANERA CORRECTA

function obtenerVideo(EstadoSuscripción) {
    return new Promise((resolve, reject) => {
        if (EstadoSuscripción === 'VIP') {
            resolve ('Mostrar Video')
        }
        else if (EstadoSuscripción === 'FREE') {
            resolve ('Mostrar Trailer')
        }
        else {
            reject ('No Video')
        }
    })

}

let videoREF = document.querySelector('.video')

async function Principal(Suscripción) {
    const estado = await EstadoSuscripción(Suscripción)
    Suscripción_texto.innerHTML = estado
    videoREF.innerHTML = 'Video'
    try{
        console.log(await obtenerVideo(estado))
    }
    catch (e) {
        console.log(e)
        videoREF.innerHTML = e
    }
}

Principal('FREE')


