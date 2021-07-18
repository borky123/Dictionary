let addButton = document.getElementById('addButton');
let searchButton = document.getElementById('searchButton');
let resultContainer = document.getElementById('result');
let wordsInput = document.getElementById('wordsInput');
let wordsDescription = document.getElementById('wordsDescription');
let wordsSearch = document.getElementById('wordsSearch');
let wordsList = [];
let descriptionList = [];
let lastIndex = 0;

addButton.addEventListener('click', function() {
    if (wordsInput.value != "" && wordsDescription.value != "") {
        wordsList[lastIndex] = wordsInput.value;
        descriptionList[lastIndex++] = wordsDescription.value;
        wordsInput.value = "";
        wordsDescription.value = "";
    } else {
        alert("Please provide a word and a description for it.")
    }
})
searchButton.addEventListener('click', function() {
    if (wordsSearch.value != "") {
        if (wordsList[wordsList.indexOf(wordsSearch.value)] != undefined) {
            resultContainer.textContent = wordsList[wordsList.indexOf(wordsSearch.value)] + " : " + descriptionList[wordsList.indexOf(wordsSearch.value)];
            resultContainer.style.visibility = "visible";
        } else {
            resultContainer.textContent = "Sorry, this word is not a part of your dictionary!"
            resultContainer.style.visibility = "visible";
        }
    }
    wordsSearch.value = "";
})