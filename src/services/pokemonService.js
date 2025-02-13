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
