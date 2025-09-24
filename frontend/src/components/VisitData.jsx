import React from "react";
import { motion } from "framer-motion";
import { statsData } from "../data/landing";

const VisitData = () => {
  return (
    <section className="my-16 px-6 md:px-20 max-w-7xl flex items-center flex-col justify-center mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-600 mb-12">
        Why Shop With Us?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-500">
              {stat.value}
            </h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisitData;
