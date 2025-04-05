import axios from 'axios';

const API_KEY = '49632098-24a72905d1eb262516a3f1210';

// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
async function getImagesByQuery(query, page, perPage) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      per_page: perPage,
      page: page,
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}

export { getImagesByQuery };
