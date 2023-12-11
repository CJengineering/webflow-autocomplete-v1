export const selected = (text: string) => {

const dropdownList = document.getElementById('w-dropdown-list-0') as HTMLDivElement;
  const list = document.querySelector('[cj-att="list"]') as HTMLElement;
  const listItems = list.querySelectorAll('[role="listitem"]') as NodeListOf<HTMLElement>;
  console.log('this is the ', list, listItems);
  const dropdownOptions = dropdownList.querySelectorAll('[cj-attr="num"]');
  dropdownOptions.forEach((option) => {
    option.addEventListener('click', () => {
      // Remove the 'selected' class from all options
      dropdownOptions.forEach((opt) => opt.classList.remove('selected'));
      // Add the 'selected' class to the clicked option
      option.classList.add('selected');
      filterListItems();
    });
  });
  const dropdown = document.querySelector('[cj-att="num"]') as HTMLInputElement;
  const textInput = document.querySelector('[cj-att="input"]') as HTMLInputElement;
  const filterListItems = () => {
    const city = textInput.value.toLowerCase();

    listItems.forEach((item) => {
      const text = item.innerText.toLowerCase();
      const isMatch = text.includes(city);
      item.style.display = isMatch ? 'block' : 'none';
    });
  };
  textInput.addEventListener('input', filterListItems);
};
