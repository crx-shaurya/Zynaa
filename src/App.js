import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Gold-Plated Necklace",
    price: "₹1,999",
    image: "https://i.ibb.co/FbvT433r/Screenshot-2025-06-14-094712.png",
  },
  {
    name: "Emerald Stud Earrings",
    price: "₹1,299",
    image: "https://i.ibb.co/KcVJKr4V/Screenshot-2025-06-14-095057.png",
  },
  {
    name: "Emerald Studd Necklace",
    price: "₹3,499",
    image: "https://i.ibb.co/rRBD0yDQ/Screenshot-2025-06-14-094758.png",
  },
];

const App = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* === HEADER === */}
      <header className="p-6 flex justify-between items-center shadow-md relative">
        {/* LEFT TEXT */}
        <h1 className="text-xl font-semibold tracking-wider absolute left-6">
          Zynaa
        </h1>

        {/* SHOP LINK RIGHT */}
        <a
          href="#shop"
          className="text-sm font-medium absolute right-6 hover:text-gold-500"
        >
          Shop Now
        </a>
      </header>

      {/* === HERO === */}
      {/* === HERO === */}
      <section className="h-[80vh] flex items-center justify-center flex-col text-center px-4">
        <motion.img
          src="/zynaa_black_logo.png"
          alt="Zynaa Logo"
          className="h-20 w-auto mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
      
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where Elegance Meets You
        </motion.h2>
        <p className="text-gray-600 text-lg mb-6 max-w-xl">
          Timeless Artificial Jewellery for Modern Royalty. Explore Zynaa's
          finest hand-picked collection.
        </p>
        <a
          href="#shop"
          className="bg-black text-white px-6 py-3 rounded-full shadow hover:bg-gray-800 transition"
        >
          Explore Collection
        </a>
      </section>

      {/* === PRODUCTS === */}
      <section id="shop" className="px-6 py-16 bg-gray-50">
        <h3 className="text-center text-3xl font-semibold mb-10">
          Featured Collection
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl mb-4"
              />
              <h4 className="text-lg font-medium mb-2">{item.name}</h4>
              <p className="text-gray-700 font-semibold">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Zynaa. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
