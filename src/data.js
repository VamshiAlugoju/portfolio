import sort from "./images/sort.png";
import weather from "./images/weather.jpg";
import trips from "./images/trips.jpg";
import port from "./images/portfolio.png"
const data = [
  {
    title: "Sorting-visualizer",
    about:
      "Made using React this app shows how different sorts work in more visual way.",
    link: "https://vamshialugoju.github.io/Sorting-Vis/",
    img: sort,
  },
  {
    title: "Places Gallery",
    about:
      "A FullStack web application made using React,node js,mongodb as backend , that saves users and their places in real time with auth feature.",
    link: "https://vamshialugoju.github.io/Travel-Planner/",
    img: trips,
  },
  {
    title: "Weather app ",
    about:
      "Using accuweather api this app brings the weather details of a particular city.Only 50 calls per day.",
    link: "https://vamshialugoju.github.io/weather/",
    img: weather,
  },
  {
    title: "My Portfolio",
    about: " A website that acts as visual representation of my resume.",
    link: "#",
    img: port,
  },
];
export default data;
