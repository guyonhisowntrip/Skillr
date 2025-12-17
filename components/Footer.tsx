import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tighter">Skillr<span className="text-indigo-500">.</span></span>
            <p className="text-sm mt-2">Empowering professionals to build the future.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Skillr. All rights reserved.
        </div>
      </div>
    </footer>
  );
};