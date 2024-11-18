const btnCriaUsuario = document.getElementById("btn-cria-usuario");

btnCriaUsuario.addEventListener('click', () => {


    fetch('http://localhost:3000/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            login: document.getElementById("login").value,
            permissao: document.getElementById("permissao").value
            }
        )
    })
    .then(()=>{
        console.log("oi");
    })
    .catch(error => {
        console.log(error);
    });
});