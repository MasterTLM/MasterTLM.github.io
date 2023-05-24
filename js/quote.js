const button = document.querySelector("#new-quote");
const p = document.querySelector("#quote");
const API = "https://api.quotable.io/random";

button.addEventListener("click", () => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
        p.innerText = data.content;
    })
    .catch(error => {
        console.log(error);
        alert("Error fetching quote!");
    });
});