// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`


// - Pseudoclassical Pattern


function CreateAnimal(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

function CreateDog(location, numberOfLegs, name, color) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;
}

function CreateCat(location, numberOfLegs, name, colorOfEyes) {
    CreateAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
 
}

CreateAnimal.prototype = {
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

CreateDog.prototype = function() {
    function bark() {
        alert(`I am ${this.name} and I can bark`);
    }
    function changeName(newName) {
        return this.name = newName;
    }
    function changeColor(newColor) {
        return this.color = newColor;
    }
    function summary() {
        return `I am ${this.name} and I am of ${this.color}. I can also bark.`;
    }
};


CreateCat.prototype = function() {
    function meow()  {
    alert(`I am ${this.name} and I can meow meow 😹`);
    }
    function changeName(newName)  {
        return this.name = newName;
    }
    function changeColorOfEyes(newColor)  {
        return this.color = newColor;
    }
    function summary()  {
        return `I am ${this.name} and the color of my eyes are${this.colorOfEyes}. I can also meow meow 😹.`;
    }
};

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);
Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);


let Cow = new CreateAnimal("Haryana", 4);
let dog = new CreateDog("Japan", 6, "Hachi", "Brown");
let cat = new CreateCat("Korea", 7, "Hachi", "Brown", "Lola", "Green");


// - Class Pattern

class CreateAnimal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        return console.log(`I live in ${this.location} and I can eat.`);
    }
    changeLocation(newLocation) {
        return this.location = newLocation;
    }
    summary() {
        return `I live in ${this.location} and I have ${this.numberOfLegs} number of legs`;
    }
}

class CreateDog {
    constructor(location, numberOfLegs, name, color) {
        CreateAnimal.apply(this, [location, numberOfLegs]);
        this.name = name;
        this.color = color;
    }    
    bark() {
        alert(`I am ${this.name} and I can bark`);
    }
    changeName(newName) {
        return this.name = newName;
    }
    changeColor(newColor) {
        return this.color = newColor;
    }
    summary() {
        return `I am ${this.name} and I am of ${this.color}. I can also bark.`;
    }
}
class CreateCat {
    constructor(location, numberOfLegs, name, colorOfEyes) {
        CreateAnimal.apply(this, [location, numberOfLegs]);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
        meow()  {
        alert(`I am ${this.name} and I can meow meow 😹`);
        }
        changeName(newName)  {
            return this.name = newName;
        }
        changeColorOfEyes(newColor)  {
            return this.color = newColor;
        }
        summary()  {
            return `I am ${this.name} and the color of my eyes are${this.colorOfEyes}. I can also meow meow 😹.`;
        }
}