// const product = [ {name:"A",price:200,discount:10},{name:"B",price:257,discount:8},{name:"C",price:3537,discount:35},{name:"D",price:10000,discount:20}]
// const A = product.filter(p => p.discount > 10);
// console.log(product)
// product.push({name:"E", price:500, discount:5});
// const result = product.slice(1, 3);
// console.log(product)


// const college ={
//        name: "SA engineering",
//        rating: 0,
//        branch:["cse","eee","ece","cil","csbs"] ,
//        Address:"chennai-poonamallee"
// }
// console.log(college)

// console.log(college.rating);
// console.log(college.branch[0]);
// console.log(college.rating);


// const marks={
//     maths:90,
//     physics:80,     
//     chemistry:85
// };

// console.log(Object.keys(marks));
// console.log(Object.values(marks));
// console.log(Object.entries(marks));
//  for (const[key, value] of Object.entries(marks)) {
//     console.log(`${key}: ${value}`);
//  }

// const user={
//     name:"John",
//     age:30,};

//     console.log(Object.assign({},user,{age:35}));
//     user.age=40;
//     console.log(Object.freeze(user));
    //fromEntries (Object.fromEntries([["name","John"],["age",30]])
    //stringify(JSON.stringify(user))
    //parse(JSON.parse('{"x:1"}'))


    // ternary
    // marks>=50?"pass":"fail"

    // Short-circuit AND
    // isLoogedIn && "Welcome back!"

    // optional chaining
    // user.address?.city

    // nullish coalescing
    // city??"Unknown"      watch out: 0??5 gives 0, not 5
  
    // async function fetchData() {
    //     try {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const users = await res.json();
    //         console.log(users[0].name);
    //     } catch (error) {
    //         console.log("Error fetching data:", error);
    //     }
    // }

    // fetchData();

//     const arr = [120,60,899]
//     const result = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(result);

// const marks=[
//    { name : "kiran",mark:20 },
//     { name :" kavia",mark: 47 },
//      { name :  "jai",mark:78 },
// ]
// let result = marks.find((a)=>a.name === "kiran") ?? "not found";
// console.log(result)

// function makeGreeter(greeting){
//        return function(name){
//               return greeting+" "+name;
//        };

// }
// console.log(makeGreeter("hi")("anto"))

async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const users = await res.json();

       let a = users.map(user => user.name)
        console.log(a);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchData();
