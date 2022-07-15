//1 sumOfNumbers. Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
console.log("-----------Aufgabe 1----------------");
let sum = 0;
let array = [2, 3, 5];
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(`Aufgabe 1: ${sum}`);

//2 Hello Frien. Create an array filled with your friends' and family's names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
//[Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!"
//Bonus [Susan, Rezvane, Hadi] ➞ expected bonus output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array".
console.log("-----------Aufgabe 2----------------");

let friendName = ["Max", "Alex", "Michael"];
let familyName = ["Andrea", "Richard", "Georg"];
let answer = "";
for (let i = 0; i < friendName.length; i++) {
    answer = `Hello ${friendName[i]} !`;
}
console.log(`Aufgabe 2: ${answer}`);
//3 City Names. Create an array of city names. Loop through the array and add the city names to a string. Examples:
//[Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome".
console.log("-----------Aufgabe 3----------------");
