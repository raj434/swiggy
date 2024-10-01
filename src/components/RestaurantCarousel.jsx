import React, { useEffect } from "react";
import { gsap } from "gsap";
const categories = [
  { 
    name: "Burger", 
    img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png" 
  },
  { 
    name: "Pizza", 
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg" 
  },
  {
    name: "Roll",
    img: "https://static.toiimg.com/photo/msid-68964724/68964724.jpg"
  },
   { 
    name: "Burger", 
    img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png" 
  },
  { 
    name: "Pizza", 
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg" 
  },
  {
    name: "Roll",
    img: "https://static.toiimg.com/photo/msid-68964724/68964724.jpg"
  },
   { 
    name: "Burger", 
    img: "https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png" 
  },
  { 
    name: "Pizza", 
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg" 
  },
  {
    name: "Roll",
    img: "https://static.toiimg.com/photo/msid-68964724/68964724.jpg"
  }
];


const RestaurantCarousel = () => {
  useEffect(() => {
    gsap.from(".category-card", {
      opacity: 1,
      y: 30,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 underline">Restaurants Curated for You</h2>
      <div className="flex overflow-x-scroll overflow-y-hidden space-x-4 pb-4 scrollbar-hide">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card flex-shrink-0 bg-white rounded-lg shadow-md p-4 w-40"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-[10rem] object-cover rounded-md"
            />
            <h3 className="text-lg font-medium text-center mt-[2rem]">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCarousel;
