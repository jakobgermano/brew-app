const MAIN_URL = `https://api.openbrewerydb.org`

 document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('brews').addEventListener('click', grabBreweries)
    grabBreweries()
})

function grabBreweries() {
    let main = document.getElementById('main ul') //putting those elements from the html into variables to use later in the function
        let brewList = document.getElementById('brew-list')
        let info = document.getElementById('info')
        info.innerHTML = ""
        brewList.innerHTML = ""
    fetch(`https://api.openbrewerydb.org/breweries`)
        .then(res => res.json())
        .then(brewies => { 
            brewies.map(brew => {
                brewList.innerHTML += `
                    <li>
                       <a href="#" data-id="${brew.id}"> ${brew.name}</a>
                       <button data-likes="0" id="${brew.id}" class="buttons">fav</button>
                    </li>    
                ` 
            })
        linkClicks()
        })
    
}

function linkClicks() {
const favButtons = document.querySelectorAll('button.buttons')
favButtons.forEach(brew => {
    brew.addEventListener('click', favBrew)
})

const brewies = document.querySelectorAll('li a')
        brewies.forEach(brew => {
        brew.addEventListener('click', showBrewery)
    })

}

function favBrew(e){
    //console.log(e.target.parentElement)
    const li = e.target.parentElement
    const button = e.target
    const likes = li.querySelector('p')
    button.dataset.likes ++ 
    if (likes === null ) {
        li.insertAdjacentHTML('beforeend', `<p id ='likes'> favs: ${button.dataset.likes}</p>`)
    }else {
        likes.innerText = `likes: ${button.dataset.likes}`
    }
    
}

async function showBrewery(e) {
    console.log(e.target)
    let info = document.getElementById('info')
    let brewList = document.getElementById('brew-list')
    brewList.innerHTML = ""
    fetch(`https://api.openbrewerydb.org/breweries/${e.target.dataset.id}`)
    .then(res => res.json())
    .then(brew => {
        info.innerHTML += `
            <h1>${brew.name}</h1>
            <h3>Location:</h3>
            <p>${brew.state}</p>
        `
    })

}