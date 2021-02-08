fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayFoods(data));


const displayFoods = foods => {
    const foodsDiv = document.getElementById('foods');
    foods.forEach(food =>{
        const foodDiv = document.getElementById('div');
        foodDiv.className = 'food';
        const foodInfo = `
        <h3 class = "food-name">${food.name}</h3>
        <p>${food.details}</p>
        <button onclick = "displayFoodDetail('${food.name}')">Details</button>
        `;
        countryDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
}
const displayFoodDetail = name =>{
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    fetch(url)
    .then(res => res.json())
    .then(data => renderFoodInfo(data[0]));
}
const renderFoodInfo = food =>{
    const foodDiv = document.getElementById('foodDetail');
    foodDiv..innerHTML = ``
    <h1>${food.name}</h1>
`
}