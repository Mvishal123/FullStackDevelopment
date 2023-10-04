class Player {
  constructor(name, age, username){
  this.name = name;
  this.age = age;
  this.username = username;
  };
  ageChecker(){
    if(this.age < 18){
      console.log("Access denied");
    } else{
      console.log("Enjoy the game");
    }
  }

  introduce(){
    console.log(`Hey I am ${this.username} and I am ${this.age} years old`);
  };
};


class Wizard extends Player{
  constructor(name, age, username){
    super(name, age, username);

  }
  wizardPowers(){
    console.log("please level up to unlock wizard powers");
  };
}



let p1 = new Player("Vishal", 18, "ghOstOP");
p1.introduce();

let wizard1 = new Wizard("Vaibhav", 12, "lalala");
wizard1.wizardPowers();