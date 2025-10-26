'use client';

import React, { useState } from 'react';
import { Plus, Minus, ChevronRight } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  titleIcon?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  titleIcon = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <h3>
        <button
          className="flex justify-between items-center w-full py-4 px-1 text-left font-medium text-gray-700 hover:bg-gray-50 transition duration-150 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {titleIcon && (
            <span className={`mr-3 text-[#17a2b8] transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
              <ChevronRight size={16}/>
            </span>
          )}
          <span className="flex-1">{title}</span>
          <span className={`ml-3 transform transition-transform duration-200 ${titleIcon ? 'hidden' : ''}`}>
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </button>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0 text-gray-600 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
