import { areaBox, categoryBox, foodImageBox, foodNameBox, ingredientListBox, tagListBox } from '../dom-elements.js';
import getMeal from '../meals/show';
import { popupBox } from '../dom-elements';

const displayIngredients = (meal = []) => {
  let index = 1;
  for (const props in meal) {
    if (meal.hasOwnProperty(props) && props.startsWith('strIngredient')) {
      const measure = meal['strMeasure' + index];
      ingredientListBox.innerHTML += meal[props] ? `<span>${meal[props]}(${measure})</span>` : '';
      index += 1;
    }
  }
};

const setText = (element, value = '') => element.innerHTML = value;
const setImage = (element, value = '', altText = '') => element.innerHTML = `<img src='${value}' class="meal-image" alt="${altText}">`;
const displayData = (meal) => {
  setImage(foodImageBox, meal.strMealThumb, meal.strMeal);
  setText(foodNameBox, meal.strMeal);
  setText(categoryBox, meal.strCategory);
  setText(areaBox, meal.strArea);
  setText(tagListBox, meal.strTags);
  displayIngredients(meal);
};

export const resetData = () => {
  const emptyString = '';
  setImage(foodImageBox);
  setText(foodNameBox);
  setText(categoryBox);
  setText(areaBox);
  setText(tagListBox);
  displayIngredients();
};
const showPopup = (id) => {
  getMeal(id).then((meal) => {
    displayData(meal);
  });
  popupBox.classList.toggle('d-none');
};

export default showPopup;