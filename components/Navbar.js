import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">TradeBloom</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/bots">Bots</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}