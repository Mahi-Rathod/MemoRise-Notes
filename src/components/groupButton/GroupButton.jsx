import React, { useEffect, useState, useRef } from 'react';

function GroupButton({
    isVisible,
    handleOnClick,
    buttonIcon,
    buttonTooltipText,
    isSpinnerVisible = false,
    height = 'h-[3rem]',
    width = 'w-[3rem]',
    border = '',
    buttonColor = 'text-black'
}) {
    const buttonRef = useRef(null);
    const [showAbove, setShowAbove] = useState(true);

    useEffect(() => {
        const handlePosition = () => {
            if (buttonRef.current) {
                const buttonRect = buttonRef.current.getBoundingClientRect();
                const spaceAbove = buttonRect.top;
                const spaceBelow = window.innerHeight - buttonRect.bottom;

                // Show above if spaceAbove is greater, otherwise show below
                setShowAbove(spaceAbove > spaceBelow);
            }
        };

        // Check on load and during scroll
        handlePosition();
        window.addEventListener('scroll', handlePosition);
        window.addEventListener('resize', handlePosition);

        return () => {
            window.removeEventListener('scroll', handlePosition);
            window.removeEventListener('resize', handlePosition);
        };
    }, []);

    return (
        <div ref={buttonRef} className={`relative group ${width}`}>
            {/* Button */}
            <button
                onClick={handleOnClick}
                className={`${!isVisible ? 'block' : 'hidden'} ${height} ${width} ${border} flex justify-center items-center rounded-lg hover:rounded-full border-cyan-400 hover:border-none hover:opacity-85 relative group ${buttonColor}`}
            >
                <span className="material-symbols-outlined">{buttonIcon}</span>

                {/* Spinning Border */}
                {isSpinnerVisible && (
                    <div
                        className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-red-500 border-r-cyan-500 border-b-pink-500 border-l-green-500 hidden group-hover:block group-hover:animate-spin"
                    ></div>
                )}
            </button>

            {/* Tooltip */}
            <div
                className={`absolute -translate-x-1/2 ${
                    showAbove ? '-translate-y-full -top-2' : 'translate-y-2 top-full'
                } left-1/2 w-max bg-cyan-600 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity`}
            >
                {buttonTooltipText}
            </div>
        </div>
    );
}

export default GroupButton;
