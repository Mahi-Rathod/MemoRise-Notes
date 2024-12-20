import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Contact Information */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Contact Me</p>
          <p><i className="fab fa-google"></i> <a href="mailto:your-email@example.com" className="text-blue-400">rathodmaheshofficial21@gmail.com</a></p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://geeksforgeeks.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
            <i className="fas fa-laptop-code text-2xl"></i>
          </a>
          <a href="https://codechef.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <i className="fas fa-utensils text-2xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm mt-4 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
