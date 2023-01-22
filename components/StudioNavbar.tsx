import Link from "next/link"
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function StudioNavbar(props: any) {
  return (
    <div>
    <div className=" flex items-center justify-between p-5">
<Link href="/" className="text-[#00de7a] flex items-center">
    <ArrowUturnLeftIcon className="h-6 w-6 text-[#00de7a] mr-2"/>
    Go to Website
</Link>

<div className=" hidden md:flex p-5 rounded-lg justify-center border-2 border-[#00de7a]">
    <h1 className=" font-bold text-white">
Want coding challenges & Solutions sent to your inbox daily?
👉
    </h1>
    <Link 
    href="https://yasirobai99.github.io/PortfolioWebsite"
    className="text-[#00de7a] font-bold ml-2">
        www.yasirobai99.com
    </Link>
</div>
    </div>
    <>{props.renderDefault(props)}</>
    </div>
);
};

export default StudioNavbar;
