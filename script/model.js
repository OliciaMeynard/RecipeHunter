import { getJson } from './config.js';

export const state = {
  searchResults: {
    query: '',
    results: [],
    resultsPerpage: 8,
    page: 1,
  },
  recipeInfo: {},
};

export const loadResultsRecipe = async (query) => {
  try {
    state.searchResults.query = query;
    const data = await getJson(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    state.searchResults.results = data.meals.map((recipe) => {
      return {
        id: recipe.idMeal,
        name: recipe.strMeal,
        img: recipe.strMealThumb,
      };
    });

    // console.log(data);
    // console.log(data.meals.map((food) => console.log(food.strMeal)));
    // console.log(state.searchResults.results);
    state.searchResults.page = 1;
  } catch (err) {
    throw err;
  }
};

export const loadRecipeInfo = async (id) => {
  try {
    const data = await getJson(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const [recipe] = data.meals;
    state.recipeInfo = {
      id: recipe.idMeal,
      name: recipe.strMeal,
      img: recipe.strMealThumb,
      inst: recipe.strInstructions,
      link: recipe.strYoutube,
      ing1: recipe.strIngredient1,
      ing2: recipe.strIngredient2,
      ing3: recipe.strIngredient3,
      ing4: recipe.strIngredient4,
      ing5: recipe.strIngredient5,
      ing6: recipe.strIngredient6,
      ing7: recipe.strIngredient7,
      ing8: recipe.strIngredient8,
    };

    console.log(state.recipeInfo);
  } catch (err) {
    throw err;
  }
};

export const getSearchViewPage = (page = state.searchResults.page) => {
  state.searchResults.page = page;
  const start = (page - 1) * state.searchResults.resultsPerpage;
  const end = page * state.searchResults.resultsPerpage;
  return state.searchResults.results.slice(start, end);
};
