const button = document.querySelector("#new-quote");
const p = document.querySelector("#quote");
const API = "http://api.quotable.io/random";

button.addEventListener("click", () =>{
    fetch(API).then(res => res.json()).then(data =>{
        p.innerText = data.content; 
    }).catch(() => alert("Error fetching quote!"));
});