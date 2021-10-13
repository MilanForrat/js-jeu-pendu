let wordToFind = "hello";
let inputLetterValue;
let badLetters = [];
const containerHTML = document.getElementsByClassName('container');

function play(){
    
    loadHTML();

    listeners();
}
play();

function loadHTML(){
    // form creation
    let formHTML = document.createElement("FORM");
    formHTML.id = "letter-form";
    containerHTML[0].appendChild(formHTML);

    // label creation
    let labelHTML = document.createElement('label');
    labelHTML.label = "letter";
    labelHTML.innerHTML ="Entrez une lettre";
    formHTML.appendChild(labelHTML);

    // input creation
    let inputHTML = document.createElement('input');
    inputHTML.id = "letter";
    inputHTML.setAttribute("type", "text");
    inputHTML.setAttribute("maxlength", "1");
    inputHTML.required;
    formHTML.appendChild(inputHTML);

    // button submit creation
    let buttonHTML = document.createElement("button");
    buttonHTML.setAttribute("type", "submit");
    buttonHTML.id="letter-submit";
    buttonHTML.innerHTML="Essayer";
    formHTML.appendChild(buttonHTML);

    // title Letters tested
    let lettersTested = document.createElement('h2');
    lettersTested.innerHTML="Lettres déjà saisies";
    formHTML.appendChild(lettersTested);

    // ul creation
    let unorderedList = document.createElement("ul");
    unorderedList.id = "unorderedList";
    containerHTML[0].appendChild(unorderedList);
}

function listeners(){
    const submitLetter = document.getElementById('letter-form');
    const inputLetter = document.getElementById('letter');

    submitLetter.addEventListener("submit", (e) =>{
        e.preventDefault(); 
        inputLetterValue = inputLetter.value;
        console.log(inputLetterValue);
        compare(inputLetterValue)
    });
}

function compare(letterToTest){


    if(wordToFind.includes(letterToTest)){
        console.log("OUI !!");
    }
    else{
        badLetters.push(letterToTest);
        console.log("NON !");
        console.log(badLetters);
        let listElement = document.createElement('li');
        listElement.innerHTML=letterToTest;
        unorderedList.appendChild(listElement);
    }
}
