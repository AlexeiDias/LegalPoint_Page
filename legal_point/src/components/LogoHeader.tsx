// components/LogoHeader.tsx

import Image from 'next/image';
import React from 'react';

const LogoHeader: React.FC = () => {
  return (
    <header className="pt-1 pb-0 px-[50px] flex justify-center">
      <div className="relative w-[1200px] h-[375px]">
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
