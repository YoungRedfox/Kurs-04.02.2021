
// let liczby = [1, 2, 3, 4, 5, 6, 7, 0]
// let wiekszeOd4 = liczby.filter(item => {
//     if (item === 0 || item > 4) {
//         return item
//     }
// })

// const przedzialOd2Do4 =liczby.filter(item => item > 1 && item < 5)

// console.log(przedzialOd2Do4)

// liczby.reverse()
// console.log(liczby)

// liczby.pop()
// console.log(liczby)

// liczby.forEach(item => console.log(item))

// const mniejszeOd4 = liczby.filter(item => item < 4).map(item => item * 2)

// console.log(mniejszeOd4)

// const sth = liczby.map(item => item + 2)

// console.log(sth)

// const six = liczby.find(item => item > 4)

// console.log(six)

// console.log(wiekszeOd4)

// const more8 = liczby.every(item => item > 8)

// console.log(more8)

// const more3 = liczby.some(item => item > 3)

// console.log(more3)

// function displayNumber() {

//     for (i = 0; i < liczby.length; i++) {
        
//         if(liczby[i] > 4) {

//             wiekszeOd4.push(liczby[i])

//         }

//     }

//     console.log(wiekszeOd4)

// }

// displayNumber()

// const name = "Łukasz"

// const arrLukasz = name.slice(",")

// console.log(arrLukasz)

const passengers = [
    {
    name : "Jan",
    isDog :  true,
    sex :  "men"   
    },
    {
    name : "Halina",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Janusz",
    isDog :  false,
    sex : "men"   
    },
    {
    name : "Agnieszka",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Paweł",
    isDog :  true,
    sex :  "men"   
    },
    {
    name : "Ewelina",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Ireneusz",
    isDog :  false,
    sex : "men"   
    },
    {
    name : "Daria",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Jonasz",
    isDog :  true,
    sex :  "men"   
    },
    {
    name : "Karolinaq",
    isDog :  false,
    sex : "women"   
    },
    {
    name : "Judasz",
    isDog :  false,
    sex : "men"   
    },
    {
    name : "Beata",
    isDog :  false,
    sex : "women"   
    },
]

const passengersHaveDog = passengers.filter(item => item.isDog === false )

passengersHaveDog.forEach(item => console.log(item.name))

const passengersHaventDogAndWomen = passengers.some(item => item.isDog === false && item.sex === "women")

// if (passengersHaventDogAndWomen) {
//     alert("Jest kobieta")
// }

// const allPassengersHasDog = passengers.map(item => {
//     if (item.isDog === false) {
//         item.isDog = "tekst" 
//     }
//     return item
// })

function changeTile(){
document.title = "nowy"

console.log(document.title)
}

console.log(window)

let paragrafId = document.getElementById( "paragraf2" )

console.log(paragrafId)

let paragrafClass = document.getElementsByClassName("paragraf")

console.log("paragrafClass", paragrafClass)

paragrafId.style.color = "red"

let divId = document.getElementById( "divId" )

let divChildren = divId.children

for(let i = 0; i < divChildren.length; i++){
    divChildren[i].innerHTML = '<button  onclick="changeTile()">Button</button>'
}

console.log(divId.children)

function createInput(){

const createElement = document.createElement("input")

createElement.value = 1

createElement.setAttribute("class", "nazwaClassy")

let divId = document.getElementById( "divId" )

divId.appendChild(createElement)

console.log(createElement)
}

// for(i = 0; i < passengers.length; i++) {

//     const createP = document.createElement("p")

//     createP.innerText = passengers[i].name

//     let divId = document.getElementById( "divId" )

//     divId.appendChild(createP)

// }

for(i = 0; i < passengers.length; i++) {

    let gridPassengers = document.getElementById( "gridPassengers" )

    const createDivPassenger = document.createElement("div")

    createDivPassenger.setAttribute("class", "divPassenger")

    createDivPassenger.innerText += "Name: "
    createDivPassenger.innerText += passengers[i].name

    createDivPassenger.innerText += "Sex: "
    createDivPassenger.innerText += passengers[i].sex

    createDivPassenger.innerText += "Have dog: "
    createDivPassenger.innerText += passengers[i].isDog
   
    gridPassengers.appendChild(createDivPassenger)

}