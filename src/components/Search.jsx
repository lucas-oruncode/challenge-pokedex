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
                placeholder="Search Pokemon..."
                className="bg-white max-h-[40px] min-w-[30px] p-2 mt-2 text-center rounded-full drop-shadow-xl"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
