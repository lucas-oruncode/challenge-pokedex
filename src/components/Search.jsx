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
        <div className="mb-4 flex justify-center">
            <input
                type="text"
                placeholder="Search Pokémon and Press Enter"
                className="bg-white w-80 min-w-50 mb-10 p-2 mt-3 text-center rounded-full drop-shadow-xl"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
