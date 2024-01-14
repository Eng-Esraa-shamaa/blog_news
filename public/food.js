document.addEventListener('DOMContentLoaded', function () {
    const apiKey2 = '41868b502fcb461683436ebc3f534cfd'; // Replace with your Spoonacular API key
    const recipeContainer = document.getElementById('recipeContainer');
  
    async function fetchRecipes() {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=16&apiKey=${apiKey2}`);
        const data = await response.json();
  
        if (data.recipes && data.recipes.length > 0) {
          data.recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('col-md-8','col-sm-8', 'mx-auto', 'my-4');
  
            recipeCard.innerHTML = `
                    <div class="row g-0 bg-body-secondary position-relative">
                      <div class="col-md-6 mb-md-0 p-md-4 food-img">
                        <img src="${recipe.image}" class="w-100"  alt="${recipe.title}">
                      </div>
                      <div class="col-md-6 p-4 ps-md-0">
                        <h4 class="mt-0 text-center" style="color: #b63434">${recipe.title}</h4>
                        <p>${recipe.summary}</p>
                        <div class="text-center">
                        <a href="${recipe.sourceUrl}" target="_blank" class="stretched-link btn btn-primary">View Recipe</a>
                        </div>
                      </div>
                    </div>
            `;
  
            recipeContainer.appendChild(recipeCard);
          });
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    }
  
    fetchRecipes();
  });
  