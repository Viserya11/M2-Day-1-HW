let spaghetti = 400;
let guanciale = 250;
let eggYolks = 6;
let pecorinoRomano = 50;
let pepper = 6;
let salt = 5;
let space = " ";

eggYolks = eggYolks * 18;

console.log("How to make the perfect Carbonara");
console.log("First, mix the egg yolks and cheese!");

let sauce = eggYolks + pecorinoRomano;

console.log("The amount of sauce you need in grams:" + space + sauce);
console.log("Then cook the pasta in water (don't forget to add some salt!).");

let doneSpaghetti = spaghetti * 1.8 + salt;

console.log(
  "The weight of the cooked spaghetti (in grams) should be" +
    space +
    doneSpaghetti
);
console.log("Fry the sliced guanciale in a nice big pan");
console.log(
  "Next, add the cooked spaghetti to the pan with the guanciale, then add the sauce and season it with pepper"
);

let carbonara = doneSpaghetti + guanciale + sauce + pepper;

console.log(
  "The amount of your really very awesomely tasty Carbonara in grams should be: ",
  carbonara
);
