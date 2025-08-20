function Person(name, age) {
  this.name = name;
  this.age = age;
  this.skill = function() {
    return `${this.name} is good at communication`;
  }
  this.walk = function() {
    return `I walked over the object`;
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

console.log(Person.prototype);
console.log(leonardo.prototype);

Object.prototype;
leonardo.toString();
leonardo.isPrototypeOf();
leonardo.valueOf();

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
leonardo.walk();
leonardo.__proto__.walk();
