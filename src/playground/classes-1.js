
class Person {
  constructor(name = 'Anon', age = '0') {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${ this.name }.`;
  }

  getDescription() {
    return `${ this.name } is ${ this.age } year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major = 'Undecided') {
    super(name, age);

    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (hasMajor()) {
      description += ` His major is ${ this.major }`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);

    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting  = super.getGreeting();

    return this.homeLocation ? greeting += ` I'm visiting from ${ this.homeLocation }` : greeting;
  }
}

const me = new Student('Steve', 47, 'Node Fan Boi');
console.log(me);
console.log(me.getDescription());

const other = new Student();
console.log(other);

const traveler = new Traveler('John', 37, 'Boise');
console.log(traveler);
console.log(traveler.getGreeting());

