import React, { useState } from 'react';

const PhoneIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 mr-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ExclamationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);


const App: React.FC = () => {
  const [callStatus, setCallStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleDemoCallClick = () => {
    setCallStatus('loading');
    fetch('https://n8n.srv846726.hstgr.cloud/webhook-test/ae6c5f05-2d52-4efb-bd97-2467aec5fc30')
      .then(response => {
        if (response.ok) {
          console.log('Demo call triggered successfully.');
          setCallStatus('success');
        } else {
          console.error('Failed to trigger demo call:', response.statusText);
          setCallStatus('error');
        }
      })
      .catch(error => {
        console.error('Error triggering demo call:', error);
        setCallStatus('error');
      })
      .finally(() => {
        // Reset the button after 3 seconds to allow for another attempt
        setTimeout(() => setCallStatus('idle'), 3000);
      });
  };
  
  const getButtonContent = () => {
    switch (callStatus) {
      case 'loading':
        return 'Initiating...';
      case 'success':
        return <><CheckIcon /> Call Initiated!</>;
      case 'error':
        return <><ExclamationIcon /> Failed. Try Again.</>;
      case 'idle':
      default:
        return <><PhoneIcon /> Start Demo Call</>;
    }
  };

  const getButtonClasses = () => {
    const baseClasses = "w-full md:w-auto inline-flex items-center justify-center px-8 py-4 text-white font-semibold text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-opacity-50";
    
    switch (callStatus) {
      case 'loading':
        return `${baseClasses} bg-gray-500 cursor-not-allowed`;
      case 'success':
        return `${baseClasses} bg-green-600 hover:bg-green-700 focus:ring-green-500`;
      case 'error':
        return `${baseClasses} bg-red-600 hover:bg-red-700 focus:ring-red-500`;
      case 'idle':
      default:
        return `${baseClasses} bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500`;
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 text-white font-sans">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-lg w-full text-center border border-white/20">
        <div className="animate-fade-in-down">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Hi James
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Please tap on the button below for the demo call.
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={handleDemoCallClick}
            disabled={callStatus === 'loading'}
            className={getButtonClasses()}
          >
            {getButtonContent()}
          </button>
        </div>
      </div>
      {/* Custom keyframe animations for a polished entry effect */}
      <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default App;