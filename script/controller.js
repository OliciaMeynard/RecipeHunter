import * as model from './model.js';
import SearchView from './view/searchView.js';
import PaginationView from './view/paginationView.js';
import RecipeView from './view/recipeView.js';
import ResultsView from './view/resultsView.js';
import paginationView from './view/paginationView.js';

const controlSearch = async () => {
  try {
    ResultsView.renderSpinner();
    RecipeView._clear();
    PaginationView._clear();
    const query = SearchView.getquery();
    if (!query) return;
    await model.loadResultsRecipe(query);
    // ResultsView.render(model.state.searchResults.results);
    ResultsView.render(model.getSearchViewPage());
    PaginationView.render(model.state.searchResults);
  } catch (err) {
    ResultsView.renderError();
  }
};

const controlRecipe = async () => {
  try {
    RecipeView._clear();
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    RecipeView.renderSpinner();
    await model.loadRecipeInfo(id);
    // console.log(model.state.recipeInfo);
    RecipeView.render(model.state.recipeInfo);
  } catch (err) {
    // RecipeView.renderError();
    ResultsView.renderError();
  }
};

const controlpagination = (goToPage) => {
  ResultsView.render(model.getSearchViewPage(goToPage));
  PaginationView.render(model.state.searchResults);
};

const init = () => {
  SearchView.addHandlerSearch(controlSearch);
  PaginationView.addHandlerClick(controlpagination);
  RecipeView.addHandlerRender(controlRecipe);
};
init();
