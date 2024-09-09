const diaSemana = document.getElementById("dia-semana");
const dataAtual = document.getElementById("data-atual");
const horaAtual = document.getElementById("hora-atual");
const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");

btnRegistrarPonto.addEventListener("click", register);

diaSemana.textContent = getWeekDay();
dataAtual.textContent = getCurrentDate();


const dialogPonto = document.getElementById("dialog-ponto");

const dialogData = document.getElementById("dialog-data");
dialogData.textContent = getCurrentDate();

const dialogHora = document.getElementById("dialog-hora");
dialogHora.textContent = getCurrentTime();


const btnDialogEntrada = document.getElementById("btn-dialog-entrada");
btnDialogEntrada.addEventListener("click", () => {
    saveRegisterLocalStorage(JSON.stringify(getObjectRegister("entrada")));
});


const btnDialogSaida = document.getElementById("btn-dialog-saida");
btnDialogSaida.addEventListener("click", () => {
    saveRegisterLocalStorage(JSON.stringify(getObjectRegister("saida")));
});


function getObjectRegister(registerType) {
    
    ponto = {
        "date": getCurrentDate(),
        "time": getCurrentTime(),
        "location": getUserLocation(),
        "id": 1,
        "type": registerType
    }
    return ponto;
}

const btnDialogFechar = document.getElementById("dialog-fechar");
btnDialogFechar.addEventListener("click", () => {
    dialogPonto.close();
})

// salvar e recuperar um array de objetos ao invés de 1 objeto

function saveRegisterLocalStorage(register) {
    localStorage.setItem("register", register);
}

function getRegisterLocalStorage(key) {
    // retornar o valor correspondente à chave (key)
    // getItem(chave)
}

// O que é uma função assíncrona?
// O que é um objeto Javascript?
// O que é uma instância?
// O que é PROTOTYPE?
function getUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {   
        let userLocation = {
            "lat": position.coords.latitude,
            "long": position.coords.longitude
        }
        return userLocation;
    });
}



// Como garantir que uma função assíncrona já foi executada/processada?
// Possíveis soluções

//getUserLocation(functionCallback) {
    //navigator.geolocation.getCurrentPosition((position) => {
        //userLocation = {
            //OBJETO com lat e long
        //}
        //functionCallback(userLocation)
    //})
//}

// OU

//getUserLocation() {
    //return new Promise((suc, fail) => {
        //navigator.geolocation.getCurrentPosition()
    //})

    
//}
 


function register() {
    dialogPonto.showModal();
}


function updateContentHour() {
    horaAtual.textContent = getCurrentTime();
}

// Retorna a hora atual (hora/minuto/segundo)
function getCurrentTime() {
    const date = new Date();
    return String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0');
}

// Retorna a data atual no padrão dd/mm/aaaa
function getCurrentDate() {
    const date = new Date(); 
    let mes = date.getMonth() + 1;
    return String(date.getDate()).padStart(2, '0') + "/" + String(mes).padStart(2, '0') + "/" +  String(date.getFullYear()).padStart(2, '0');
}

function getWeekDay() {
    const date = new Date()
    const day = date.getDay()
    const daynames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return daynames[day]
}

updateContentHour();
setInterval(updateContentHour, 1000);

console.log(getCurrentTime());
console.log(getCurrentDate());
console.log(getWeekDay());