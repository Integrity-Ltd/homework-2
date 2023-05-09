abstract class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract sound(): string;
    public saySomething(): string {
        return this.sound();
    }

    public getName(): string {
        return this.name;
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

let animals: Animal[] = [new Dog("Pubi"), new Cat("Cirmi")];
animals.forEach((animal) => {
    console.log(animal.getName() + " says " + animal.saySomething());
})