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

function createAnimal(location, numberOfLegs) {
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}

function createDog(location, numberOfLegs, name, color) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, dogMethods);
    obj.name = name;
    obj.color = color;
    return obj;
}

Object.setPrototypeOf(dogMethods, animalMethods);

function createCat(location, numberOfLegs, name, colorOfEyes) {
    let obj = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(obj, catMethods);
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    return obj;
}

Object.setPrototypeOf(catMethods, animalMethods);

let Cow = createAnimal("Haryana", 4);
let dog = createDog("Japan", 6, "Hachi", "Brown");
let cat = createCat("Korea", 7, "Hachi", "Brown", "Lola", "Green");
