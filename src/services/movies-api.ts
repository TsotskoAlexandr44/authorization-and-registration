const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '98821d28938ee5f201a6b9b7afe95fef';

export const URL = 'https://image.tmdb.org/t/p/w500';

async function apiService(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending(page: number | string) {
  return apiService(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
}
