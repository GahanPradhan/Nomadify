import React from 'react';
import { 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const DashboardFooter = () => {

  return (
    <div>
    
    <footer className="bg-gradient-to-br from-slate-50 to-slate-100 py-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Brand Section */}
          <div className="flex items-center space-x-3">
          <h1 className="text-xl font-light tracking-tight text-gray-900">
            No<span className="font-bold text-red-500">madify</span>
          </h1>
          
          </div>
          
          {/* Social Media Links */}
          <div className=" flex space-x-14 ml-20 -mr-8">
            <a 
              href="https://x.com/PradhanGahan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/gahanpradhan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gahan-pradhan-7b9788252/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-red-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Nomadify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default DashboardFooter;