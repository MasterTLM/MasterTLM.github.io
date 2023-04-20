 function myFunction0() {
            document.getElementById("info").innerHTML = "<div class='alert alert-success'><a id='link' href='https://www.facebook.com/profile.php?id=100009762091194' target='_blank'> <b>Facebook: Minh Master</b> </a> </div>";
        }
        function myFunction1() {
            document.getElementById("info").innerHTML = "<div class='alert alert-success'> <b>Số điện thoại: 0767922149</b> </div>";
        }
        function myFunction2() {
            document.getElementById("info").innerHTML = "<div class='alert alert-success'> <b>E-Mail: tranleminh106@gmail.com</b> </div>";
        }
        function myFunction3() {
            document.getElementById("info").innerHTML = "<div class='alert alert-success'> <b>Chưa cập nhật!</b> </div>";
        }
        // Lấy đối tượng
        const animation = document.querySelector(".animation");
        // Kích hoạt animation
        animation.classList.add('animate__animated', 'animate__slideInTop');
