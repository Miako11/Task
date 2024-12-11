console.log("taskJS3\nTask1")

function number(m, n) {
    if (m == n) { return 0; }
    if (m > n) { return m }
    else return n;

}

console.log(number(3, 3));
console.log(number(2, 3));
console.log(number(4, 3));

console.log("____________\nTask2")

function sum(x, y) {
    jami = x + y;
    return jami;

}
console.log(sum(2, 3));

console.log("____________\nTask3")

function myName() {
    let firstName = "MARIAMI";
    let lastName = "IAKOBIDZE";
    console.log("First Name:", firstName, "Last Name:", lastName);
};
myName()


console.log("____________\nTask4")

function saxeli(saxeli, gvari) {
    let srulisaxeli = (saxeli + " " + gvari);
    return srulisaxeli;

}
let result = saxeli("Mariami", "Iakobidze");
console.log(result);

console.log("____________\nTask5")

function namravli(n) {
    let i = 1
    for (let index = 1; index <= n; index++) {
        i = i * index;
    }
    return i;

}
//რადგან "თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა", გავუტოლე n-ს 
console.log(namravli(3));

console.log("____________\nTask6")

let student = {
    firstName: "Mari",
    lastName: "Iakobidze",
    age: 27,
    scores: [4, 7, 5, 3, 2],
    fullName: function (firstName, lastName) {

        return firstName + " " + lastName;
    }
};
console.log(student.fullName(student.firstName, student.lastName));

console.log("____________\nTask7")
function qulebisjami(scores) {
    let jami = 0;
    for (let i = 0; i < scores.length; i++) {
        jami = jami + scores[i];

    } return jami;

}



console.log(qulebisjami(student.scores));

console.log("____________\nTask8")

console.log("saxeli: ", student.firstName, ",", "asaki: ", student.age);
//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ
//სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
