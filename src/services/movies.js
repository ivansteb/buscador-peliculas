const API_KEY = 'e9b44202';

export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search;

        // Para no utilizar la API en componentes muy profundos:
        return movies?.map(movie => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster
        }))
    } catch (e) {
        throw new Error('Error buscando películas');
    }
    
}