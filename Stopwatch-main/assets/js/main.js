function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(event) {
    const el = event.target;

    if (el.classList.contains('start')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('myStop')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }

    if (el.classList.contains('delete')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }
  });
}
relogio();
