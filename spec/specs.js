// describe("Pizza", function () {
//     it("will create a pizza object based on given properties", function () {
//     var newPizza = new Pizza ("meat", "small", "pepperoni");
//     expect(newPizza.pizzaKind).to.equal("meat");
//     expect(newPizza.pizzaSize).to.equal("small");
//     expect(newPizza.Toppings).to.eql([]);
//   });
// });


describe("PizzaOrder", function (){

  describe("Kind", function() {
    it("will display the kinds of pizzas based on given properties", function() {
      var listKind = new Kind("meat", "veggies");
      expect(listKind.type1).to.equal("meat");
      expect(listKind.type2).to.equal("veggies");
    })
  });

  describe("Topping", function() {
    it("will display list of different toppings with given properties", function () {
      var listTopping = new Topping("pepperoni", "veggetables", "cheese");
      expect(listTopping.meattop).to.equal("pepperoni");
      expect(listTopping.veggietop).to.equal("veggetables");
      expect(listTopping.maintop).to.equal("cheese")
    });
  });

  describe("Size", function () {
    it("will display the size of the pizza picked by the user", function () {
      var listSize = new Size("small", "mediam", "large");
      expect(listSize.sizechoice1).to.equal("small");
      expect(listSize.sizechoice2).to.equal("mediam");
      expect(listSize.sizechoice3).to.equal("large");    });
  });

  describe ("Cost", function () {
    it("will determine the cost of a pizza based on the kind, size and topping the user picks", function (){
      var pizzacost = new Cost ("meat", "pepperoni", "small");
      expect(pizzacost.costdisplayed()).to.equal(12);
    });
  });

});
