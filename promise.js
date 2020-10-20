import axios from 'axios'

export const DataFromApi = (url) => {
  return axios.get(url)
  .then(({ data }) => {
      return data;
  });
}
 