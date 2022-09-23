import View from "./view.js";

class RecipeView extends View {
  _parentEl = document.querySelector(".recipe-container");
  _errorMessage = "Recipe not found, Please Try again";

  _message = "";
  _generateMarkup() {
    this._clear();
    return `
    <div class=" recipe-inner-container grid grid--2-cols">
    <a class="recipe-close-btn" href="#">&times;</a>
    <div class="recipe-header-div">
    <h2 class="secondary-header">${this._data.name}</h2>
    </div>
    <div class="recipe-info">
      <img
        class="recipe-img"
        src="${this._data.img}"
        alt="food image"
      />
      </div>


      <div class="instructions">
            <div>
            <h3>INGREDIENTS</h3>
            <div class="ingredients-list">
            <p>${this._data.ing1}, ${this._data.ing2}, 
            ${this._data.ing3}, ${this._data.ing4}, ${this._data.ing5},
             ${this._data.ing6}, ${this._data.ing7}, ${this._data.ing8}</p>
 
            </div>
            </div>
            <h3 class="tertiary-header">INSTRUCTIONS</h3>
            <p class="recipe-instructions">
            ${this._data.inst}
            </p>

            <div class="youtube-div">
             <a class="icon-link" href="${this._data.link}"> <img class="youtube-icon" src="img/youtube.png" alt="yt icon"/>Click to watch Video cooking tutorial</a>
            </div>

       </div>
      
    </div>
    `;
  }

  addHandlerRender(handler) {
    ["load", "hashchange"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
}

export default new RecipeView();
