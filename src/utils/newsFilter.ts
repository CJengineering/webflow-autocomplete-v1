import { restartWebflow } from '@finsweet/ts-utils';

export const newsFilter = (name: string ) => {

  const sources = document.querySelectorAll(`[cj-attr="${name}"]`);
  console.log('this is the sources', sources.length);

  const input = document.querySelector(`[cj-attr-input="${name}"]`) as HTMLInputElement;

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const inputValue = target.value.toLowerCase();
    console.log('this is the input value', inputValue);
    sources.forEach((source) => {
      const sourceText = source.textContent?.toLowerCase() || '';
      const isMatch = sourceText.includes(inputValue);

      console.log('PARENT', source, 'TEXT', sourceText, 'MATCH', isMatch);
      if (inputValue === '') {
        (source as HTMLElement).style.display = 'block';
      } else if (isMatch) {
        (source as HTMLElement).style.display = 'block';
      } else {
        (source as HTMLElement).style.display = 'none';
      }
    });
  };

  input.addEventListener('input', handleInput);
};
