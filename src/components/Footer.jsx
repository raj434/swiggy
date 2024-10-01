import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-16">
        {/* Swiggy Logo */}
       

        {/* Top Section: Links and Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
         <div className="mb-8 text-center">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
            alt="Swiggy"
            className="h-[6rem] w-auto "
          />
        </div>
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:underline">Partner with Us</a></li>
              <li><a href="#" className="hover:underline">Ride with Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-600"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-yellow-600"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-yellow-600"><FaTwitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright Info */}
        <div className="border-t border-gray-600 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Swiggy Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
