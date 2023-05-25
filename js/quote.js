//------------------------ Toas ---------------------------------------------
document.getElementById("toastbtn").onclick = function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl, { autohide: false })
    })
    toastList.forEach(toast => toast.show()) 
  }  

//---------------------GET API QOUTES-------------------------------
const button = document.querySelector("#toastbtn");
const p = document.querySelector("#quote");
const strong = document.querySelector("#author");
const API = "https://api.quotable.io/random";

button.addEventListener("click", () => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
        strong.innerText = "--- " + data.author + " ---";
        p.innerText = data.content;
    })
    .catch(error => {
        console.log(error);
        alert("Error fetching quote!");
    });
});