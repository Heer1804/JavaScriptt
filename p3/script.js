// question 1
let count = 1

do {
  console.log(count)
  count++
} while (count <= 5)

for (let count1 = 1; count1 <= 5; count1++) {
  console.log(count1)
}

let count2 = 1

while (count2 <= 5) {
  console.log(count2)
  count2++
}

// question 2

let input
do {
  input = prompt("Enter a numbe greater than 10")
} while (input <= 10)

console.log("you have entered a number greater than 10 " + input)


let input1

for (; ;) {
  input1 = prompt("Enter a number greater than 10")
  if (input1 > 10) {
    break
  }
}

console.log("You have entered a number greater than 10: " + input1)


let input3 = 0

while (input3 <= 10) {
  input3 = prompt("Enter a number greater than 10")
  console.log(input3)
}

console.log("You have entered a number greater than 10: " + input3)


//question 3

let sum = 0
let num

do {
  num = parseInt(prompt("enter a number (0 to stop)"))
  sum += num
} while (num != 0)

console.log(sum)

let sum1 = 0
let num1 = 0

while (num1 != 1) {
  sum1 += num1
  num1 = parseInt(prompt("Enter a number (1 to stop)"))
}

console.log(sum1)

let sum2 = 0
let num2 = 0

for (let num2 = parseInt(prompt("Enter a number (1 to stop)")); num2 !== 1; num2 = parseInt(prompt("Enter a number (1 to stop)"))) {
  sum2 += num2;
}

console.log(sum2);

//question 4

let number = 0

do {
  if (number % 2 === 0) {
    console.log(number)
  }
  number++

} while (number <= 10)

let number1 = 0

for (let number1 = 0; number1 <= 10; number1++) {
  if (number1 % 2 === 0) {
    console.log(number1);
  }
}

let num3 = 0
while (num3 <= 10) {
  if (num3 % 2 === 0) {
    console.log(num3);
  }
  num3++;
}

//question 5

let coin
let countFlip = 0

do {
  countFlip++
  coin = Math.random() < 0.5 ? 'tails' : 'heads'
  console.log('Flipping coin it lands on : ' + coin)
} while (coin === 'heads')

console.log("It took " + countFlip + " flips to get heads")

let coin1
let countFlip1 = 0
while (coin1 !== 'heads') {
  countFlip1++
  coin1 = Math.random() < 0.5 ? 'tails' : 'heads'
  console.log('Flipping coin it lands on : ' + coin1)
}

console.log("It took " + countFlip1 + " flips to get heads")

let coin2
let countFlip2 = 0

for (; coin2 != 'heads'; coin2 = Math.random() < 0.5 ? 'tails' : 'heads') {
  countFlip2++
  console.log('Flipping coin it lands on : ' + coin2)
}

console.log("\nIt took " + countFlip2 + "flips to get heads")



