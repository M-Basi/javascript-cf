let [a,b] = [1,2]    //Destructuring assignment

console.log("a: ", a)
console.log("b: ", b)

let [c, d] = [10,20]        //Destructuring assignment
[c,d] = [d,c]               //Destructuring assignment and Swap


const user = {
    id: 1,
    firstname: "Alice",
    lastname: "W."
}

let {firstname, lastname} = user
//let {firstname: first, lastname: last} = user
console.log("firstname: " + firstname)
console.log("Lastname: " + lastname)