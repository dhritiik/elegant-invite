const FloralPattern = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 400 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top left flower */}
      <g opacity="0.4" transform="translate(30, 40)">
        <path d="M20 10C25 5 35 5 40 15C45 5 55 5 60 10C65 20 55 30 40 35C25 30 15 20 20 10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="40" cy="18" r="3" fill="currentColor" opacity="0.5"/>
        <path d="M40 35V55" stroke="currentColor" strokeWidth="1"/>
        <path d="M35 45C30 40 25 42 22 48" stroke="currentColor" strokeWidth="1"/>
        <path d="M45 45C50 40 55 42 58 48" stroke="currentColor" strokeWidth="1"/>
      </g>

      {/* Top right branch */}
      <g opacity="0.4" transform="translate(280, 30)">
        <path d="M10 50C20 40 40 35 60 30" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M25 42C20 35 25 28 32 30" stroke="currentColor" strokeWidth="1"/>
        <path d="M40 36C35 28 40 22 48 24" stroke="currentColor" strokeWidth="1"/>
        <path d="M55 32C52 24 58 18 65 22" stroke="currentColor" strokeWidth="1"/>
      </g>

      {/* Left side flower cluster */}
      <g opacity="0.35" transform="translate(20, 150)">
        <path d="M15 20C20 12 32 12 38 22C44 12 56 12 62 20C68 32 56 44 38 50C20 44 8 32 15 20Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="38" cy="28" r="4" fill="currentColor" opacity="0.4"/>
      </g>

      {/* Right decorative element */}
      <g opacity="0.35" transform="translate(320, 180)">
        <path d="M10 10C15 5 25 8 30 15C35 8 45 5 50 10C55 18 48 28 30 32C12 28 5 18 10 10Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        <path d="M30 32V50" stroke="currentColor" strokeWidth="1"/>
      </g>

      {/* Bottom left branch */}
      <g opacity="0.4" transform="translate(15, 480)">
        <path d="M60 10C45 20 25 25 5 35" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M45 18C50 10 42 4 35 8" stroke="currentColor" strokeWidth="1"/>
        <path d="M28 24C32 16 25 10 18 14" stroke="currentColor" strokeWidth="1"/>
      </g>

      {/* Bottom right flower */}
      <g opacity="0.4" transform="translate(300, 500)">
        <path d="M20 15C26 8 38 8 45 18C52 8 64 8 70 15C76 28 64 42 45 48C26 42 14 28 20 15Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="45" cy="25" r="4" fill="currentColor" opacity="0.5"/>
        <path d="M45 48V70" stroke="currentColor" strokeWidth="1"/>
        <path d="M38 58C32 52 26 56 24 64" stroke="currentColor" strokeWidth="1"/>
        <path d="M52 58C58 52 64 56 66 64" stroke="currentColor" strokeWidth="1"/>
      </g>

      {/* Center small dots/buds */}
      <g opacity="0.3">
        <circle cx="200" cy="80" r="2" fill="currentColor"/>
        <circle cx="195" cy="85" r="1.5" fill="currentColor"/>
        <circle cx="205" cy="88" r="1.5" fill="currentColor"/>
        
        <circle cx="200" cy="520" r="2" fill="currentColor"/>
        <circle cx="195" cy="515" r="1.5" fill="currentColor"/>
        <circle cx="205" cy="512" r="1.5" fill="currentColor"/>
      </g>
    </svg>
  );
};

export default FloralPattern;
