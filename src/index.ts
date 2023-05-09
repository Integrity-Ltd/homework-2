abstract class Animal {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    abstract sound(): string;
    public saySomething(): string {
        return this.sound();
    }

    public get name(): string {
        return this._name;
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

class Parrot extends Animal {
    public sound(): string {
        return this.name.repeat(3);
    }
}

let animals: Animal[] = [new Dog("Pubi"), new Cat("Cirmi"), new Parrot("Pityuka")];
animals.forEach((animal) => {
    console.log(animal.name + " says " + animal.saySomething());
});