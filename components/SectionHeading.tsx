import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl mx-auto ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};