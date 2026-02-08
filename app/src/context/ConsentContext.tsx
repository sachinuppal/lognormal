import React, { createContext, useContext, useState, useEffect } from 'react';

interface ConsentState {
    necessary: boolean;
    marketing: boolean;
    analytics: boolean;
    timestamp: string | null;
    hasInteracted: boolean;
}

interface ConsentContextType {
    consent: ConsentState;
    updateConsent: (updates: Partial<Omit<ConsentState, 'timestamp' | 'hasInteracted'>>) => void;
    acceptAll: () => void;
    rejectAll: () => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const defaultConsent: ConsentState = {
    necessary: true, // Always true
    marketing: false,
    analytics: false,
    timestamp: null,
    hasInteracted: false,
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const ConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [consent, setConsent] = useState<ConsentState>(defaultConsent);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedConsent = localStorage.getItem('cookieConsent_v2');
        if (savedConsent) {
            try {
                setConsent(JSON.parse(savedConsent));
            } catch (e) {
                console.error('Failed to parse consent', e);
                setIsOpen(true);
            }
        } else {
            setIsOpen(true);
        }
    }, []);

    const saveConsent = (newConsent: ConsentState) => {
        setConsent(newConsent);
        localStorage.setItem('cookieConsent_v2', JSON.stringify(newConsent));
        setIsOpen(false);

        // Legacy support: also set the old simple flag
        localStorage.setItem('cookieConsent', 'true');
    };

    const updateConsent = (updates: Partial<Omit<ConsentState, 'timestamp' | 'hasInteracted'>>) => {
        const newConsent = {
            ...consent,
            ...updates,
            necessary: true, // Force true
            timestamp: new Date().toISOString(),
            hasInteracted: true,
        };
        saveConsent(newConsent);
    };

    const acceptAll = () => {
        const newConsent = {
            necessary: true,
            marketing: true,
            analytics: true,
            timestamp: new Date().toISOString(),
            hasInteracted: true,
        };
        saveConsent(newConsent);
    };

    const rejectAll = () => {
        const newConsent = {
            necessary: true,
            marketing: false,
            analytics: false,
            timestamp: new Date().toISOString(),
            hasInteracted: true,
        };
        saveConsent(newConsent);
    };

    return (
        <ConsentContext.Provider value={{ consent, updateConsent, acceptAll, rejectAll, isOpen, setIsOpen }}>
            {children}
        </ConsentContext.Provider>
    );
};

export const useConsent = () => {
    const context = useContext(ConsentContext);
    if (context === undefined) {
        throw new Error('useConsent must be used within a ConsentProvider');
    }
    return context;
};
