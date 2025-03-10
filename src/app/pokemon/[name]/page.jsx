'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPokemonDetail } from "@/services/pokemonService";
import typeColors from "@/utils/typeColors";
import DetailError from "@/components/PokemonDetailError";
import BackButton from "@/components/BackButton";

export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getPokemon = async () => {
            try {
                if (name) {
                    const data = await fetchPokemonDetail(name);
                    if (!data) {
                        throw new Error("Pokemon not found!");
                    }
                    setPokemon(data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPokemon();
    }, [name]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <img src="/pokeball.svg" className="w-20 animate-spin" alt="Loading" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center p-6">
                <DetailError />    
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-[url(/bg-img.jpg)] bg-cover bg-center bg-fixed flex flex-col items-center justify-center p-6">
            <div className="bg-black/70 backdrop-blur-lg text-white border p-6 rounded-2xl shadow-lg min-w-[90%] md:min-w-[60%] lg:min-w-[40%] flex flex-col items-center">

                <h1 className="text-4xl font-bold capitalize mt-4 border-b-2 border-white pb-2">
                    {pokemon.name}
                </h1>

                <div className="relative mt-6">
                    <img
                        src={pokemon.sprites?.other["official-artwork"].front_default}
                        alt={pokemon.name}
                        className="w-40 drop-shadow-lg "
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {pokemon.types?.map((typeInfo, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 rounded-full text-sm capitalize shadow-md text-white font-semibold"
                            style={{ backgroundColor: typeColors[typeInfo.type.name] || "#777" }}
                        >
                            {typeInfo.type.name}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center w-[40%] mt-4 gap-2 text-md">
                    <p className="px-4 py-2 bg-white/10 rounded-lg shadow-md">
                        <strong>Height:</strong> {pokemon.height}
                    </p>
                    <p className="px-4 py-2 bg-white/10 rounded-lg shadow-md">
                        <strong>Weight:</strong> {pokemon.weight}
                    </p>
                </div>

                <div className="mt-6 text-center w-full">
                    <h2 className="text-xl font-semibold mb-3">Abilities</h2>
                    <ul className="grid grid-cols-2 gap-3 text-sm">
                        {pokemon.abilities?.map((abilityInfo, index) => (
                            <li key={index} className="capitalize bg-white/10 px-3 py-2 rounded-md shadow-md">
                                {abilityInfo.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
           <BackButton pathToReturn="/" />
        </div>
    );
}
