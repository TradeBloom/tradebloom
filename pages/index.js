
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <Image
        src="/logo-main.png"
        alt="TradeBloom Logo"
        width={360}
        height={100}
        className="mb-6"
      />
      <Image
        src="/logo-animated.gif"
        alt="Animated Logo"
        width={80}
        height={80}
      />
    </div>
  );
}
