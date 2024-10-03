"use client"
import { SetStateAction, useState } from 'react';

const data = [
  { question: 'How can I reset my password?', answer: 'To reset your password, ...' },
  { question: 'How do I change my email address?', answer: 'To change your email address, ...' },
  { question: 'How can I delete my account?', answer: 'To delete your account, ...' },
  { question: 'What payment methods are accepted?', answer: 'We accept Visa, Mastercard, ...' }
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
            openIndex === index ? 'accordion-active' : ''
          }`}
        >
          <button
            className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
            aria-controls={`accordion-content-${index}`}
            onClick={() => toggleAccordion(index)}
          >
            <h5>{item.question}</h5>
            <svg
              className={`w-6 h-6 text-gray-900 transition duration-500 block group-hover:text-indigo-600 origin-center ${
                openIndex === index ? 'hidden' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 18V6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 text-gray-900 transition duration-500 hidden group-hover:text-indigo-600 origin-center ${
                openIndex === index ? 'block' : 'hidden'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ${
              openIndex === index ? 'max-h-[16rem]' : 'max-h-0'
            }`}
          >
            <p className="text-base text-gray-900 font-normal leading-6">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
