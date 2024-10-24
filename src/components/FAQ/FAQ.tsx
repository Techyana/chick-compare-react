import React from 'react';
import './FAQ.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is Chick-Compare?',
    answer: 'Chick-Compare is your go-to platform for comparing deals on insurance, phone plans, fibre deals, and more. We help you find the best offers from top providers.'
  },
  {
    question: 'How do I compare deals?',
    answer: 'Simply select a category like car insurance or phone deals, and we’ll show you a list of options from various providers. You can view the details and choose the best deal that suits your needs.'
  },
  {
    question: 'Is Chick-Compare free to use?',
    answer: 'Yes, using Chick-Compare is completely free! Our goal is to help you save money by finding the best deals available.'
  },
  {
    question: 'How accurate are the quotes?',
    answer: 'We strive to provide the most accurate and up-to-date quotes. However, the final price you get might vary slightly due to provider’s terms and conditions.'
  },
  {
    question: 'Can I contact a provider directly through Chick-Compare?',
    answer: 'Yes, we provide direct links to the providers’ websites where you can get more information and contact them directly.'
  }
];

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
