function Person(name, age) {
  this.name = name;
  this.age = age;
  this.skill = function() {
    return `${this.name} is good at communication`;
  }
  
}

Person.prototype.walk = function() {
  return `${this.name} walked under the sidewalk`;
}

Person.prototype.religion = function() {
  return `${this.name} is Catholic`;
}

Person.prototype.country = function() {
  return `${this.name} lives in Brazil`;
}

const leonardo = new Person('Leonardo', 19);

//console.log(Person.prototype);
//console.log(leonardo.prototype);

Object.prototype;
leonardo.toString();
leonardo.isPrototypeOf();
leonardo.valueOf();

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
leonardo.walk();
leonardo.__proto__.walk();

const pais = 'Brasil';
const cidade = new String('São Carlos');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

const list = document.querySelectorAll('li');

const listArray1 = Array.prototype.slice.call(list);
const listArray2 = Array.from(list);

const Car = {
  marca: 'Honda',
  preco: 2000,
  walk() {
    return true;
  }
}

