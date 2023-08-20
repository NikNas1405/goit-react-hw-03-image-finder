import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38138009-0f6c3d6b3a80b2eb535996fd8';

const defaultParams = {
  key: API_KEY,
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function getAsked(searchRequest, page) {
  const options = new URLSearchParams({
    ...defaultParams,
    q: `${searchRequest}`,
    page: page,
  });
  try {
    const response = await axios.get(`${BASE_URL}?${options}`);
    return response.data;
  } catch (error) {
    toast.info(
      'Sorry. There are no images matching your search query. Please try again.'
    );
  }
}
//====================================================

// const defaultParams = {
//   key: API_KEY,
//   per_page: 12,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// };

// export const getAsked = async (searchRequest, page) => {
//   const response = await axios.get(`${BASE_URL}`, {
//     params: {
//       ...defaultParams,
//       q: searchRequest,
//       page: page,
//     },
//   });
//   return response.data;
// };

//=================================================
// export const getAsked = async (searchRequest, page) => {
//   return await axios.get(`${BASE_URL}`, {
//     params: {
//       key: API_KEY,
//       q: searchRequest,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: page,
//       per_page: 12,
//     },
//   });
// };

//========================================================
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// const defaultParams = {
//   key: '38138009-0f6c3d6b3a80b2eb535996fd8',
//   per_page: 12,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
// };

// export async function getAsked(value, page) {
//   const params = {
//     ...defaultParams,
//     q: value,
//     page: page,
//   };
//   const response = await axios.get('', { params });
//   return response.data;
// }
//=====================================================================================
//   fetch(
//             `${BASE_URL}?key=${API_KEY}&q=${newValue}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
//       )
//         .then(res => {
//           //             if (!res.ok) {
//           //     throw new Error(res.status);
//           //   }
//           //   return res.json();

//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(
//             new Error(`Картинок за Вашим запитом ${newValue} не знайдено  `)
//           );
//         })
//         //   .then(images => {
//         //   this.setState(prevState => ({
//         //     images:
//         //       page === 1 ? images.hits : [...prevState.images, ...images.hits],
//         //     status: 'resolved',
//         //     totalPages: Math.floor(images.totalHits / 12),
//         //   }));
//         // })

//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
