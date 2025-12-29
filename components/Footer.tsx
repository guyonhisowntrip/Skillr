import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} One Tapp University. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="mailto:info.otu@onetapp.in" className="hover:text-slate-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};