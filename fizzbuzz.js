function fizzBuzz(n){
  if(n% 3=== 0 && n% 5===0){ // n divides 3 and 5
    return "fizzBuzz"
  }
  else if(n % 3 === 0){     //n divides 3 only
    return "fizz"
  }
  else if(n % 5 === 0){   //n divides 5 only
    return "Buzz"
  }
  else                  //n is indivisible by 3 and5
  return n

}

