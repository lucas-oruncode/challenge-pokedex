'use client'

import Link from "next/link";

export default function Card({ pokemon, index }) {
    return (
        <div>
            <Link href={`/pokemon/${index + 1}`} className="hover:border-white">
                <div className="bg-black/90 text-white border border-gray-700 p-4 md:p-6 rounded-lg shadow-md text-center transition duration-500 hover:shadow-xl hover:border-white hover:scale-110">
                    <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
                        alt={pokemon.name} 
                        className="w-20 h-20 mx-auto" 
                    />
                    <p className="capitalize text-md lg:text-lg font-semibold">{pokemon.name}</p>
                </div>
            </Link>
        </div>
    );
};