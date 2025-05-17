import React, { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center mb-6 pb-4 border-b border-gray-800">
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg mr-3 shadow-lg shadow-purple-500/20">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;