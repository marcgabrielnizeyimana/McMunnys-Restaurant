import React, { useState } from 'react';
import logoImg from '../assets/logo-512.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
  variant?: 'full' | 'icon' | 'badge';
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  showTagline = false,
  variant = 'full'
}) => {
  const [imgSrc, setImgSrc] = useState<string>(logoImg || '/logo.png');

  const imageSizes = {
    sm: 'h-9 w-auto min-w-[36px]',
    md: 'h-11 sm:h-12 w-auto min-w-[44px]',
    lg: 'h-14 sm:h-16 w-auto min-w-[56px]',
    xl: 'h-20 sm:h-24 w-auto min-w-[80px]'
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  const handleImageError = () => {
    if (imgSrc !== '/logo.png') {
      setImgSrc('/logo.png');
    } else if (imgSrc !== '/assets/images/logo.png') {
      setImgSrc('/assets/images/logo.png');
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} id="brand-logo-container">
      {/* Official McMunnys Logo Image */}
      <div 
        id="logo-image-wrapper"
        className="relative flex items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-black/40 border border-[#C89B3C]/30 p-1 bg-[#181614] group-hover:border-[#D4A745] transition-all duration-300 group-hover:scale-105"
      >
        <img
          src={imgSrc}
          alt="McMunnys Restaurant Official Logo"
          className={`${imageSizes[size]} object-contain rounded-lg aspect-square`}
          loading="eager"
          onError={handleImageError}
        />
      </div>

      {/* Brand Typography & Location Label */}
      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-display font-black tracking-tight text-white ${textSizes[size]}`}>
              McMUNNYS
            </span>
            <span className="h-2 w-2 rounded-full bg-[#C89B3C] animate-pulse"></span>
          </div>
          <span className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-bold text-[#D4A745] mt-1">
            Restaurant &bull; Erickson, MB
          </span>
          {showTagline && (
            <span className="text-xs text-[#A0988E] font-medium mt-1">
              Homestyle Dining &amp; Great Coffee
            </span>
          )}
        </div>
      )}
    </div>
  );
};

