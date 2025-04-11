import React, { useState } from 'react';
import { FaStar, FaSmile, FaMeh, FaFrown } from 'react-icons/fa';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [satisfaction, setSatisfaction] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Implement API call to save feedback
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <FaSmile className="text-6xl text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600">Your feedback has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          We Value Your Feedback
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              How would you rate your experience?
            </label>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    type="button"
                    key={ratingValue}
                    className={`text-2xl focus:outline-none transition-colors ${
                      ratingValue <= (hover || rating) 
                        ? 'text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <FaStar />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Satisfaction Level */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
            How satisfied are you with our tools?
            </label>
            <div className="flex justify-between">
              {[
                { 
                  icon: FaSmile, 
                  value: 'satisfied', 
                  label: 'Satisfied', 
                  activeColor: 'text-purple-600 bg-purple-50',
                  hoverColor: 'hover:text-purple-600' 
                },
                { 
                  icon: FaMeh, 
                  value: 'neutral', 
                  label: 'Neutral', 
                  activeColor: 'text-yellow-500 bg-yellow-50',
                  hoverColor: 'hover:text-yellow-500'
                },
                { 
                  icon: FaFrown, 
                  value: 'unsatisfied', 
                  label: 'Unsatisfied', 
                  activeColor: 'text-red-500 bg-red-50',
                  hoverColor: 'hover:text-red-500'
                }
              ].map(({ icon: Icon, value, label, activeColor, hoverColor }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSatisfaction(value)}
                  className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                    satisfaction === value
                      ? activeColor
                      : `text-gray-400 ${hoverColor}`
                  }`}
                >
                  <Icon className="text-2xl mb-1" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium">
              Would you like to share more details?
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows="4"
              placeholder="Your feedback helps us improve..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !rating || !satisfaction}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
              loading || !rating || !satisfaction
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
