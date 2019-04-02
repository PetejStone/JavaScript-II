// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function grandparent() {

  const grandpa = "Grandpa Richard I";
  console.log(`My name is ${grandpa}`);
  //debugger;

  function father() {
    const father = "Richard II";
    console.log(`My name is ${father}, my father is ${grandpa}`);
  //  debugger;

    function grandson() {
      const grandson = "Richard III"
      console.log(`My name is ${grandson}, my father is ${father}, and my grandfather is ${grandpa}`);
    //  debugger;
    }// town

    grandson();
  }// city

  father();
}// kingdom

console.log(grandparent());
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks
for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  // Example usage: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2
  let count = 0;
  return () => ++count;
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
   let count = 0;
   return  {
     increment: ()=> ++count,
     decrement:()=> --count
   }
};
const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
