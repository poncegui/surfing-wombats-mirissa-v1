import drink1 from "./Assets/images-drinks/cocktail-1.png";
import drink2 from "./Assets/images-drinks/cocktail-2.png";
import drink3 from "./Assets/images-drinks/cocktail-3.png";
import drink4 from "./Assets/images-drinks/cocktail-4.jpg";
import drink5 from "./Assets/images-drinks/cocktail-5.jpg";
import food1 from "./Assets/images-food/dish-1.jpeg";
import food2 from "./Assets/images-food/food-sea.png";
import food3 from "./Assets/images-food/langostinos.png";
import food4 from "./Assets/images-food/menu-kids.png";
import food5 from "./Assets/images-food/pizzas-mar.png";

export const drinks = [
  {
    id: 1,
    cover: drink1,
    title: "The Espresso Martini",
  },
  {
    id: 2,
    cover: drink2,
    title: "Mojito",
  },
  {
    id: 3,
    cover: drink3,
    title: "Pineapple Spice",
  },
  {
    id: 4,
    cover:drink4,
    title: "Exotic Cosmopolitan",
  },
  {
    id: 5,
    cover: drink5,
    title: "Gin & Tonic",

  },

  {
    id: 5,
    cover:drink5,
    title: "Arrack Libre",
  },
]

export const food = [
  {
    id: 1,
    cover: food1,
    title: "Burrata",
  },
  {
    id: 2,
    cover: food2,
    title: "Pasta",
    subtitle: "xxxxx",
  },
  {
    id: 3,
    cover:food4,
    title: "Pasta",
    subtitle: "xxxxx",
  },
  {
    id: 4,
    cover: food3,
    title: "Romescu Prawns",
    subtitle: "xxxxx",
  },
  {
    id: 5,
    cover:food5,
    title: "Pizza",
    subtitle: "xxxxx",
  },
]

export const buttonsMenu = [
  {
    id:1,
    title: "Menu",
    button:  "Menu",
    url:'/food-menu',
  },
  {
    id:2,
    title: "Kids Menu",
    button: "Kids Menu",
    url:'/kids-menu',
  },
];

export const buttonsDrinks = [
  {
    id:1,
    title: "Drinks & Cocktails",
    button: "Drinks & Cocktails",
    url:'/drinks&cocktails',
  },
];
