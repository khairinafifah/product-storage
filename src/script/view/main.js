import '../component/cocktail-list.js';
import '../component/nav-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector("nav-bar");
  const cocktailListElement = document.querySelector("cocktail-list");

  // const onButtonSearchClicked = async () => {
  //   try {
  //     const result = await DataSource.searchRecipe(searchElement.value);
  //     renderResult(result);
  //   } catch (message) {
  //     fallbackResult(message)
  //   }
  // };

  const onButtonSearchClicked = () => {
    DataSource.searchRecipe(searchElement.value)
    .then(renderResult)
    .catch(fallbackResult)
  };

  const renderResult =  results => {
    cocktailListElement.drinks = results;
  };

  const fallbackResult = message => {
    cocktailListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;