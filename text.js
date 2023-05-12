function myFunction() {
        document.getElementById("onmouse").innerHTML = "Học lập trình từ 10/10/2020";
}
function outFunction() {
        document.getElementById("onmouse").innerHTML = "";
}
function myFunction1() {
        document.getElementById("info").innerHTML = "<div class='alert alert-success'><a id='link' href='https://www.facebook.com/profile.php?id=100009762091194' target='_blank'> <b>Facebook: Minh Master</b> </a> </div>";
        let text = "My Facebook";
        let utterance = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance);
}
function myFunction2() {
        document.getElementById("info").innerHTML = "<div class='alert alert-success'><a id='link' href='https://www.youtube.com/channel/UCCVIeKy92nAU8cb3z9dfjOA' target='_blank'> <b>Youtube: Funny Channel</b> </a> </div>";
        let text = "My Youtube";
        let utterance = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance);
}
function myFunction3() {
        document.getElementById("info").innerHTML = "<div class='alert alert-success'><a id='link' href='https://vm.tiktok.com/ZMYvefdQG/' target='_blank'> <b>Tiktok: Minh Master</b> </a> </div>";
        let text = "My Tiktok";
        let utterance = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance);
}
function myFunction4() {
        document.getElementById("info").innerHTML = "<div class='alert alert-success'> <a id='link' href='https://github.com/MasterTLM' target='_blank'><b>GitHub: MasterTLM</b> </div>";
        let text = "My GitHub";
        let utterance = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(utterance);
}
// Lấy đối tượng
   const animation = document.querySelector(".animation");
// Kích hoạt animation
   animation.classList.add('animate__animated', 'animate__slideInTop');
   
// <a id='link' href='mailto:tranleminh106@gmail.com' target='_blank'>