'use client'
import { useState } from 'react';

export const useToggle = (initial) => {
    const [isToggled, setTogggle] = useState(initial);
    const toggle = () => setTogggle(prev => !prev);

    return { isToggled, setTogggle, toggle };
}