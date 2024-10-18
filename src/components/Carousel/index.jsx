import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const carouselData = [
  {
    title: "Responsive Website",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem a.",
    image: "/images/pictures/carousel (1).jpg",
  },

  {
    title: "HTML & CSS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem a.",
    image: "/images/pictures/carousel (2).jpg",
  },

  {
    title: "React & Tailwind",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem a.",
    image: "/images/pictures/carousel (3).jpg",
  },

  {
    title: "Mini Project",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem a.",
    image: "/images/pictures/carousel (4).jpg",
  },

  {
    title: "Konsultasi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem a.",
    image: "/images/pictures/carousel (5).jpg",
  },
];

export default function CarouselSlides() {
  return (
    <Carousel autoplay={true} autoplayDelay={5000} loop={true} className="rounded-xl">
      {carouselData.map((item, index) => (
        <div key={index} className="relative w-full h-[540px] lg:h-[640px]">
          <img src={item.image} alt="Slides Images" className="object-cover w-full h-full" />

          <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/75">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-8">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{item.title}</h1>

              <p className="px-16 leading-tight md:text-xl lg:text-2xl">{item.desc}</p>

              <div className="flex justify-center mt-2">
                <Link to="/product">
                  <button className="px-8 py-2 rounded-lg bg-[#F96D00] uppercase font-bold border-4 border-[#F96D00] hover:text-[#F96D00] hover:bg-white transition-all duration-300">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
