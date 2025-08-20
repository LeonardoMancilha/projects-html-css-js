function Car(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

//const honda = new Car('Honda', 5000);
const fiat = new Car('Fiat', 3000);

function Car2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Car2('Honda', 2000);

function DOM(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativo = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new DOM('li');
const ul = new DOM('ul');

const liLastChild = new DOM('li:last-child');
liLastChild.ativo('ativo');

