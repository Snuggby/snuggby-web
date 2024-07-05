import style from "@/styles/carousel.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Carousel = () => {
  var splide = new Splide(".splide", {
    direction: "ttb",
    height: "10rem",
    wheel: true,
  });

  const SlidingItems = [
    {
      id: 1,
      name: "Dog",
      url: "https://images.pexels.com/photos/17377596/pexels-photo-17377596/free-photo-of-pyramid-in-countryside-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 2,
      name: "Dog",
      url: "https://images.pexels.com/photos/17377596/pexels-photo-17377596/free-photo-of-pyramid-in-countryside-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 3,
      name: "Dog",
      url: "https://images.pexels.com/photos/17377596/pexels-photo-17377596/free-photo-of-pyramid-in-countryside-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 4,
      name: "Dog",
      url: "https://images.pexels.com/photos/17377596/pexels-photo-17377596/free-photo-of-pyramid-in-countryside-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      id: 5,
      name: "Dog",
      url: "https://images.pexels.com/photos/17377596/pexels-photo-17377596/free-photo-of-pyramid-in-countryside-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
  ];

  return (
    <>
      <div className={style.carouselContainer}>
        
      </div>
    </>
  );
};

export default Carousel;
