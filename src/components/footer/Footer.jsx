import React from 'react';
import geeksforgeeks from '../../assets/geeksforgeeks.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10 w-full">
      <div className="container mx-auto px-6 sm:px-12 text-center">
        {/* Contact Information */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Contact Me</p>
          <p><i className="fab fa-google"></i> <a href="mailto:your-email@example.com" className="text-blue-400">rathodmaheshofficial21@gmail.com</a></p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 flex-wrap">
          <a href="https://www.instagram.com/___._mahi_.___/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <i className="fab fa-instagram text-3xl sm:text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100033483270947" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <i className="fab fa-facebook text-3xl sm:text-2xl"></i>
          </a>
          <a href="https://github.com/Mahi-Rathod" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-github text-3xl sm:text-2xl"></i>
          </a>
          <a href="https://www.geeksforgeeks.org/user/rathod_mahesh123/" target="_blank" rel="noopener noreferrer" className="rounded-full hover:border-[1px] border-green-300">
            <img src={geeksforgeeks} alt="GeeksforGeeks" className="h-8 sm:h-6" />
          </a>
          <a href="https://www.codechef.com/users/code_pmahir" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            <i className="fas fa-laptop-code text-3xl sm:text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/mahesh-rathod-502787209/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <i className="fab fa-linkedin text-3xl sm:text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm mt-4 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Mahesh Rathod. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
