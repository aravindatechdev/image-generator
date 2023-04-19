import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      {/* Left  */}
      <div className="flex space-x-2 items-center">
        <Image
          src={'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png'}
          alt="logo"
          height={30}
          width={30}
        />
        <div>
          <h1 className="font-bold">OPEN <span className="text-violet-500">AI</span> Image Generator </h1>
          <h2 className="text-xs">
            Tech stack DALL - E 2, Chat GPT & Azure
          </h2>
        </div>
      </div>

      {/* Right */}
      <div className="flex text-sm md:text-base divide-x items-center text-gray-600">
        <Link className="px-2 font-light text-right" href={"https://www.google.com"}>
          Web Development
        </Link>
        <Link className="px-2 font-light" href={"https://github.com/aravindatechdev/image-generator"}>
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;