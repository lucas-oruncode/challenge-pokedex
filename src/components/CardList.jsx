'use client';

import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { fetchPokemonData } from "@/services/pokemonService";


export default function CardList() {
    const [pokemonList, setPokemonList] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(30);
    const pokemonCache = useRef([]);
    useEffect(() => {
        loadPokemon();
    }, [limit]);

    const loadPokemon = async () => {
        if (loading) return;
        setLoading(true);

        const data = await fetchPokemonData(limit);
        if (data) {
            const uniquePokemon = data.results.filter(pokemon =>
                !pokemonCache.current.some(cached => cached.name === pokemon.name)
            );

            pokemonCache.current = [...pokemonCache.current, ...uniquePokemon];
            setPokemonList(pokemonCache.current);
        }

        setLoading(false);
    };

    const handleLoadMore = () => {
        setLimit(prevLimit => prevLimit + 30);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {pokemonList.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon} index={index} />
                ))}
            </div>

            {pokemonList.length > 0 && (
                <button
                    onClick={handleLoadMore}
                    className="flex justify-between text-center mt-6 mx-auto px-4 py-2 bg-red-800/75 text-white rounded-full shadow transition duration-500 hover:bg-red-800/90 hover:scale-110"
                    disabled={loading}
                >
                    {loading
                        ? <img src="/pokeball.svg" className="w-10 animate-spin" alt="Loading" />
                        : <img src="/pokeball.svg" className="w-10" alt="Load more" />
                    }
                </button>
            )}
        </div>
    );
}
