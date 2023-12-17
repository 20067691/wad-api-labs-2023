export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ae562bd9ca69b1fa973c82b1dea258c6&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };