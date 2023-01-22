import Link from "next/link";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/83706868?s=400&u=bf2bf59f59bca0bf8899aac6922578d407532c0d&v=4"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          href="https://github.com/yasirobai99"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-3 text-sm md:text-base bg-[#00de7a] text-[#073042] hover:bg-[#073042] hover:text-[#00de7a] transition-all duration-[350ms] ease-out flex items-center rounded-lg text-center"
        >
          Follow me on Github <Image
          className="rounded-full"
          src="https://github.githubassets.com/images/icons/emoji/octocat.png"
          width={30}
          height={30}
          alt="logo"
          />
        </Link>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
