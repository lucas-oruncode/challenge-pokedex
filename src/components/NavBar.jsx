import Link from "next/link";
import Search from "./Search";

export default function NavBar() {
    return (
        <div className="bg-red-800 min-w-[100%] p-4 flex justify-between">            
            <Link href="/">
                <img 
                className="max-w-250 max-h-[60px] mx-5" 
                src="/banner.png" 
                alt="Home" 
                />
            </Link>
            <Search />
        </div>
    );
}