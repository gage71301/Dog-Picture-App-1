
function getDogPhoto() {
    let userInput = document.getElementById("amountOfDogs").value;
    let urlTemplate = `https://dog.ceo/api/breeds/image/random/${userInput}`
    console.log(userInput);

    if (!userInput === userInput){
        userInput = 3;
    }

    fetch(`${urlTemplate}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        //.catch(error => alert("an error has occured"))
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        getDogPhoto();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});