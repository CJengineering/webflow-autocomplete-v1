import { newsFilter } from './newsFilter';

export const initializeDynamicFilters = () => {
  // Find all input fields with the 'example-data' attribute
  const inputs = document.querySelectorAll('input[cj-attr-input]');
  console.log('Inputs ', inputs);
  inputs.forEach((input) => {
    const attrValue = input.getAttribute('cj-attr-input');
    if (attrValue) {
      console.log('Input names ', attrValue);
      newsFilter(attrValue);
    }
  });
};
