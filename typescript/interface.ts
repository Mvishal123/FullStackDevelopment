// Using interface in a class


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



// interface in a function
interface customerDetails {
    username: string;
    password: string;
    type: "user" | "admin"
}

const display = (user: customerDetails): string => {
    const {username, password, type} = user;
    return `Hey ${username} you are an ${type}`
}

console.log(display({username: "Vishal", password: "123", type: "user"}));


// Using types
interface GenderInterface{
    sex:string;
    orientation: string;
    pronoun: string;
}

interface ClientInterface {
    clientName: string;
    age: number;
    country: string;
}

type clientWithgender = ClientInterface & GenderInterface

const clientDetails = (client: clientWithgender): object => {
    return client
}

console.log(clientDetails({
    clientName: "Vishal",
    age: 18,
    country: "India",
    sex: "male",
    orientation: "straight",
    pronoun: "he/him"
}))

// using interface in other interfaces
interface ClientWithGender{
    clientDetails: ClientInterface;
    clientGender: GenderInterface;
}

const clientDetails2 = (client: ClientWithGender): object[] => {
    return [client.clientDetails, client.clientGender]
}

console.log(clientDetails2({
        clientDetails: {
            clientName: "Vishal",
            age: 18,
            country: "India"
        },
        clientGender: {
            sex: "male",
            orientation: "straight",
            pronoun: "he/him"
        }
}))
