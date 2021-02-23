const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const searchButton = document.getElementById('submit')
const input = document.getElementById('search-input')
const list = document.querySelector("#list")

searchButton.addEventListener('click', handleSearch)

function handleSearch(event) {
    // event.target.previousElementSibling.value
    const searchTerm = input.value
    makeApiCall(searchTerm)
}


function makeApiCall(term) {
    // console.log(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    // console.log(baseUrl + term)
    fetch(baseUrl + term)
        .then(r => r.json())
        // .then(doSomething)
        .then(data => {
            let newMeals = data.meals.slice(0, 10)
            newMeals.forEach(m => {
                // let li = document.createElement("li")
                // li.innerText = m.strMeal
                // li.id = m.idMeal
                // list.append(li)
                list.innerHTML += `<li id="${m.idMeal}"> ${m.strMeal} </li>`
            })
        })
    // .catch is incase of errors
    // .catch(e => console.log(e))

}


// function doSomething(data) {
//     let newMeals = data.meals.slice(0, 10)
//     newMeals.forEach(m => {
//         // let li = document.createElement("li")
//         // li.innerText = m.strMeal
//         // li.id = m.idMeal
//         // list.append(li)
//         list.innerHTML += `<li id="${m.idMeal}"> ${m.strMeal} </li>`
//     })
// }