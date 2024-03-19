let xp = 0;
let age = 32;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

//One method for finding specific elements in your HTML is using the querySelector() method. 
//The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <h1> element in your HTML, you would write:
//let h1 = document.querySelector("h1");
const button1  = document.querySelector("#button1"); //is a variable that is not going to be reassigned.
const button2  = document.querySelector("#button2");
const button3  = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText")
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
// initalize buttons
/*
button1 represents your first button element. These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.

You can access properties in JavaScript a couple of different ways. The first is with dot notation. 
Here is an example of using dot notation to set the onclick property of a button to a function reference:
button.onclick = myFunction;
EM portugues: 
button1 representa seu primeiro elemento de botão. Esses elementos têm uma propriedade especial chamada onclick, que você pode usar para determinar o que acontece quando alguém clica nesse botão.

Você pode acessar propriedades em JavaScript de algumas maneiras diferentes. A primeira é com a notação de ponto.
Aqui está um exemplo de uso da notação de ponto para definir a propriedade onclick de um botão como uma referência a uma função:
button.onclick = minhaFuncao;

*/

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore(){
    console.log("Going to store.");
}

function goCave(){
    console.log("Going to cave.");
}

function fightDragon(){
    console.log("Fighting Dragon.");
}
