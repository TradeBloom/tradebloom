import Image from 'next/image';
import LogoIcon from '../public/logo-icon.png';
import LogoText from '../public/logo-main.png';

const Header = () => {
  return (
    <header className="flex items-center gap-4 py-4 px-6 bg-black text-white">
      <Image src={LogoIcon} alt="Logo Icon" width={35} height={35} />
      <Image src={LogoText} alt="Logo Text" width={150} height={30} />
    </header>
  );
};
export default Header;