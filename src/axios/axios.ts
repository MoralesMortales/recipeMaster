import axios from 'axios';

const token =  "fcf2aa3295f5415f8d878715ffb2433f";

export const getRecipesByIngredients = async (ingredients: string[]) => {
  if (!ingredients || ingredients.length === 0) {
    throw new Error('Debes proporcionar al menos un ingrediente');
  }

  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
      params: {
        ingredients: ingredients.join(','),
        number: 10,
        ranking: 1,
        ignorePantry: true
      },
      headers: {
        'x-api-key': token      
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('No se pudieron obtener las recetas. Por favor intenta nuevamente.');
  }
}

export const getRecipeById = async (id: number) => {
  if (!id) {
    throw new Error('Debes proporcionar un ID de receta válido');
  }

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: {
        includeNutrition: false // Puedes cambiar a true si necesitas datos nutricionales
      },
      headers: {
        'x-api-key': token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw new Error('No se pudo obtener la receta. Por favor intenta nuevamente.');
  }
}
