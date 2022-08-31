const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
    
    if (hora < 10) {
        horas.textContent = '0' + hora;
    }
    if (minuto < 10) {
        minutos.textContent = '0' + minuto;
    }
    if (segundo < 10) {
        segundos.textContent = '0' + segundo;
    }
});