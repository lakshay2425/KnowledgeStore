import React from 'react';

const OrderConfirmation = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();

      // Optional: Pause the video when it ends, if you want to prevent replay
      const handleEnded = () => {
        video.pause();
        video.currentTime = 0; // Reset to start
      };

      video.addEventListener('ended', handleEnded);

      // Cleanup event listener on unmount
      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <video ref={videoRef} width="750" height="500" playsInline >
          <source src="https://cdn.dribbble.com/users/458522/screenshots/13953991/media/039e1ee6e130ca76595e6a07b5920af6.mp4" type="video/mp4"/>
        </video>
        <h1 className="text-2xl font-bold text-red-600 mb-4">Order Failed!</h1>
        <p className="text-gray-700 mb-4">We're sorry, but there was a problem with your order.</p>
        <p className="text-gray-600">Please check your payment details and try again.</p>
        <button className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Retry Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
