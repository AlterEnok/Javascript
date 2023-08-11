export function finishList() {
  const categoriesList = document.querySelector('.categories');

  for (let i = 1; i <= 8; i++) {
    const listItem = document.createElement('li');
    listItem.classList.add('tool');
    listItem.textContent = `Item ${i}`;

    categoriesList.append(listItem);
  }
}

finishList();
