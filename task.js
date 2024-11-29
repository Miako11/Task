console.log("Task1-----------")

for (let i = 2; i < 8; i++) {
    console.log(i);

};

console.log("Task2-----------")

for (let i = 5; i < 35; i = i + 4) {
    console.log(i);

};

console.log("Task3-----------");


namravli = 1
for (let index = 3; index < 8; index++) {
    namravli = index * namravli;
    console.log(namravli);

}
console.log("Totalnamravli=", namravli)



console.log("Task4-----------");

let person = {

    firstName: "Mariami",
    lastName: "Iakobidze",
    age: 27,
};
console.log(person.firstName, person.lastName);

console.log("Task5-----------");

console.log(person);
//და მხოლოდ values
console.log(person.firstName, person.lastName, person.age);


console.log("Task6-----------");

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

console.log("Task7-----------");

fruits.unshift("Grapes");
fruits.push("Pineapples");
console.log(fruits);

console.log("Task8-----------");


let sum = 0
for (let index = 1; index < 34; index++) {
    console.log("sum", sum, index);
    sum = sum + index;
}
console.log("TotalSum=", sum)
