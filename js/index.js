const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");


function updateContentHour() {
    dataAtual.textContent = getCurrentDate();
    horaAtual.textContent = getCurrentTime();
}

// Retorna a hora atual (hora/minuto/segundo)
function getCurrentTime() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

// Retorna a data atual no padrão dd/mm/aaaa
function getCurrentDate() {
    const date = new Date(); 
    let mes = date.getMonth() + 1;
    return date.getDate() + "/" + mes + "/" +  date.getFullYear();
}

function getWeekDay() {
    // date.getDay()
    // 0 - 6
    // começando no domingo
    return "";
}

setInterval(updateContentHour, 1000);

console.log(getCurrentTime());
console.log(getCurrentDate());