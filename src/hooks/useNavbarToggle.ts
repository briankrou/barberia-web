import { useState } from 'react';

const useNavbarToggle = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return { isOpen, toggleMenu };
};

export default useNavbarToggle;
