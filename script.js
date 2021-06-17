const mealList = document.getElementById('meals');
mealList.addEventListener("click", mealDescription);
const mealsDiv = document.getElementById("meals");
const desDiv = document.getElementById("description");
let idNum = [];

// for loading food data and display
function loadData() {
    let div = document.getElementById('meals');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    const mealName = document.getElementById("input").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.meals.length; i++) {
                const div = document.createElement("div");
                div.className = "meal";

                const mealInfo = `
        <img id="${data.meals[i].idMeal}" class="mealImg" src="${data.meals[i].strMealThumb}">
        <h3 id="${data.meals[i].idMeal}">${data.meals[i].strMeal}</h3>`;
                div.innerHTML = mealInfo;
                mealsDiv.appendChild(div);
                idNum[i] = data.meals[i].idMeal;
                div.id = data.meals[i].idMeal;
            }
        })
        .catch(err => alert("Food is not available in our list"));
}


// for display food ingredients
function mealDescription(m) {
    const id = m.target.id;
    for (let i = 0; i < idNum.length; i++) {
        if (id == idNum[i]) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(data => {
                    const descriptionInfo = `
                Item Name : ${data.meals[0].strMeal}
                Ingredients :
                ${data.meals[0].strIngredient1} ${data.meals[0].strMeasure1}
                ${data.meals[0].strIngredient2} ${data.meals[0].strMeasure2}
                ${data.meals[0].strIngredient3} ${data.meals[0].strMeasure3}
                ${data.meals[0].strIngredient4} ${data.meals[0].strMeasure4}
                ${data.meals[0].strIngredient5} ${data.meals[0].strMeasure5}
                ${data.meals[0].strIngredient6} ${data.meals[0].strMeasure6}`;

                    window.alert(descriptionInfo);
                })
        }
    }
}