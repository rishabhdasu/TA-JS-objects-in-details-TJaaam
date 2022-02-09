// Convert the below requirements into inheritance using prototypal patters.

// Animal
// Properties:

// location
// numberOfLegs
// Methods

// eat() - log a message saying I live in ${location} and I can eat

// changeLocation(newLocation) - accepts location and updates the location of the animal

// summary() - returns I live in ${location} and I have ${numberOfLegs}


// Dog
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// name
// color
// Methods:

// bark() - alerts a message saying I am ${name} and I can bark 🐶
// changeName(newName) - accepts the name property and updates the name of the dog
// changeColor(newColor) - accepts the new color and updates the color of the dog
// summary() - returns I am ${name} and I am of ${color} color. I can also bark


// Cat
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// name
// colorOfEyes
// Methods:

// meow() - alerts a message saying I am ${name} and I can do mewo meow 😹

// changeName(newName) - accepts the name property and updates the name of the dog

// changeColorOfEyes(newColor) - accepts the new color and updates the color of the dog

// summary() - returns I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow

let animalMethods = {
    eat : function() {
        return console.log(`I live in ${this.location} and I can eat.`);
    },
    changeLocation : function(newLocation) {
        return this.location = newLocation;
    },
    summary : function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} number of legs`;
    }
};

let dogMethods = {
    bark : function() {
        alert(`I am ${this.name} and I can bark`);
    },
    changeName : function(newName) {
        return this.name = newName;
    },
    changeColor : function(newColor) {
        return this.color = newColor;
    },
    summary : function() {
        return `I am ${this.name} and I am of ${this.color}. I can also bark.`;
    }
};


let catMethods = {
    meow : function() {
        alert(`I am ${this.name} and I can meow meow 😹`);
    },
    changeName : function(newName) {
        return this.name = newName;
    },
    changeColorOfEyes : function(newColor) {
        return this.color = newColor;
    },
    summary : function() {
        return `I am ${this.name} and the color of my eyes are${this.colorOfEyes}. I can also meow meow 😹.`;
    }
};

Object.setPrototypeOf(dogMethods, animalMethods);
Object.setPrototypeOf(catMethods, animalMethods);

function createAnimal(location, numberOfLegs) {
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

function createDog(name, color) {
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}

function createCat(name, colorOfEyes) {
    let cat = Object.create(dogMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}


let animal = createAnimal("Argentina", 4);
let dog = createDog("Hachi", "Brown");
let cat = createCat("Lola", "Green");
