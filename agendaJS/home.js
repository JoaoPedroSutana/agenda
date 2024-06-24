function entrar() {
        let login = document.getElementById('login').value;
        let senha = document.getElementById('senha').value;
        if (login == "admin" && senha == "admin") {
                window.location.href = "index.html";
        }
        else if (login == "" && senha == "") {
                document.getElementById('login').classList.add("erro");
                document.getElementById('senha').classList.add("erro");
                document.getElementById('erro').innerHTML = "Campo não preenchido.";
        }
        else {
                document.getElementById('login').classList.add("erro");
                document.getElementById('senha').classList.add("erro");
                document.getElementById('erro').innerHTML = "Usuário ou senha invalida.";
        }
}