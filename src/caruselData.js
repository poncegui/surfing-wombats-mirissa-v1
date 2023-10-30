import drink1 from "./Assets/images-drinks/pinneaple-spice.jpeg";
import drink2 from "./Assets/images-drinks/exotic-cosmopolitan.jpeg";
import drink3 from "./Assets/images-drinks/cocktail-3.png";
import drink4 from "./Assets/images-drinks/cocktail-4.jpg";
import food1 from "./Assets/images-food/dish-1.jpeg";
import food3 from "./Assets/images-food/prawns.jpeg";
import food4 from "./Assets/images-food/menu-kids.png";
import food5 from "./Assets/images-food/pizzas-mar.png";
import food6 from "./Assets/images-food/hummus.jpg";
import food7 from "./Assets/images-food/hand-made-pizza.jpg";

export const drinks = [
  {
    id: 1,
    cover: drink1,
    title: "Pinneaple Spice",
  },
  {
    id: 2,
    cover: drink2,
    title: "Exotic Cosmopolitan",
  },
  {
    id: 3,
    cover: drink3,
    title: "Tropical Sangria",
  },
  {
    id: 4,
    cover: drink4,
    title: "The Expresso Martini",
  }
]

export const food = [
  {
    id: 1,
    cover: food1,
    title: "Burrata",
  },
  {
    id: 2,
    cover:food4,
    title: "Pasta",
    subtitle: "xxxxx",
  },
  {
    id: 3,
    cover: food3,
    title: "Romescu Prawns",
    subtitle: "xxxxx",
  },
  {
    id: 4,
    cover: food7,
    title: "Real Pizza",
    subtitle: "xxxxx",
  },
  {
    id: 5,
    cover:food5,
    title: "Pizza",
    subtitle: "xxxxx",
  },
  {
    id: 6,
    cover:food6,
    title: "Pan Fried Fish W Gnocchi & Hummus Dip (Vegan)",
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
