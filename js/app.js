document.addEventListener('DOMContentLoaded',() => {
  console.log('JavaScript loaded');

  const entrySubmit = function(event) {
    event.preventDefault();

    const entry = document.createElement('li');
    entry.innerHTML =
    <div class=`${event.target.review.value}`></div>
    `<h1> ${event.target.title.value}</h1>
    <p>${event.target.type.value}</p>
    <p>${event.target.year.value}</p>
    <p>${event.target.review.value}</p>`

    const list = document.querySelector('#Movie-list');
    list.appendChild(entry);
    form.reset();


  }

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', entrySubmit)

  const handleDeleteAllClick = function (event) {
    event.preventDefault();
    const movieList = document.querySelector('#Movie-list');
    movieList.innerHTML = '';
  }

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);




  // const form = document.querySelector('#new-item-form')
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const movieList = document.querySelector('#Movie-list');
  //   const yearElement = document.createElement('li');
  //   const year = event.target.year.value;
  //   const title = document.createElement('li');
  //   const movieTitle = event.target.title.value;
  //   const typeElement = document.createElement('li');
  //   const type = event.target.type.value;
  //   const reviewElement = document.createElement('li');
  //   const review = event.target.review.value;
  //   title.textContent = movieTitle;
  //   yearElement.textContent = year;
  //   typeElement.textContent = type;
  //   reviewElement.textContent = review;
  //   movieList.appendChild(title);
  //   movieList.appendChild(yearElement);
  //   movieList.appendChild(typeElement);
  //   movieList.appendChild(reviewElement);
});
