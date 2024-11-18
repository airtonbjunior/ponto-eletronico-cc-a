const btnCriaUsuario = document.getElementById("btn-cria-usuario");

btnCriaUsuario.addEventListener('click', () => {

    fetch('http://localhost:3000/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
            nome: "airton frontend",
            email: "airtonfront@gmail.com",
            senha: "oioioi",
            login: "airtonairton",
            permissao: "USER"
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