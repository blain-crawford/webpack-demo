const myName = (name) => {
  return `Hello!  My name is ${name}!`;
};

class Gams {
  constructor(name) {
    this.name = name;
  }

  iAm() {
    return`I am ${this.name}!`
  }
};

export {myName, Gams};