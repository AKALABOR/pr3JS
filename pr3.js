class User {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  
  display() {
    const info = `Користувач: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}`;
    console.log(info);
    alert(info);
  }
}

class Admin extends User {
  constructor(name, age, profession, role) {
    super(name, age, profession);
    this.role = role;
  }
  
  display() {
    const info = `Адміністратор: ${this.name}, Вік: ${this.age}, Професія: ${this.profession}, Роль: ${this.role}`;
    console.log(info);
    alert(info);
  }
}

let userName = prompt("Введіть ім'я користувача:");
let userAge = Number(prompt("Введіть вік користувача (число більше 0):"));
let userProf = prompt("Введіть професію:");

if (userAge > 0) {
  let isAdministrator = confirm("Цей користувач є адміністратором?");
  
  if (isAdministrator) {
    let userRole = prompt("Введіть роль адміністратора (наприклад, SuperAdmin):");
    let admin = new Admin(userName, userAge, userProf, userRole);
    admin.display();
  } else {
    let user = new User(userName, userAge, userProf);
    user.display();
  }
} else {
  alert("Помилка: Вік повинен бути числом і бути більшим за 0!");
  console.log("Введено некоректний вік.");
}

//////////////////////////////////////

class Animal {
  constructor(name, age) {
    this._name = name; 
    this._age = age;
  }

  get name() {
    return this._name;
  }

  makeSound() {
    console.log("Тварина видає звук");
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  Answer() {
    const message = `Собака ${this.name} породи ${this.breed}) `;
    console.log(message);
    alert(message);
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  Answer() {
    const message = `Кіт ${this.name} ${this.color}`;
    console.log(message);
    alert(message);
  }
}

let petType = prompt("Кого ви хочете створити? ('собака' або 'кіт')").toLowerCase();
let petName = prompt("Введіть ім'я улюбленця:");
let petAge = Number(prompt("Введіть вік улюбленця:"));

if (petType === "собака") {
  let petBreed = prompt("Введіть породу собаки:");
  let myDog = new Dog(petName, petAge, petBreed);
  myDog.Answer();
} else if (petType === "кіт") {
  let petColor = prompt("Введіть колір кота:");
  let myCat = new Cat(petName, petAge, petColor);
  myCat.Answer();
} else {
  alert("Невідомий тип тварини!");
}