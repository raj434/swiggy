import React, { useEffect } from "react";
import { gsap } from "gsap";

// Sample restaurant data
const restaurants = [
  {
    name: "Olio - The Wood Fired Pizzeria",
    offer: "₹125 OFF ABOVE ₹249",
    rating: "4.4",
    time: "25-30 mins",
    cuisine: "Pizzas, Pastas, Fast Food, Snacks, Beverages",
    location: "East Vinod Nagar",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg", // Real pizza image
  },
  {
    name: "KFC",
    offer: "ITEMS AT ₹179",
    rating: "4.3",
    time: "30-35 mins",
    cuisine: "Burgers, Rolls & Wraps, Fast Food",
    location: "Vasundhara Enclave",
   img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg", // Real KFC chicken image
  },
  {
    name: "Pizza Hut",
    offer: "50% OFF UPTO ₹90",
    rating: "4",
    time: "20-25 mins",
    cuisine: "Pizzas",
    location: "Mayur Vihar Phase 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg", // Real Pizza Hut image
  },
  {
    name: "Domino's Pizza",
    offer: "₹150 OFF ABOVE ₹299",
    rating: "4.2",
    time: "20-25 mins",
    cuisine: "Pizzas, Fast Food",
    location: "Preet Vihar",
   img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg", // Real Domino's pizza image
  },
  {
    name: "Subway",
    offer: "BUY 1 GET 1 FREE",
    rating: "4.5",
    time: "15-20 mins",
    cuisine: "Subs, Sandwiches, Healthy Food",
    location: "Laxmi Nagar",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",// Real Subway sandwich image
  },
];


const RestaurantChains = () => {
  useEffect(() => {
    gsap.from(".restaurant-card", {
      opacity: 1,
      y: 50,
      duration: 16768,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Top Restaurant Chains in Delhi</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="restaurant-card bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between min-w-[300px] shrink-0"
          >
            {/* Restaurant Image */}
            <img
              src={restaurant.img}
              alt={restaurant.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold mb-1">{restaurant.name}</h3>
              <p className="text-red-600 font-semibold mb-2">{restaurant.offer}</p>
              <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-gray-500">
                <span className="font-semibold text-gray-800">{restaurant.rating}</span> • {restaurant.time}
              </p>
              <p className="text-gray-500">{restaurant.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantChains;
