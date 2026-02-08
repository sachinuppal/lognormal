import React, { useEffect } from 'react';
import { useConsent } from '../context/ConsentContext';

const ScriptsManager: React.FC = () => {
    const { consent } = useConsent();

    // RB2B Tracking Script (Marketing/Analytics)
    useEffect(() => {
        if (consent.marketing || consent.analytics) {
            // Check if script already exists to avoid duplication
            if (document.getElementById('rb2b-script')) return;

            const script = document.createElement('script');
            script.id = 'rb2b-script';
            script.innerHTML = `!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("E63P0HZ4P5OW");`;
            document.head.appendChild(script);

            return () => {
                // Optional: Cleanup logic if consent is revoked (hard for some scripts)
                // Usually we just leave it for the session or reload page
            };
        }
    }, [consent.marketing, consent.analytics]);

    // Albacross Tracking Script (Marketing)
    useEffect(() => {
        if (consent.marketing || consent.analytics) {
            if (document.getElementById('albacross-id')) return;

            // Albacross ID
            const scriptId = document.createElement('script');
            scriptId.id = 'albacross-id';
            scriptId.innerHTML = `window._nQc="89910520";`;
            document.head.appendChild(scriptId);

            // Albacross Loader
            if (document.getElementById('albacross-loader')) return;
            const scriptLoader = document.createElement('script');
            scriptLoader.id = 'albacross-loader';
            scriptLoader.async = true;
            scriptLoader.src = "https://serve.albacross.com/track.js";
            document.head.appendChild(scriptLoader);
        }
    }, [consent.marketing, consent.analytics]);



    return null; // This component handles side effects only
};

export default ScriptsManager;
