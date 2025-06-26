import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface LogoComponentProps {
  className?: string;
  fallbackText?: string;
  maxWidth?: string;
  height?: string;
  invert?: boolean;
}

const LogoComponent: React.FC<LogoComponentProps> = ({
  className = '',
  fallbackText = 'ActReady',
  maxWidth = '120px',
  height = 'h-7 sm:h-8',
  invert = false
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  if (imageError) {
    return (
      <div 
        className={cn(
          'flex items-center justify-center font-bold text-gray-800',
          height,
          invert && 'text-white',
          className
        )}
        style={{ maxWidth }}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <div className="relative">
      {imageLoading && (
        <div 
          className={cn(
            'animate-pulse bg-gray-200 rounded',
            height,
            className
          )}
          style={{ maxWidth, width: '60px' }}
        />
      )}
      <img
        src="/logo.png"
        alt={`${fallbackText} Logo`}
        className={cn(
          height,
          'object-contain transition-opacity duration-200',
          invert && 'invert',
          imageLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        style={{ maxWidth }}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default LogoComponent; 