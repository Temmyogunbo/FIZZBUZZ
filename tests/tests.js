

 var jasmine = require('jasmine');

  var myApp = require('../app/library.js');




describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 6", function() {
    expect(myApp.fizzBuzz(6)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 10", function() {
    expect(myApp.fizzBuzz(10)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 30", function() {
    expect(myApp.fizzBuzz(30)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 60", function() {
    expect(myApp.fizzBuzz(60)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 300", function() {
    expect(myApp.fizzBuzz(300)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 126", function() {
    expect(myApp.fizzBuzz(126)).toBe('Fizz');
  });

  it("should return 11 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(11)).toBe(11);
  });

  it("should return 107 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(107)).toBe(107);
  });

  it("it should return 'Fizz' for number divisible by -12", function(){
    expect(myApp.fizzBuzz(-12)).toBe('Fizz');
  });

  it("it should return 'Buzz' for number divisible by -50", function(){
    expect(myApp.fizzBuzz(-50)).toBe('Buzz');
  });

});