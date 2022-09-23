import View from './view.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.resultsContainer');
  _errorMessage = 'Recipe not found, Please Try again';

  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    return `
    <a class="food-info-container" href="#${result.id}">
    <img
      class="food-info-img"
      src="${result.img}"
      alt=""
    />
    <div class="food-info">
      <h3 class="tertiary-header">${result.name}</h3>
    </div>
  </a>`;
  }
}

export default new ResultsView();
