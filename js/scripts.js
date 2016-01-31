function Pizza (pizzaSize, choice1, choice2,Cost) {
  this.pizzaSize = pizzaSize;
  this.choice1 = choice1;
  this.choice2 = choice2;
  // this.choice3 = choice3;
  // this.choice4 = choice4;
  this.Cost = 0;

};

Pizza.prototype.calculate = function() {
  if(this.pizzaSize === "small") {
       this.Cost += 8;
     }else if (this.pizzaSize === "mediam") {
       this.Cost += 10;
     }else if(this.pizzaSize === "large") {
       this.Cost += 12;
     }

  if(this.choice1 === "pepperoni") {
      this.Cost += 3;
    }else if (this.choice1 === "ham") {
      this.Cost += 1.75;
    }else if (this.choice1 === "bacon") {
      this.Cost += 2.25;
    }else if (this.choice === "no-meat") {
      this.Cost += 0;
    }

  if(this.choice2 === "black-olives") {
    this.Cost += 1.25;
  }else if (this.choice2 === "onion") {
    this.Cost += 1;
  }else if (this.choice2 === "tomatoes") {
    this.Cost += 1.25;
  }else if (this.choice2 === "no-veggies") {
    this.Cost += 0;
  }
  // if(this.choice4 === "black-olives") {
  //    this.Cost += .25;
  //  }else if (this.choice4 === "onion") {
  //    this.Cost += .50
  //  }else if(this.choice4 === "tomatoes") {
  //    this.Cost += 1;
  //  }else if (this.choice4 === "none") {
  //    this.Cost += 0;
  //  }
   return this.Cost / 2;
};

$(document).ready(function() {
  $("form#pizzas").submit(function(event) {
    event.preventDefault();

    var pizzasize = $("select#size").val();
    var pizzatop1 = $("select#meattoppings").val();
    var pizzatop2 = $("select#veggietoppings").val();

    var TotalPizzaPrice = new Pizza(pizzasize,pizzatop1,pizzatop2);
    TotalPizzaPrice.calculate();

    $("#order").text("The final cost for your purchase today is $ " + TotalPizzaPrice.calculate() + "!");

  });
});
