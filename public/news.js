/*const apiKey = '76aa287b08634e9285b24e7ee4e6728b'; // Replace with your NewsAPI key
const newsContainer = document.getElementById('newsContainer');

async function fetchNews(category) {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);
    const data = await response.json();

    newsContainer.innerHTML = ''; // Clear previous articles

    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('card');

        const { title, description, url, urlToImage } = article;

        newsArticle.innerHTML = `
          <h2>${title}</h2>
          <img src="${urlToImage || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${title}">
          <div class="card-body">
          <p class = "card-text">${description || 'No description available'}</p>     
          </div>
          <a href="${url}" target="_blank" class="card-link">Read more</a>
        `;
        newsContainer.appendChild(newsArticle);
      });
    } else {
      console.log('No articles found in the response.');
    }
  } catch (error) {
    console.error('Error fetching or parsing news:', error);
  }
}

// Call fetchNews initially with a default category (e.g., 'general')
window.onload = function() {
  fetchNews('general');
}; */
const apiKey = '76aa287b08634e9285b24e7ee4e6728b'; // Replace with your NewsAPI key
const newsContainer = document.getElementById('newsContainer');

async function fetchNews(category) {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);
    const data = await response.json();

    newsContainer.innerHTML = ''; // Clear previous articles

    if (data.articles && data.articles.length > 0) {
      let row = document.createElement('div');
      row.classList.add('row');

      data.articles.forEach((article, index) => {
        const { title, description, url, urlToImage } = article;

        const col = document.createElement('div');
        col.classList.add('col-md-8', 'mx-auto', 'my-4'); // Use Bootstrap grid classes

        const newsArticle = document.createElement('div');
        newsArticle.classList.add('card');

        newsArticle.innerHTML = `
          <img src="${urlToImage}" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description || 'No description available'}</p>
            <a href="${url}" target="_blank" class="btn btn-primary">Read more</a>
          </div>
        `;

        col.appendChild(newsArticle);
        row.appendChild(col);

        // Insert the row into the newsContainer every three cards
        if ((index + 1) % 3 === 0 || index === data.articles.length - 1) {
          newsContainer.appendChild(row);
          row = document.createElement('div');
          row.classList.add('row');
        }
      });
    } else {
      console.log('No articles found in the response.');
    }
  } catch (error) {
    console.error('Error fetching or parsing news:', error);
  }
}

// Call fetchNews initially with a default category (e.g., 'general')
window.onload = function () {
  fetchNews('general');
};
