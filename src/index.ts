abstract class Animal {
    abstract sound(): string;
    public saySomething(): string {
        return this.sound();
    }
}

class Dog extends Animal {
    public sound(): string {
        return "Woff";
    }
}

class Cat extends Animal {
    public sound(): string {
        return "Miau";
    }
}

let animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => {
    console.log(animal.saySomething());
})