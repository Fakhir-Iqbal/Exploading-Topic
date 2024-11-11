import { useState, useRef, useEffect } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ProButton from './Buttons/ProButton';

export default function Dropdown({ options, label, onSelect }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Set initial non-Pro option as selected
        const firstNonProOption = options.find(option => !option.isPro)?.value || '';
        setSelectedOption(firstNonProOption);
    }, [options]);

    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const handleSelectOption = (value) => {
        setSelectedOption(value);
        onSelect(value); 
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="w-full bg-white border border-gray-300 rounded-lg text-gray-400 p-2 text-sm text-left flex justify-between items-center"
            >
                {selectedOption}
                <span className="ml-2 text-gray-400">
                    {isOpen ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                    {label && <div className="px-2 py-1 text-gray-600 font-semibold text-sm">{label}</div>}
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectOption(option.value)}
                            className={`text-sm ${
                                selectedOption === option.value ? 'bg-blue-600 text-white' : 'text-blue-700 bg-blue-200'
                            } m-2 py-1 px-2 border hover:border-blue-600 cursor-pointer flex justify-between items-center rounded-[4]`}
                        >
                            {option.label}
                            {option.isPro && <ProButton title="Pro" href="#" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
