let foodsContainer = document.getElementById("food-container")

fetch("/data")
  .then((response) => response.json())
  .then((foods) => {
    foods.forEach(food => {
        const foodList = document.createElement("li")
        foodList.textContent= `${food.name} - ${food.cuisine} - $${food.price}`;
        foodsContainer.appendChild(foodList)
    });
  });


  