import View from './view.js';
class PaginationView extends View {
  _parentEl = document.querySelector('.page-btn-container');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', (e) => {
      e.preventDefault();
      const clicked = e.target.closest('.btn-page');
      if (!clicked) return;
      const goToPage = +clicked.dataset.gotopage;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curpage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerpage
    );

    if (curpage === 1 && numPages > 1) {
      return ` <button class="btn-page next" data-gotopage="${
        curpage + 1
      }">NEXT ${curpage + 1}</button>`;
    }

    if (curpage > 1 && curpage === numPages) {
      return ` <button class="btn-page prev" data-gotopage="${
        curpage - 1
      }">PREV ${curpage - 1}</button>`;
    }

    if (curpage > 1 && curpage < numPages) {
      return ` 
      <button class="btn-page next" data-gotopage="${curpage - 1}">PREV ${
        curpage - 1
      }</button>
      
      <button class="btn-page next" data-gotopage="${curpage + 1}">NEXT ${
        curpage + 1
      }</button>
      `;
    }

    return '';
  }
}

export default new PaginationView();
