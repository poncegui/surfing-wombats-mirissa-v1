import congreso from "../../Assets/images-sliderFood/gambas.jpg";
import proyectoCrea from  "../../Assets/images-sliderFood/morena-1.jpg";
import somosPortada from  "../../Assets/images-sliderFood/desert-1.jpg";

export const ApiCarousel = [
  {
    title: "",
    description:
      "",
    image: congreso,
    alt: "proyecto-crea-2023",
    url: "/proyecto-crea",
  },
  {
    title: "",
    description:
      "",
    image: congreso,
    url: "/somos-portada",
    alt: "somos-portada",
  },
  {
    title: "",
    description:
      "",
    image: congreso,
    alt: "un-día-en-afymos",
    url: "/congreso-empleo-apoyo",
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
