import { useState, useEffect } from 'react';

const screenshots = [
  {
    src: '/shots_-_pipeline.png',
    alt: 'Pipeline view showing leads organized by stage',
    label: 'View pipeline screenshot'
  },
  {
    src: '/shots_-_conversation.png',
    alt: 'Unified inbox showing AI booking an appointment',
    label: 'View conversation screenshot'
  },
  {
    src: '/shots_-_kpi.png',
    alt: 'Dashboard showing KPI tracking with charts and metrics',
    label: 'View KPI screenshot'
  },
  {
    src: '/shots_-_onboarding.png',
    alt: 'Welcome screen showing easy setup',
    label: 'View onboarding screenshot'
  }
];

export default function DashboardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, prefersReducedMotion]);

  useEffect(() => {
    screenshots.forEach((screenshot) => {
      const img = new Image();
      img.src = screenshot.src;
    });
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDotClick(index);
    }
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.15)]">
        <div className="aspect-video relative overflow-hidden bg-white">
          {screenshots.map((screenshot, index) => (
            <img
              key={screenshot.src}
              src={screenshot.src}
              alt={screenshot.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                pointerEvents: currentIndex === index ? 'auto' : 'none'
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        {screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-label={screenshot.label}
            aria-current={currentIndex === index}
            className="w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00F0B5] focus:ring-offset-2"
            style={{
              backgroundColor: currentIndex === index ? '#00F0B5' : '#9CA3AF'
            }}
          />
        ))}
      </div>
    </div>
  );
}
