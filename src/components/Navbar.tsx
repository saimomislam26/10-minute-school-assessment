// import React from 'react';
// import { Phone } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between px-10">
          <div className="flex items-center space-x-8">
            <img src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="10 Minute School" className="h-8" />
            <div className="relative">
              <input
                type="text"
                placeholder="বিষয় খোঁজ, কিংবা ক্লাস এখানে সার্চ করুন..."
                className="w-96 pl-10 pr-4 py-2 border rounded-full bg-gray-50"
              />

            </div>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <select className="bg-transparent">
                <option>Class 6-12</option>
              </select>
              <select className="bg-transparent">
                <option>Skills</option>
              </select>
              <a href="#" className="hover:text-green-500">Admission</a>
              <a href="#" className="hover:text-green-500">Online Batch</a>
              <a href="#" className="hover:text-green-500">English Centre</a>
              <a href="#" className="hover:text-green-500">More</a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-500">
                {/* <FiPhone className="mr-1" /> */}
                <span>16910</span>
              </div>
              <Button className="bg-green-500 text-white">
                লগ-ইন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}