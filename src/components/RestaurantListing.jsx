import React, { useEffect } from "react";
import { gsap } from "gsap";

// Sample restaurant data
const restaurants = [
  {
    name: "Ghar Ka Tadka",
    offer: "60% OFF UPTO ₹125",
    rating: "4.2",
    time: "25-30 mins",
    cuisine: "Indian",
    location: "Mayur Vihar Phase 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Indian_Thali.jpg", // Indian Thali
  },
  {
    name: "La Pino'z Pizza",
    offer: "50% OFF UPTO ₹90",
    rating: "4.1",
    time: "20-25 mins",
    cuisine: "Pizzas, Pastas, Italian, Desserts, Beverages",
    location: "Mayur Vihar Phase 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg", // Pizza image
  },
  {
    name: "Bikaner Express",
    offer: "60% OFF UPTO ₹120",
    rating: "4",
    time: "25-30 mins",
    cuisine: "Indian",
    location: "Mayur Vihar Phase 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Rajasthani_Thali.jpg", // Rajasthani Thali
  },
  {
    name: "Rollsking",
    offer: "50% OFF UPTO ₹100",
    rating: "4",
    time: "25-30 mins",
    cuisine: "Fast Food, Rolls & Wraps, North Indian, Snacks",
    location: "Mayur Vihar",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kathi_Roll.jpg", // Kathi Roll image
  },
  {
    name: "Ghar Ka Tadka",
    offer: "60% OFF UPTO ₹125",
    rating: "4.2",
    time: "25-30 mins",
    cuisine: "Indian",
    location: "Mayur Vihar Phase 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Indian_Thali.jpg", // Indian Thali (same as above)
  },
  {
    name: "La Pino'z Pizza",
    offer: "50% OFF UPTO ₹90",
    rating: "4.1",
    time: "20-25 mins",
    cuisine: "Pizzas, Pastas, Italian, Desserts, Beverages",
    location: "Mayur Vihar Phase 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg", // Pizza image (same as above)
  },
  {
    name: "Bikaner Express",
    offer: "60% OFF UPTO ₹120",
    rating: "4",
    time: "25-30 mins",
    cuisine: "Indian",
    location: "Mayur Vihar Phase 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/09/Rajasthani_Thali.jpg", // Rajasthani Thali (same as above)
  },
  {
    name: "Rollsking",
    offer: "50% OFF UPTO ₹100",
    rating: "4",
    time: "25-30 mins",
    cuisine: "Fast Food, Rolls & Wraps, North Indian, Snacks",
    location: "Mayur Vihar",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kathi_Roll.jpg", // Kathi Roll image (same as above)
  },
];


const RestaurantListing = () => {
  useEffect(() => {
    gsap.from(".restaurant-card", {
      opacity: 1,
      y: 50,
      duration: 176879,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">
        Restaurants with Online Food Delivery in Delhi
      </h2>

      {/* Fixed Filter Section */}
      <div className="bg-white shadow-md sticky top-0 z-50 mb-4 rounded">
       
        <div className="flex flex-wrap gap-8 p-4">
          <h3 className="text-lg font-semibold p-4">Filters</h3>
          <h3 className="text-lg font-semibold p-4">sort-</h3>
          <button className="bg-gray-200 rounded px-3 py-1 hover:bg-orange-500">Fast Delivery</button>
          <button className="bg-gray-200 rounded px-3 py-1 hover:bg-orange-500">New on Swiggy</button>
          <button className="bg-gray-200 rounded px-3 py-1 hover:bg-orange-500">Ratings 4.0+</button>
          <button className="bg-gray-200 rounded px-3 py-1 hover:bg-orange-500">Pure Veg</button>
          <button className="bg-gray-200 rounded px-3 py-1 hover:bg-orange-500">Offers</button>
          <button className="bg-gray-200 rounded px-3 py-1 hover:bg-orange-500">Rs. 300-Rs. 600</button>
          <button className="bg-gray-200 rounded px-3 py-1 hover:bg-orange-500">Less than Rs. 300</button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-auto ">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="restaurant-card bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between"
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

export default RestaurantListing;
