import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setVisible(window.scrollY > 600);
        window.addEventListener('scroll', toggle, { passive: true });
        return () => window.removeEventListener('scroll', toggle);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="scroll-to-top"
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTopButton;
