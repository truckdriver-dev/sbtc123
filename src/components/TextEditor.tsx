import React from 'react';
import { CardTemplate } from '../types/card';

interface TextEditorProps {
  template: CardTemplate;
  onTextChange: (field: keyof CardTemplate['text'], value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ template, onTextChange }) => {
  const { text, textStyles } = template;
  
  return (
    <div className="space-y-6">
      {Object.entries(text).map(([key, value]) => {
        const fieldKey = key as keyof typeof text;
        const style = textStyles[fieldKey];
        
        // Only show editable fields (currently only the name field)
        if (fieldKey !== 'name') return null;

        return (
          <div key={fieldKey} className="space-y-3">
            <label 
              htmlFor={`text-${fieldKey}`} 
              className="block text-lg sm:text-base font-medium text-[#00F5FF]"
            >
              {style.label}
            </label>
            
            <input
              id={`text-${fieldKey}`}
              type="text"
              value={value}
              onChange={(e) => onTextChange(fieldKey, e.target.value.toUpperCase())}
              placeholder={style.placeholder}
              className="w-full px-4 py-3 bg-black/30 border border-purple-500/20 rounded-xl shadow-sm text-white placeholder-[#B4B7FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00F5FF] focus:border-[#00F5FF] transition-all duration-300 text-lg sm:text-base"
              maxLength={20}
            />
            
            <p className="text-sm text-[#B4B7FF]">
              {style.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TextEditor;