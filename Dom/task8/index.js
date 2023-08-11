export function finishList() {
  const list = document.querySelector('.list');

  for (let i = 1; i <= 8; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;

    list.append(listItem);

    if (i === 1) {
      const firstItem = document.createElement('li');
      firstItem.textContent = '1 - before';
      list.prepend(firstItem);
    }

    if (i === 6) {
      const newItem = document.createElement('li');
      newItem.textContent = '6 - after special';
      const specialItem = document.querySelector('.special');
      specialItem.after(newItem);
    }
  }
}

finishList();
