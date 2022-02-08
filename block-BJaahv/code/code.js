// # 🎖 Object Creation Patterns

// Create a object using the following patterns given below.

// ## Create in all 4 formats

// - [ ] Using function to create object

function createProject(name, id, numberOfProjects) {
    let project = {};
    project.name = name;
    project.id = id;
    project.numberOfProjects = numberOfProjects;
    project.getProjects = function() {
        return project.numberOfProjects;
    }
    project.changeName = function(newName) {
       return `Old username is ${project.name}`;
    }
    project.incrementProject = function(inc) {
        return project.numberOfProjects = project.numberOfProjects + inc;
    }
    project.decrementProject = function(inc) {
      return project.numberOfProjects = project.numberOfProjects - inc;
  }
  return project;
  }
  
  let project1 = createProject("Atom", 1, 12);
  let project2 = createProject("Epic", 2, 32);

// - [ ] Using Object.create (prototypal pattern)

let projectMethods = {
    getProjects : function() {
        return this.numberOfProjects;
    },
    changeName : function(newName) {
       return `Old username is ${this.name}`;
    },
    incrementProject : function(inc) {
        return this.numberOfProjects = this.numberOfProjects + inc;
    },
    decrementProject : function(inc) {
      return this.numberOfProjects = this.numberOfProjects - inc;
  }
}

function createProject(name, id, numberOfProjects) {
    let project = Object.create(projectMethods);
    project.name = name;
    project.id = id;
    project.numberOfProjects = numberOfProjects;
    return project;
  }

  let project1 = createProject("Atom", 1, 12);
  let project2 = createProject("Epic", 2, 32);

function CreateProject(name, id, numberOfProjects) {
    this.name = name;
    this.id = id;
    this.numberOfProjects = numberOfProjects;
  }

  CreateProject.prototype = {
    getProjects : function() {
        return this.numberOfProjects;
    },
    changeName : function(newName) {
       return `Old username is ${this.name}`;
    },
    incrementProject : function(inc) {
        return this.numberOfProjects = this.numberOfProjects + inc;
    },
    decrementProject : function(inc) {
      return this.numberOfProjects = this.numberOfProjects - inc;
  }
}

let project1 = new CreateProject("Atom", 1, 12);
let project2 = new CreateProject("Epic", 2, 32);

// - [ ] Using Pseudoclassical Way

function CreateProject(name, id, numberOfProjects) {
    this.name = name;
    this.id = id;
    this.numberOfProjects = numberOfProjects;
  }

  CreateProject.prototype = {
    getProjects : function() {
        return this.numberOfProjects;
    },
    changeName : function(newName) {
       return `Old username is ${this.name}`;
    },
    incrementProject : function(inc) {
        return this.numberOfProjects = this.numberOfProjects + inc;
    },
    decrementProject : function(inc) {
      return this.numberOfProjects = this.numberOfProjects - inc;
  }
}

// - [ ] Using Class

class CreateProject {
    constructor(name, id, numberOfProjects) {
    this.name = name;
    this.id = id;
    this.numberOfProjects = numberOfProjects;
    }
    getProjects() {
        return this.numberOfProjects;
    }
    changeName(newName) {
       return `Old username is ${this.name}`;
    }
    incrementProject(inc) {
        return this.numberOfProjects = this.numberOfProjects + inc;
    }
    decrementProject(inc) {
      return this.numberOfProjects = this.numberOfProjects - inc;
    }
}

let project1 = new CreateProject("Atom", 1, 12);
let project2 = new CreateProject("Epic", 2, 32);

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
 















