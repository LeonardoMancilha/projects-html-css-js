const iniciar = document.querySelector('.iniciar');
const stop = document.querySelector('.stop');
const proximaMusica = document.querySelector('.proxima-musica');
const heartIcon = document.querySelector('.fa-heart');
const rotateImage = document.querySelector('.rotate-image');
const audioElement = document.querySelector('#audio');
const nomeMusica = document.querySelector('.nome-musica');
const nomeCantor = document.querySelector('.nome-cantor');
const musicaAnterior = document.querySelector('.musica-anterior');
const volumeBar = document.querySelector('#volume-bar');

let musicas = [
  {
    nomeMusica: 'Perfect',
    nomeCantor: 'Ed Sheeran',
    src: 'music/Ed_Sheeran-Perfect.mp3',
    imagem: 'images/perfect.jpeg',
  },
  {
    nomeMusica: 'Hero',
    nomeCantor: 'Alan Walker',
    src: 'music/Alan-Walker-Hero.mp3',
    imagem: 'images/alan-walker-hero.jpg',
  },
  {
    nomeMusica: 'Without Me',
    nomeCantor: 'Hasley',
    src: 'music/Halsey-Without-Me.mp3',
    imagem: 'images/halsey.jpg',
  }
];

let indiceMusicaAtual = 0;
let rotateIntervalId;
let tempoReproducao = 0;
let tempoPausado = 0;
let musicaAtual;
let musicaInicio = 0;
let volumeAnterior = 1; // Volume anteriormente selecionado
let musicasFavoritadas = [];

function reproduzirMusica() {
  pararMusica();

  musicaAtual = musicas[indiceMusicaAtual];
  //letraAtual = musicaAtual.lyrics;
  audioElement.src = musicaAtual.src;
  rotateImage.src = musicaAtual.imagem;
  nomeMusica.textContent = musicaAtual.nomeMusica;
  nomeCantor.textContent = musicaAtual.nomeCantor;

  //letraProgresso = letraPosicao; // Define a posição da letra atual como a posição pausada ou 0
  verificarSeMusicaFavoritada();

  iniciar.style.display = 'none';
  stop.style.display = 'inline';
  musicaAnterior.style.display = 'inline-block';

  rotateImage.classList.add('girando');
  rotateImage.classList.remove('stop-rotation');
  rotacionarImagem(); // Iniciar a rotação da imagem
  audioElement.addEventListener("timeupdate", atualizarProgresso); // Atualizar o progresso da música

  audioElement.currentTime = tempoReproducao;

  audioElement.play();
}

window.addEventListener("load", () => {
  musicaAtual = musicas[indiceMusicaAtual];
});

heartIcon.addEventListener("click", function () {
  if (musicasFavoritadas?.includes(musicaAtual.nomeMusica)) {
    musicasFavoritadas = musicasFavoritadas.filter(
      (musica) => musica !== musicaAtual.nomeMusica
    );
    heartIcon.style.color = "#fff";
    return;
  } else {
    heartIcon.style.color = "red";
    musicasFavoritadas.push(musicaAtual.nomeMusica);
  }
});

function verificarSeMusicaFavoritada() {
  if (musicasFavoritadas?.includes(musicaAtual.nomeMusica)) {
    heartIcon.style.color = "red";
  } else {
    heartIcon.style.background = "transparent";
  }
}

function atualizarProgresso() {
  if (!audioElement.paused) {
    tempoPausado = audioElement.currentTime;
  }
}

function pararMusica() {
  clearInterval(rotateIntervalId);
  rotateIntervalId = null;

  tempoReproducao = audioElement.currentTime;

  audioElement.pause();
  audioElement.removeEventListener('timeupdate', atualizarProgresso); // Remover o evento de atualização do progresso da música

  iniciar.style.display = 'inline';
  stop.style.display = 'none';
  proximaMusica.style.display = 'inline';
  musicaAnterior.style.display = 'inline';

  rotateImage.classList.remove('girando');
  rotateImage.classList.add('stop-rotation');
}

function rotacionarImagem() {
  let rotation = 0;
  rotateIntervalId = setInterval(function() {
  rotation += 1;
  rotateImage.style.transform = `rotate(${rotation}deg)`;
  }, 10);
}

function resetarMusica() {
  audioElement.currentTime = 0;
  tempoReproducao = 0;
  tempoPausado = 0;
}

iniciar.addEventListener('click', function() {
  if (audioElement.paused) {
    reproduzirMusica();
  } else {
    pararMusica();
  }
});

stop.addEventListener('click', function() {
  pararMusica();
});

proximaMusica.addEventListener('click',function () {
  resetarMusica();
  pararMusica();
  heartIcon.style.color = '#fff';
  indiceMusicaAtual++;

  if (indiceMusicaAtual >= musicas.length) {
    indiceMusicaAtual = 0;
  }

  tempoReproducao = 0;
  reproduzirMusica();
});

musicaAnterior.addEventListener('click', function() {
  resetarMusica();
  pararMusica();
  indiceMusicaAtual--;

  if (indiceMusicaAtual < 0) {
    indiceMusicaAtual = musicas.length - 1;
  }
  reproduzirMusica();
});

volumeBar.addEventListener('input', function() {
  const volume = parseFloat(volumeBar.value);
  audioElement.volume = volume;

  if (volume === 0) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
});

function aumentarVolume() {
  if (volumeBar.value < 1) {
    volumeBar.value = parseFloat(volumeBar.value) + 0.1;
    audioElement.volume = volumeBar.value;
  }
}

function diminuirVolume() {
  if (volumeBar.value > 0) {
    volumeBar.value = parseFloat(volumeBar.value) - 0.1;
    audioElement.volume = volumeBar.value;
  }
}

document.addEventListener('keydown', function(event) {
  // Verificar se a tecla pressionada é a tecla "m"
  if (event.key === 'm' || event.key === 'M') {
    // Verificar se o volume atual é 0
    if (audioElement.volume === 0) {
      // Restaurar o volume anteriormente selecionado
      audioElement.volume = volumeAnterior;
      volumeBar.value = volumeAnterior;
    } else {
      // Armazenar o volume atual como volume anterior
      volumeAnterior = audioElement.volume;

      // Definir o volume como 0
      audioElement.volume = 0;
      volumeBar.value = 0;
    }

    // Verificar se o volume está em 0 e pausar o áudio
    if (audioElement.volume === 0) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'k' || event.key === 'K') {
    if (audioElement.paused) {
      reproduzirMusica();
    } else {
      pararMusica();
    }
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    resetarMusica();
    pararMusica();
    indiceMusicaAtual++;

  if (indiceMusicaAtual >= musicas.length) {
      indiceMusicaAtual = 0;
  }

  reproduzirMusica();
  } else if (event.key === 'ArrowLeft') {
    // Lógica para voltar para a música anterior
    pararMusica();
    resetarMusica();
    indiceMusicaAtual--;

    if (indiceMusicaAtual < 0) {
      indiceMusicaAtual = musicas.length - 1;
    }
    reproduzirMusica();
  }
});
