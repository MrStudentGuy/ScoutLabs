// TODO: DETECT AND RETURN PLATFORM

import { useState, useEffect } from 'react';

// Define a custom type for operating system values
export type Platform = 'Windows' | 'macOS' | 'Other';

export const usePlatform = (): Platform => {
    const [os, setOS] = useState<Platform>('Other');

    useEffect(() => {
        const userAgent: string = window.navigator.userAgent;

        const detectOS = (): Platform => {
            if (userAgent.indexOf('Win') !== -1) return 'Windows';
            if (userAgent.indexOf('Mac') !== -1) return 'macOS';
            return 'Other';
        };

        setOS(detectOS());
    }, []);

    return os;
};