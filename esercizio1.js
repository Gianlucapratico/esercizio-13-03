class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confrontoEta(other) {
    if (this.age > other.age) {
      return this.firstName + " è più vecchio di " + other.firstName;
    } else if (this.age < other.age) {
      return this.firstName + " è più giovane di " + other.firstName;
    }
  }
}

const user1 = new User("Marco", "Rossi", 35, "Bari");
const user2 = new User("Luca", "Bianchi", 25, "Bologna");
const user3 = new User("Marco", "verdi", 26, "Palermo");
const user4 = new User("Giovanni", "Azzurro", 15, "Reggio");
const user5 = new User("Ugo", "Boh", 22, "Napoli");
const user6 = new User("Leo", "Strani", 33, "Como");

console.log(user1.confrontoEta(user2));
console.log(user3.confrontoEta(user4));
console.log(user5.confrontoEta(user6));
console.log(user5.confrontoEta(user2));
