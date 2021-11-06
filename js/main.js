const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  });
});

const domains = document.querySelectorAll('.price');
domains.forEach(item => {
  item.addEventListener('click', function () {
    domains.forEach(item => item.classList.remove('badge--secondary'));
    item.classList.add('badge--secondary');
    const selected = item.innerHTML;
    console.log(selected);
  });
});
