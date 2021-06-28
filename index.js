const readline = require("readline-sync");

console.log('Please enter the operator of your choice: ');
const response = readline.prompt();
console.log("How many numbers would you like to " + response + "? ")
const stringNums = readline.prompt();
const numbers = new Array(parseInt(stringNums))
const args = []

for (let i = 0; i < numbers.length; i++) {
    console.log(`number ${i+1}: `)
    const arg = readline.prompt();
    args.push(arg)
}
let answer = numbers[0]
for (let i = 0; i<args.length; i++) {
    switch (response) {
        case '+':
            answer += numbers[i]
            break;
        case '-':
            answer -= numbers[i]
            break;
        case '/':
            answer /= numbers[i]
            break;
        case '*':
            answer *= numbers[i]
            break;
} 
}
console.log(`The answer is ${answer}.`);