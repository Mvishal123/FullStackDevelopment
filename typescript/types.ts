// types
type PersonType = {
    name: string,
    age: number
}

const greet = (person: PersonType): string => {
    return "Hey " + person.name + " You are " + person.age + " years old"
}

console.log(greet({
    name: "Vishal",
    age: 18
}))


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

type clientWithGender = GenderInterface & ClientInterface;

const fullDetails = (client: clientWithGender): object => {
    return client
}


console.log(fullDetails({
    clientName: "Vishal",
    age: 18,
    country: "India",
    sex: "Male",
    orientation: "straight",
    pronoun: "he/him"
}));
