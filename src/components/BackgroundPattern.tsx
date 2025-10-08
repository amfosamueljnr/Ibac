const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      {/* Abstract leaf patterns */}
      <svg className="absolute top-10 left-10 w-64 h-64 text-primary" viewBox="0 0 200 200">
        <path
          d="M100,20 Q140,60 100,100 Q60,60 100,20 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M100,100 Q140,140 100,180 Q60,140 100,100 Z"
          fill="currentColor"
          opacity="0.2"
        />
      </svg>

      {/* Curved lines */}
      <svg className="absolute top-1/4 right-20 w-96 h-96 text-accent" viewBox="0 0 400 400">
        <path
          d="M50,200 Q200,100 350,200"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M50,250 Q200,150 350,250"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </svg>

      {/* Geometric circles */}
      <svg className="absolute bottom-20 left-1/4 w-48 h-48 text-primary" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
      </svg>

      {/* Abstract farming shapes */}
      <svg className="absolute top-1/2 right-1/4 w-72 h-72 text-primary" viewBox="0 0 300 300">
        <path
          d="M150,50 L160,100 L180,90 L170,140 L150,130 L130,140 L120,90 L140,100 Z"
          fill="currentColor"
          opacity="0.2"
        />
        <ellipse cx="150" cy="200" rx="80" ry="30" fill="currentColor" opacity="0.15" />
      </svg>

      {/* Dotted patterns */}
      <svg className="absolute bottom-1/4 right-10 w-40 h-40 text-accent" viewBox="0 0 100 100">
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="40" cy="20" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="60" cy="20" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="80" cy="20" r="2" fill="currentColor" opacity="0.2" />
        <circle cx="20" cy="40" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="60" cy="40" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="80" cy="40" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="20" cy="60" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="40" cy="60" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="60" cy="60" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="80" cy="60" r="2" fill="currentColor" opacity="0.4" />
      </svg>

      {/* More leaf patterns bottom left */}
      <svg className="absolute bottom-10 left-10 w-56 h-56 text-primary" viewBox="0 0 200 200">
        <path
          d="M50,100 Q100,50 150,100 Q100,150 50,100 Z"
          fill="currentColor"
          opacity="0.25"
        />
      </svg>

      {/* Wave pattern top right */}
      <svg className="absolute top-0 right-0 w-full h-64 text-primary" viewBox="0 0 1200 200">
        <path
          d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z"
          fill="currentColor"
          opacity="0.1"
        />
      </svg>
    </div>
  );
};

export default BackgroundPattern;
