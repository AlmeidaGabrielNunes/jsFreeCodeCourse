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
const weapons = [
    {
    name: "stick",
    power: 5
    },
    {
        name:"dagger",
        power: 30
    },
    {
        name:"claw hammer",
        power:50
    },
    {
        name: "sword",
        power:100
    }
];
const locations = [   
    {
        name: "town square",
        "button text":["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"." 
    },
    {
        name: "store",
        "button text":["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text:"You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight Slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text:"You enter the cave. You see some monsters." 
    }
];
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
function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text; 
}

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}

function goCave(){
    update(locations[2]);
}

function fightDragon(){
    console.log("Fighting Dragon.");
}

function buyHealth() {
    if(gold>=10){  
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    }else{
        text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon(){
    if(gold>=30){
        gold -= 30;
        currentWeapon++;
    }
}

function fightSlime(){

}

function fightBeast(){

}
