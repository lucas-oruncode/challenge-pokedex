'use client';

import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { fetchPokemonData } from "@/services/pokemonService";
import Search from "./Search";


export default function CardList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=30");
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        loadPokemon(nextUrl);
    }, []);

    const pokemonCache = useRef([]);

    const loadPokemon = async (url) => {
        if (loading) return;
        setLoading(true);

        const data = await fetchPokemonData(url);
        if (data) {
            const uniquePokemon = data.results.filter(pokemon => 
                !pokemonCache.current.some(cached => cached.name === pokemon.name)
            );

            pokemonCache.current = [...pokemonCache.current, ...uniquePokemon];
            setPokemonList(pokemonCache.current);
            setNextUrl(data.next);
        }

        setLoading(false);
    };

    return (
        <div className="p-6">

            <Search />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {pokemonList.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} index={index} />
                ))}
            </div>
            {nextUrl && (
                <button 
                onClick={() => loadPokemon(nextUrl)} 
                className="flex justify-between text-center mt-6 mx-auto px-4 py-2 bg-red-800/75 text-white rounded-full shadow transition duration-500 hover:bg-red-800/90 hover:scale-110"
                >
                    {loading
                        ? <img src="/pokeball.svg" className="w-10 animate-spin" alt="Loading"></img>
                        : <img src="/pokeball.svg" className="w-10" alt="Loading list"></img>
                    }
                </button>
            )}
        </div>
    );
}
