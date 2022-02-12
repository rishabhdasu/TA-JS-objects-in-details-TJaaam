class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {

    }
    sleep() {

    }
    repeat() {

    }
}
 class Player {
     constructor(sportsName) {
         this.sportsName = sportsName;
     }
        play() {

        }
 }

 class Teacher {
     constructor(instituteName) {
         this.instituteName = instituteName;
     }
     teach() {

     }
 }

 class Artist {
     constructor(kind) {
         this.kind = kind;
     }
     createArt() {

     }
 }
 class Cricketer {
     construct(teamName) {
         this.teamName = teamName;
     }
     playCricket() {

     }
 }

 Object.setPrototypeOf(Player, Person);
 Object.setPrototypeOf(Artist, Person);
 Object.setPrototypeOf(Teacher, Person);
 Object.setPrototypeOf(Cricketer, Player);