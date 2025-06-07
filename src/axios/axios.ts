import axios from 'axios';

const token =  "fcf2aa3295f5415f8d878715ffb2433f";
export const getData = () => {
  axios.get('https://api.spoonacular.com/recipes/complexSearch', {
    params: {
      query: 'pasta',
      maxFat: 25,
      number: 2
    },
    headers: {
      'x-api-key': token 
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
