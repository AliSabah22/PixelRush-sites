'use client';

export default function PageBreaker() {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 md:h-24 lg:h-32"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pageBreakerGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#18181b" stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C360,120 1080,-40 1440,60 L1440,100 L0,100 Z"
          fill="url(#pageBreakerGradient)"
        />
      </svg>
    </div>
  );
} 