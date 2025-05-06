import { useState } from 'react';

interface CustomSwitchProps {

  initialChecked?: boolean;
 
  onChange?: (checked: boolean) => void;
  
  disabled?: boolean;
}

export default function CustomSwitch({
    initialChecked = false,
    onChange,
    disabled = false,
  }: CustomSwitchProps) {
    const [checked, setChecked] = useState(initialChecked);
  
    const toggle = () => {
      if (!disabled) {
        const newState = !checked;
        setChecked(newState);
        onChange?.(newState);
      }
    };
  
    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={toggle}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                    ${checked ? '!bg-yellow-700' : '!bg-gray-300'} 
                    ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                    group`} // Añadida clase group
      >
        <span
          className={` h-6 w-8 transform rounded-full shadow-lg transition-all 
                     ${checked ? 'translate-x-7 bg-white' : 'translate-x-1 bg-white'}
                     ${!disabled && 'group-hover:scale-110'}`} // Efecto hover
        />
      </button>
    );
  }