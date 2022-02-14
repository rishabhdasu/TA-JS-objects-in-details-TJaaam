class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        console.log(`${this.name} can eat`);
    }
    sleep() {
        console.log(`${this.name} can sleep`);
    }
    repeat() {
        console.log(`${this.name} can walk`);
    }
}
 class Player extends Person {
     constructor(sportsName) {
         super();
         this.sportsName = sportsName;
     }
        play() {
            console.log(`${this.name} plays ${this.sportsName}`);
        }
 }

 class Teacher extends Person {
     constructor(instituteName) {
         super();
         this.instituteName = instituteName;
     }
     teach() {
        console.log(`${this.instituteName} can teach`);
     }
 }

 class Artist extends Person {
     constructor(kind) {
         super();
         this.kind = kind;
     }
     createArt() {
        console.log(`${this.kind} is kind`);
     }
 }
 class Cricketer extends Player {
     construct(teamName) {
         super();
         this.teamName = teamName;
     }
     playCricket() {
        console.log(`${this.teamName} is Team`);
     }
 }

