function add(a: number, b: number): number {
    return a + b;
}

let sum = add(5, 3);
console.log(`The sum of 5 and 3 is: ${sum}`);
console.log("Addition completed successfully.");

let x = 6;
x += x++ + ++x;
console.log(`The value of x after operations is: ${x}`);

let y = 5;
y -= y-- - --y;
console.log(`The value of y after operations is: ${y}`);
console.log(8 > 8);
console.log(8 > 5 ? "8 is greater than 5" : "5 is greater than or equal to 8");
console.log("This is the end of the intro script.");