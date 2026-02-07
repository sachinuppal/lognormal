import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillEmail?: string;
}

const CalendlyModal = ({ isOpen, onClose, prefillEmail }: CalendlyModalProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Construct URL with prefill parameters
  const baseUrl = "https://calendly.com/lognormal-sales/falcondive-walk-through";
  const params = new URLSearchParams();
  if (prefillEmail) {
    params.append('email', prefillEmail);
  }
  const iframeSrc = `${baseUrl}?${params.toString()}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl h-[80vh] bg-[#1a1a24] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0a0a0f]">
          <div>
            <h3 className="font-display text-lg font-bold text-white">Book Your FalconDive Demo</h3>
            <p className="text-gray-500 text-xs font-mono">Schedule a personalized walkthrough</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Calendly Iframe */}
        <div className="w-full h-[calc(80vh-72px)]">
          <iframe
            ref={iframeRef}
            src={iframeSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book FalconDive Demo"
            className="bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;
