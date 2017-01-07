describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 6", function() {
    expect(fizzBuzz(6)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 10", function() {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 30", function() {
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 60", function() {
    expect(fizzBuzz(60)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 300", function() {
    expect(fizzBuzz(300)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 126", function() {
    expect(fizzBuzz(126)).toBe('Fizz');
  });

  it("should return 11 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(11)).toBe(11);
  });

  it("should return 107 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(107)).toBe(107);
  });

});