class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    
    }

    describe() {
        return `${this.name} is of the species ${this.species} and is ${this.age} years old.`;
    }
}

const animal = new Animal("LVPVS", "CANIS LVPVS", 2);
console.log("name:", animal.name);
console.log("species", animal.species);
console.log("age:", animal.age);
console.log(animal.describe());