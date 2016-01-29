function Pizza (Kind,Topping, Size, Cost) {
  this.Kind = Kind;
  this.Topping = Topping;
  this.Size = Size;
  this.cost = [];
}

function Kind (type1, type2) {
  this.type1 = type1;
  this.type2 = type2;
}

function Topping (meattop, veggietop,maintop) {
  this.meattop = meattop;
  this.veggietop = veggietop;
  this.maintop = maintop;

}

function Size (sizechoice1, sizechoice2, sizechoice3) {
  this.sizechoice1 = sizechoice1;
  this.sizechoice2 = sizechoice2;
  this.sizechoice3 = sizechoice3;
}

function Cost (costdisplayed) {
  this.costdisplayed = costdisplayed;
  return this.costdisplayed;
}
Cost.prototype.costdisplayed = function (cost) {
  return this.Size + this.Kind + this.Topping;
}
// end of business logic: formula for pizza order should be equal to size + kind + topping depending on people's choices that can be picked from the drop down.
