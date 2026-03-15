import { useEffect, useState } from 'react';
import { CheckCircle, Loader2, X } from 'lucide-react';

interface RewardUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  'Checking reward availability...',
  'Verifying user location...',
  'Connecting to reward server...',
  'Validating reward eligibility...',
  'Preparing gift card...',
  'Reward ready!',
];

export function RewardUnlockModal({ isOpen, onClose }: RewardUnlockModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setShowConfetti(false);

      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          } else {
            clearInterval(stepInterval);
            setShowConfetti(true);
            return prev;
          }
        });
      }, 1500);

      return () => clearInterval(stepInterval);
    }
  }, [isOpen]);

  const handleClaim = () => {
    window.open('https://gameflashx.space/cl/i/277ood', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  const isComplete = currentStep === steps.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      <div className="glass-card p-8 max-w-md w-full relative animate-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {isComplete ? 'Reward Ready!' : 'Unlocking Reward'}
          </h2>
          <p className="text-gray-300">
            {isComplete
              ? 'Your reward is ready to claim!'
              : 'Please wait while we process your reward...'}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 transition-all duration-500 ${
                index <= currentStep ? 'opacity-100' : 'opacity-30'
              }`}
            >
              {index < currentStep ? (
                <CheckCircle className="w-6 h-6 text-[#10b981] flex-shrink-0" />
              ) : index === currentStep ? (
                <Loader2 className="w-6 h-6 text-[#df104e] animate-spin flex-shrink-0" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-500 flex-shrink-0"></div>
              )}
              <span className={`${index <= currentStep ? 'text-white' : 'text-gray-500'}`}>
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
          <div
            className="bg-gradient-to-r from-[#df104e] to-[#b3114c] h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>

        {isComplete && (
          <div className="space-y-4">
            <button onClick={handleClaim} className="btn-primary w-full text-lg py-4">
              Claim Your Reward
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
