// Your code here
//For an instance of Cat, speak returns "name says meow!"
class Cat {
    constructor(name) {
        this.name = name
    }
    speak() {
        return `${this.name} says meow!`
    }
}
// For an instance of Dog, speak returns "name says woof!"
class Dog {
    constructor(name) {
        this.name = name
    }
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, male) {
        this.name = name
        this.male = male
    }
    speak() {
        return this.male == "male" ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`;
    }

}