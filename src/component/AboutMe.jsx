import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
    return (
    <div className="bg-gradient-to-b from-[#001a33] to-[#003351] text-white p-8 rounded-lg shadow-lg w-full ">
      <div className="flex items-center justify-between mb-4">
        <img
          src="logo.png"
          alt="Nimrod Fisher"
          className="rounded-full h-24 w-24"
        />
        <div className="flex space-x-4">
        <a 
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:example@email.com"
            className="text-2xl text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Nimrod Fisher</h2>
      <p className="text-gray-300 mb-8">
        I'm A Dedicated Data Analytics Expert With A Passion For Solving Business And Product Challenges Through Data - And Using It Wisely to Drive Retention And Growth. I Thrive On Uncovering Hidden, High-Value Opportunities Within Organizations - Opportunities That Often Go Unnoticed But Can Make A Measurable Impact.
      </p>
      <p className="text-gray-300">
        With Over A Decade Of Experience, I've Worked Across Diverse Industries And Company Sizes - Solving Complex Challenges And Transforming Oceans Of Data Into Strategic Assets. What Motivates Me Is Showing Businesses That Data Isn't Just A Byproduct Of Operations - It's A Powerful Driver Of Profitability And Innovation When Leveraged Effectively.
      </p>
      <p className="text-gray-300 mt-8">
        There's Nothing More Fulfilling Than Helping A Company Uncover The Untapped Potential In Their Data And Transforming It Into A Competitive Advantage - That's What Drives Me Every Day.
      </p>
    </div >
  );
};

export default AboutMe;