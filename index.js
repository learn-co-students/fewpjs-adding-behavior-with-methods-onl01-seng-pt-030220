// Your code here

class Cat {
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`;
    }
}

let sasha = new Cat('Sasha', 'Female')
sasha.speak()

class Dog {
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    }

    speak() {
    return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    }

    speak() {

        if (`${this.sex} = male`) {
            return `${this.name} says squawk!`
        } else {
            return `It's me! ${this.name} the parrot!`
        }
    }
}

bird2.speak()