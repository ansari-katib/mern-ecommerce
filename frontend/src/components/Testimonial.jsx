import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "../data/landing";

const Testimonial = () => {
    return (
        <div className="max-w-7xl flex items-center justify-center mx-auto">
            <motion.section
                className="my-10 mx-2 md:mx-10 "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <motion.h2
                    className="text-4xl font-bold text-center text-emerald-600 mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    What Our Customers Say
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-900 text-emerald-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-20 w-20 rounded-full object-cover border-2 border-emerald-500"
                                />
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-white">
                                        {testimonial.name}
                                    </h3>
                                    <span className="text-sm text-gray-400">{testimonial.role}</span>
                                </div>
                            </div>
                            <p className="italic">"{testimonial.quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Testimonial;
