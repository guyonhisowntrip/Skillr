import React from 'react';
import { Mail, Phone, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const contacts = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      sub: "Fastest response for quick queries",
      href: "https://wa.me/qr/4A2MPOXI4UVLE1",
      color: "text-green-500",
      bg: "bg-green-500/10",
      borderColor: "hover:border-green-500/30"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "workshops@onetappuni.in",
      sub: "For detailed corporate inquiries",
      href: "mailto:workshops@onetappuni.in",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      borderColor: "hover:border-blue-500/30"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 78998 07872",
      sub: "Alt: +91 77603 52244",
      href: "tel:+917899807872",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      borderColor: "hover:border-purple-500/30"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "One Tapp Consulting",
      sub: "Follow us for AI updates",
      href: "https://www.linkedin.com/company/onetapp-consulting/",
      color: "text-sky-500",
      bg: "bg-sky-500/10",
      borderColor: "hover:border-sky-500/30"
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="contact">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Still have questions?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We know choosing a course is a commitment. Reach out directly to clear any doubts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/80 ${contact.borderColor} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl ${contact.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <contact.icon className={`w-6 h-6 ${contact.color}`} />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-100 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-3">
                  {contact.sub}
                </p>
                <div className={`text-sm font-semibold text-slate-300 group-hover:text-white flex items-center gap-2 transition-colors`}>
                  {contact.value}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </div>
              </div>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};