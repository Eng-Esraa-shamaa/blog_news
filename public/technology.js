const sites = ['stackoverflow', 'askubuntu', 'superuser']; // List of Stack Exchange sites

function fetchStackExchangePosts() {
  sites.forEach(site => {
    const url2 = `https://api.stackexchange.com/2.3/questions?site=${site}`;

    fetch(url2)
      .then(response => response.json())
      .then(data => displayPosts(data, site))
      .catch(error => console.error('Error:', error));
  });
}

// Function to display default Stack Exchange posts
function displayDefaultPosts() {
  // Clear existing posts before displaying default ones
  const postsList = document.getElementById('postsList');
  postsList.innerHTML = '';

  // Fetch and display default posts
  fetchStackExchangePosts('');
}
/********************* */

function displayPosts(data, site) {
  const postsList = document.getElementById('postsList');

  const siteHeader = document.createElement('h2');
  siteHeader.textContent = `Posts from ${site}`;
  postsList.appendChild(siteHeader);

  const posts = data.items.slice(0, 10); // Display only top 5 posts

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('col-md-6', 'mb-4', 'post-box');

    const postTitle = document.createElement('h5');
    postTitle.classList.add('post-title');
    postTitle.textContent = post.title;

    const postLink = document.createElement('a');
    postLink.classList.add('post-link');
    postLink.href = post.link;
    postLink.target = '_blank';
    postLink.textContent = 'Read more';

    postElement.appendChild(postTitle);
    postElement.appendChild(postLink);
    postsList.appendChild(postElement);
  });
}

$(document).ready(function() {
  fetchStackExchangePosts();
   
});