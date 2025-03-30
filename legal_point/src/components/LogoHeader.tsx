// components/LogoHeader.tsx

import Image from 'next/image';
import React from 'react';

const LogoHeader: React.FC = () => {
  return (
    <header className="pt-[50px] px-[24px] sm:px-[50px] flex justify-center">
      <div className="relative w-full max-w-[1200px] h-[375px]">
        <Image
          src="/logo.png"
          alt="Website Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </header>
  );
};

export default LogoHeader;
