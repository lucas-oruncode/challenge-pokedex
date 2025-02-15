'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
    const [value, setValue] = useState("");
    const router = useRouter();

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && value.trim() !== "") {
            router.push(`/pokemon/${value.trim().toLowerCase()}`);
        }
    };

    return (
        <div className=" flex justify-center">
            <input
                type="text"
                placeholder="PokeSearch"
                className="bg-white ml-12 w-[100px] h-[25px] md:min-h-[35px] md:min-w-[200px] p-2 mt-2 text-center rounded-full drop-shadow-xl"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
