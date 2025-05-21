//Sum of two Numbers//

function addition(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(addition(3, 5));

//converting minutes into seconds//

function convert(time) {
  let seconds = time * 60;
  return seconds;
}
console.log(convert(5));
console.log(convert(2));

//perimeter of rectangle//

function findPerimeter(length,width)
{
    let perimeter= 2*(length+width)
    return perimeter
}
console.log(findPerimeter(6,7));

//function that takes a number a its only arguement//

function IsNegative (number){
    if (number < 0 ) {
    return  true
    }else{
        return false
    }
}   
    console.log(IsNegative(-23))
    
    //can i drive//

    function canDrive(age,name){
        if (age >= 18) {
            return message = name + 'Not old enough to drive'
        }else{
            return message = name + "Is old eough to drive"
        }
        
    }
    console.log(canDrive(20,"lucy"))

    //largest number//

function findLargest(number1, number2, number3){
    let largestNumber;
    if (number1>number2 && number1>number3) {
        largestNumber = number1;
    } else if (number2>number1 && number2>number3) {
        largestNumber = number2;
    } else if (number3>number1 && number3>number2) {
        largestNumber = number3;
    } else {
        largestNumber ="all are equal";
    }

    return largestNumber
}
   console.log(findLargest(5,9,3))

   //BMI calculator//
function calculateBmi(weight, height){

    let BMI = weight / (height * height);
    if (weight < 18.5) {
        BMI = " underweight";
    } else if (weight >= 18.5 && weight <= 24.9) {
         BMI = "normalweight";
    } else if (weight >=25 && weight <= 29.9)  {
        BMI = "overweight" ;
    }else  {
        BMI =" Obese";
    }
       return BMI

}
        console.log(calculateBmi(68,1.75))

        //Greeting based on time//
        function greetUser(name, time){
            let greetings ;
            if (time < 5 && time > 11) {
                greetings = "Goodmorning";
                
            } else if (time > 12 && time < 17) {
                greetings = "Goodafternoon ";

            } else if (time > 18 && time > 21) {
                greetings = "Goodevening"
            }else {
                greetings ="Goodnight"
            }
            let message =`${greetings}, ${name}!`

              return message

            }

        console.log(greetUser( "lucy" ,22))

        
//Fizz buzz//

function fizzBuzzCheck(number) {
    let modular3 = number%3;
    let modular5 = number%5;
    let buzztyp;

    if (modular3 ==0 && modular5 == 0) {
        buzztyp =  "FizzBuzz"
        
    } else if (modular3 ==0)  {
        buzztyp = "Fizz"
    } else if  (modular5 ==0)  {
       buzztyp = "Buzz" 
    } else {
        buzztyp = number;

    }

    return buzztyp
} 
   
console.log(fizzBuzzCheck(8))

//perimeter 2//
function perimeter2(shape, num){
    let perimeter;
    if (shape === "c") {
        perimeter = 6.28*num
        
    } else {
        perimeter = num*4;
        
    }
    return perimeter;
}
      console.log(perimeter2("s" ,7))  
    
//sum of even Numbers

function sumEvenNumbers (n){
    let sum =0;
    for(let i =1; i<=n; i++){
        if (i%2 ==0) {
            sum =sum+i;
            
        }
    }
    return sum
}
    
console.log(sumEvenNumbers(10))

//Multiply By Itself//

function powerUp(num, times) {
    let power = num**times;
    return power;
    
}

console.log(powerUp(2,3))

//Factorial Calculator//

function factorial(n){
    let responce;
    if (n<0) {
        responce = "only positive numbers"
        
    } else if(n===0){
        responce = 1;
        
    } else{
        responce = n*factorial(n-1);
    }
    return responce
}

//Multiple Sum//

const Multiple = (n,divisor)=>{
    let sum =0;
    for(let i=; i<=n; i+=){
        if(i%divisor==0){
            sum =sum+i;
        }
    }
    return sum
}

//Sum of Digits//

function sumDigits(number){
    let sum=0;

    while(number){
        let first=number% 10;
        sum+=last;

        number= Math.floor(number/10);
    }
    return sum
}