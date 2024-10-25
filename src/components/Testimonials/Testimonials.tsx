import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.module.scss';

interface Testimonial {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Azola",
    image: "/src/assets/images/Capelanet_Lady.png",
    review: "Chick-Compare helped me find the best car insurance deal. I'm saving so much now!",
    rating: 5
  },
  {
    name: "Michael",
    image: "/src/assets/images/OIG (7.png",
    review: "The process was so easy and the offers were amazing. Highly recommend!",
    rating: 4
  },
  {
    name: "Thabo",
    image: "/src/assets/images/tetyana.png",
    review: "I found the perfect health insurance for my family. Great experience!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full mx-auto mb-4 w-24 h-24 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-700 mb-2">{testimonial.review}</p>
              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((star, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
