let randomWord = "yo";
let inputLetterValue;
let testedLetters = [];
let userWord = [];
const containerHTML = document.getElementById('container');

function play(randomWord){
    
    loadHTML(randomWord);

    listeners();

    assignIndexUserWord(randomWord);
}


function loadHTML(randomWord){

    // img creation
    let hangmanImg = document.createElement('img');
    hangmanImg.setAttribute('src', "./images/game-start-standard.png");
    hangmanImg.setAttribute("alt", "Structure du jeu du pendu (sol et potence bois)");
    hangmanImg.id = "hangman-img";
    containerHTML.appendChild(hangmanImg);

    // word to find creation
    let findWordList = document.createElement('ul');
    findWordList.id = "word-to-find";
    containerHTML.appendChild(findWordList);

    // li creation depending on number of caracters in word to find
    for(let i = 0; i < randomWord.length; i++){
        let letterSpacing = randomWord.substring(i,i+1);
        let letterSpacingLi = document.createElement('li');
        letterSpacingLi.innerHTML=letterSpacing;
        findWordList.appendChild(letterSpacingLi);
    }

    // form creation
    let formHTML = document.createElement("FORM");
    formHTML.id = "letter-form";
    containerHTML.appendChild(formHTML);

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
    containerHTML.appendChild(unorderedList);
}

function listeners(){
    const submitLetter = document.getElementById('letter-form');
    const inputLetter = document.getElementById('letter');

    submitLetter.addEventListener("submit", (e) =>{
        e.preventDefault(); 
        inputLetterValue = inputLetter.value;
        compare(inputLetterValue)
    });
}

function assignIndexUserWord(randomWord){
    for(let i = 0; i < randomWord.length; i++){
        userWord.push("?");
    }
}

function compare(letterToTest){

    let inputHTML = document.getElementById('letter');
    let liElement = document.getElementsByTagName('li');

    if(randomWord.includes(letterToTest)){
        pushLettersTested(letterToTest);
        showCharacters(letterToTest);
    }
    else{
        if(testedLetters==true){
            // vous avez déjà saisi 
            inputHTML.value ="";
            inputHTML.placeholder = "Vous avez déjà saisi la lettre ",letterToTest;
        }
        else{
            pushLettersTested(letterToTest);
            console.log("bouuuh");
        }
    }

    function pushLettersTested(letter){
        if(testedLetters.includes(letterToTest)){
            return true;
        }else{
            testedLetters.push(letter);
            let listElement = document.createElement('li');
            listElement.innerHTML=letter;
            unorderedList.appendChild(listElement);
            return false;
        }
    }

    function showCharacters(letter){
        for(let i = 0; i < randomWord.length; i++) {
            if(randomWord[i] == letter){
                liElement[i].style.visibility = "visible";
                userWord[i] = letter;
            }
        }
        checkWin();
    }

    function checkWin(){
        let stringUserWord = userWord.toString();
        let newStrUserWord = stringUserWord.replace(/,/g,'');
        if(randomWord == newStrUserWord){
            console.log("wiiiiiiiiiiiiin !!!! enfin ");
        }
    }
}
play(randomWord);