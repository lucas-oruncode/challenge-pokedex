import Link from "next/link";
import Search from "./Search";

export default function NavBar() {
    return (
        <div className="bg-red-800 min-w-[100%] p-4 flex justify-between">            
            <Link href="/">
                <img 
                className="h-[35px] md:min-w-[px] md:min-h-[50px] mx-5" 
                src="/banner.png" 
                alt="Home" 
                />
            </Link>
            <Search />
        </div>
    );
}