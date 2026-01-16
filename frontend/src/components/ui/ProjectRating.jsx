import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const ProjectRating = ({ projectSlug }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating_${projectSlug}`);
    if (storedRating) {
      setRating(parseInt(storedRating));
      setHasRated(true);
    }
  }, [projectSlug]);

  const handleRating = (value) => {
    if (hasRated) return;
    setRating(value);
    setHasRated(true);
    setShowConfetti(true);
    localStorage.setItem(`rating_${projectSlug}`, value.toString());
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-slate-800 relative overflow-hidden transition-colors">
      
      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: '50%', y: '50%', scale: 0, opacity: 1 }}
              animate={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0],
                opacity: [1, 1, 0]
              }}
              transition={{ duration: 1.5, delay: i * 0.05 }}
              className="absolute w-2 h-2 rounded-full"
              style={{ backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'][i % 4] }}
            />
          ))}
        </div>
      )}

      <h4 className="text-xs font-bold text-center mb-4 uppercase tracking-widest text-gray-900 dark:text-white">
        {hasRated ? '✨ Thanks for Reviewing!' : 'Rate this Project'}
      </h4>

      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => !hasRated && setHoverRating(star)}
            onMouseLeave={() => !hasRated && setHoverRating(0)}
            disabled={hasRated}
            className={`transition-all duration-200 outline-none focus:outline-none ${
              hasRated ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            }`}
          >
            <FaStar
              className={`w-6 h-6 transition-colors duration-200 ${
                star <= (hoverRating || rating)
                  ? 'text-yellow-400 drop-shadow-sm' 
                  : 'text-gray-200 dark:text-gray-700'
              }`}
            />
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 font-medium tracking-wide">
        {hasRated 
          ? `You rated this ${rating} stars`
          : 'Your feedback helps improve this portfolio'
        }
      </p>
    </div>
  );
};

export default ProjectRating;
