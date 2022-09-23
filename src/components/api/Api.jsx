import axios from 'axios';
const KEY = '29353874-6524bfeaf443742d489eb2baf';
const URL = 'https://pixabay.com/api/';

export const ApiServise = async (query, apiDataService, page) => {
  await axios
    .get(
      `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(data => apiDataService(data))
    .catch(error => {
      console.log(error);
    });
};
