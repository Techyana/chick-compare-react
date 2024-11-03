import React from 'react';
import { faqs } from './faqs';
import './FAQ.module.scss';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;