const FloralDivider = () => {
  return (
    <div className="flex items-center justify-center my-8 px-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 md:w-16 md:h-16 relative animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path
              d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
        </div>
        <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="w-8 h-8 md:w-12 md:h-12 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
            <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.6" />
            <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.8" />
          </svg>
        </div>
        <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="w-12 h-12 md:w-16 md:h-16 relative animate-float" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
            <path
              d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z"
              fill="currentColor"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FloralDivider;
