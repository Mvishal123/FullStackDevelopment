var greet = function (person) {
    return "Hey " + person.name + " You are " + person.age + " years old";
};
console.log(greet({
    name: "Vishal",
    age: 18
}));
var fullDetails = function (client) {
    return client;
};
console.log(fullDetails({
    clientName: "Vishal",
    age: 18,
    country: "India",
    sex: "Male",
    orientation: "straight",
    pronoun: "he/him"
}));
