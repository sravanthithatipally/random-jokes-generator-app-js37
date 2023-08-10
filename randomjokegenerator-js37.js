let btnele = document.getElementById("jokeBtn");
let joketextele = document.getElementById("jokeText");
let spinnerele = document.getElementById("spinner");

function togetrandomjokes() {
    let urlele = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET",
    };
    spinnerele.classList.remove("d-none");

    fetch(urlele, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerele.classList.add("d-none");

            let val = jsonData.value;
            joketextele.textContent = val;
        });
}
btnele.addEventListener("click", togetrandomjokes);