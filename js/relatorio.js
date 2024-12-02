
function getPontos() {
    fetch('http://localhost:3000/pontos')
    .then((requestData) => {
        console.log(requestData);
        return requestData.json();
    }
    )
    .then((data) => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })
}


getPontos();

//pontos = await getPontos();

//console.log(pontos);