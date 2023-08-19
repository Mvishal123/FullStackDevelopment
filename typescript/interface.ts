interface PersonState {
    name: string;
    age: number;
    key:number;
    greet(): string;
    getKey(): string
}

class Person implements PersonState{
    name: string;
    age: number;
    key:number;
    static index = 0

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        this.key = Person.index+=1
    }

    greet(): string{
        return "Hey " + this.name + ". You are " + this.age + "-years old"
        }

    getKey(): string {
        return "Hey " + this.name + ". Your key is " + this.key + "."
    }
}


const p1 = new Person("Vishal", 18)
console.log(p1.greet());
console.log(p1.getKey());
console.log("")

const p2 = new Person("Vaibhav", 14)
console.log(p2.greet());
console.log(p2.getKey());


console.log(p1.getKey());

