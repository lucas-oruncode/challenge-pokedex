'use client'

import { useState, useEffect } from "react";
import Card from "./Card";

export default function CardList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=30");
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetchPokemon(nextUrl);
    }, []);

    const fetchPokemon = async (url) => {
        if (loading) return;
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setPokemonList((prev) => [...prev, ...data.results]);
                       setNextUrl(data.next);
        } catch (error) {
            console.error("Error to Search Pokemon!", error);
        }
        setLoading(false);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {pokemonList.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} index={index} />
                ))}
            </div>
            {nextUrl && (
                <button 
                onClick={() => fetchPokemon(nextUrl)} 
                className="flex justify-between text-center mt-6 mx-auto px-4 py-2 bg-red-800/75 text-white rounded-full shadow transition duration-500 hover:bg-red-800/90 hover:scale-110"
                >
                    {loading
                        ?
                        <img src="/pokeball.svg" className="w-10 animate-spin" alt="Loading list"></img>
                        :
                        <img src="/pokeball.svg" className="w-10" alt="Loading list"></img>
                    }
                </button>
            )}
        </div>
    );
}
