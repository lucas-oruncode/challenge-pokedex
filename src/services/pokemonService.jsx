const url = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemonData = async (limit) => {
    try {
        const res = await fetch(`${url}?limit=${limit}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching Pokémon!", error);
        return null;
    }
};


export const fetchPokemonDetail = async (pokemonId) => {
    try {
        const res = await fetch(`${url}/${pokemonId}`);
        if (res.status === 404) {
            return null;
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching Pokémon details!", error);
        return null;
    }
};
