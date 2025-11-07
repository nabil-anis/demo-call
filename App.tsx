import React from 'react';

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

const App: React.FC = () => {

  const handleDemoCallClick = () => {
    window.open('https://n8n.srv846726.hstgr.cloud/webhook/ae6c5f05-2d52-4efb-bd97-2467aec5fc30', '_blank');
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
            className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <PhoneIcon />
            Start Demo Call
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
