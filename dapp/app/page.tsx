'use client';

import { useAccount } from 'wagmi';
import SwapComponent from '@/components/SwapComponent';

export default function LandingPage() {
  const { isConnected } = useAccount();

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background/50 text-foreground backdrop-blur-md">
      <div className="z-10 text-center">
        {!isConnected ? (
          <p className="text-xl font-semibold text-muted-foreground">
            Connect your wallet to start swapping
          </p>
        ) : (
          <SwapComponent />
        )}
      </div>
    </div>
  );
}
