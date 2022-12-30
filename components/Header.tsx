import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2">
<Link href="/">
    <Image 
    className=" rounded-full"
    src="https://avatars.githubusercontent.com/u/83706868?s=400&u=bf2bf59f59bca0bf8899aac6922578d407532c0d&v=4"
    width={50}
    height={50}
    alt="logo"
    />
</Link>
<h1>The Bl-og</h1>
        </div>
        <div>
            <Link
            href="https://github.com/yasirobai99"
            className="px-5 py-3 text-sm md:text-base bg-[#073042] text-[#00de7a] flex items-center rounded-full text-center">
                Follow me on Github
            </Link>
        </div>
    </header>
  )
}

export default Header