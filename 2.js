//swapping

a=10
b=20

console.log("Before swapping")
console.log("a : ",a)
console.log("b : ",b)

let temp=a
a=b
b=temp

console.log("After swapping")
console.log("a : ",a)
console.log("b : ",b)

//grade

let marks = 75

function calGrade(marks)
{
    let grade
    if (marks >=90 ) {
        grade="A"
    }else if(marks>=80){
        grade="B"
    }
    else if(marks>=70){
        grade= "C"
    }
     else if(marks>=60){
        grade="D"
     }
     else{
         grade="F"
     }
      return grade;

}

console.log("\nThe grade is: "+calGrade(marks))

//calculate bill
function calBill(amount,taxRate)
{
    let tax = amount * (taxRate/100)
    let totalAmount = amount + tax 
    return totalAmount
}

let amount = 100
let taxRate = 10 // 10%
console.log("\nthe bill is ",calBill(amount,taxRate))