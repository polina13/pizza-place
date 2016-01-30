describe('Pizza', function () {
  it ("will create pizza object by given properties", function() {
    var testPizza = new Pizza("small","pepperoni","black-olives");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.choice1).to.equal("pepperoni");
    expect(testPizza.choice2).to.equal("black-olives");
    // expect(testPizza.choice3).to.equal("onion");
    // expect(testPizza.choice4).to.equal("black-olives");
});
  it("will calculate the price of the pizza", function () {
    var testPizza = new Pizza("small","pepperoni","black-olives");
    expect(testPizza.calculate()).to.equal(12.25);
  });
});
