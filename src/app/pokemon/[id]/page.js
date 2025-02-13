'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        if (id) {
            fetchPokemonDetail(id);
        }
    }, [id]);

    const fetchPokemonDetail = async (pokemonId) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            if (!res.ok) throw new Error("Sorry, Pokemon not found");
            const data = await res.json();
            setPokemon(data);
        } catch (error) {
            console.error("Error on serch Pokemon detail", error);
        }
    };

    if (!pokemon) 
        return 
            <div className="bg-black">
             <p className="text-center mt-6">Loading...</p>;
            </div> 

    return (

        <div className="min-h-screen w-full bg-[url(/bg-img.jpg)] bg-cover bg-center bg-fixed flex flex-col items-center justify-center">
            <div className="bg-black/90 text-white py-4 min-w-[30%] border rounded-lg flex flex-col items-center">
                <h1 className="text-3xl border rounded-full p-4 font-bold capitalize mt-4">{pokemon.name}</h1>
                <img src={pokemon.sprites?.front_default} alt={pokemon.name} className="w-40" />
                <div className="flex flex-co justify-center mb-3">
                    {pokemon.types?.map((typeInfo, index) => (
                        <span key={index} className="border text-white text-lg p-2 mx-3  rounded-2xl capitalize">
                            {typeInfo.type.name}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between gap-5 m-3">
                    <p className="text-md">Height: {pokemon.height}</p>
                    <p className="md">Weight: {pokemon.weight}</p>
                </div>

                <div className="m-4 flex flex-col gap-3">
                    <h2 className="text-xl font-semibold">Skills</h2>
                    <ul className="list-disc list-inside">
                        {pokemon.abilities?.map((abilityInfo, index) => (
                            <li key={index} className="capitalize">{abilityInfo.ability.name}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <Link href="/" className="mt-6 block text-white hover:underline">Back</Link>
        </div>
    );
}
