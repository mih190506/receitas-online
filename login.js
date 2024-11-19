const emailespecifico = "emaildeexemplo@gmail.com";
const senhaespecifica = "12345678";

        function verificacao() {
            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;


            if (email == emailespecifico && senha == senhaespecifica) {
                window.location.href = "/home.html";
                console.log("Email e senha corretos");
            } else {
                console.log("Email ou senha incorretos");
            }
        }