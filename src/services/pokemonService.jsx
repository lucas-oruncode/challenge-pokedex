export const fetchPokemonData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching Pokémon!", error);
        return null;
    }
};


export const fetchPokemonDetail = async (pokemonId) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!res.ok) throw new Error("Sorry, Pokemon not found");
        return await res.json();
    } catch (error) {
        console.error("Error fetching Pokémon details!", error);
        return null;
    }
};
