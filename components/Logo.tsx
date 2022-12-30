import Image from "next/image";
function Logo(props: any) {
    const { renderDefault, title } = props;
  return (
    <div className=" flex items-center space-x-2">
<Image 
className=" rounded-full object-cover"
height={50}
width={50}
src="https://avatars.githubusercontent.com/u/83706868?s=400&u=bf2bf59f59bca0bf8899aac6922578d407532c0d&v=4"
alt="logo"
/>
<>{renderDefault(props)}</>
    </div>
  );
}

export default Logo