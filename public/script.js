
const apiKey = '76aa287b08634e9285b24e7ee4e6728b'; //  NewsAPI key
const latestposts = document.getElementById('latestposts');

async function fetchNews(category) {
  try {
    /*const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`);*/
    const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`);
    const data = await response.json();

    latestposts.innerHTML = ''; // Clear previous articles

    if (data.articles && data.articles.length > 0) {
      let row = document.createElement('div');
      row.classList.add('row');

      // Display only the latest 3 articles
      for (let index = 0; index < 3 && index < data.articles.length; index++) {
        const article = data.articles[index];
        
        const { title, description, url,publishedAt, urlToImage } = article;
        const limitedTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mx-auto', 'my-4'); // Use Bootstrap grid classes

        const latest = document.createElement('div');
        latest.classList.add('card');

        latest.innerHTML = `
          <div class="col-md-12 mb-md-0 p-md-4 food-img">
            <img src="${urlToImage}" class="w-100"  alt="${title}">
          </div>
          <div class="col-md-12 p-4 ps-md-0">
            <h5 class="mt-0 text-center" style="color: #b63434"><i class="fa-solid fa-calendar-days" style="color:orange"></i> ${publishedAt}</h5>
            <h5 class="mt-0 text-center" style="color: #b63434"> ${limitedTitle}</h5>
            <div class="text-center">
                <a href="${url}" target="_blank" class="stretched-link btn btn-primary">Read More</a>
            </div>

            

          </div>
        </div>`;

        col.appendChild(latest);
        row.appendChild(col);

        // Insert the row into the newsContainer every three cards
        if ((index + 1) % 3 === 0 || index === data.articles.length - 1) {
          latestposts.appendChild(row);
          row = document.createElement('div');
          row.classList.add('row');
        }
      }
    } else {
      console.log('No articles found in the response.');
    }
  } catch (error) {
    console.error('Error fetching or parsing news:', error);
  }
}

// Call fetchNews initially with a default category ('general')
window.onload = function () {
  fetchNews('general');
};



