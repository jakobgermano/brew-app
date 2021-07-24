const MAIN_URL = `https://api.openbrewerydb.org`

 document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('brews').addEventListener('click', grabBreweries)
    grabBreweries()
})

function grabBreweries() {
    let main = document.getElementById('main ul') //putting those elements from the html into variables to use later in the function
        let brewList = document.getElementById('brew-list')
        let info = document.getElementById('info')
    fetch(`https://api.openbrewerydb.org/breweries`)
        .then(res => res.json())
        .then(brewies => { 
            brewies.map(brew => {
                brewList.innerHTML += `
                    <li>
                       <a href="#" data-id="${brew.id}"> ${brew.name}</a>
                    </li>    
                `
            
            })
        linkClicks()
        })
    
}

function linkClicks() {
const brewies = document.querySelectorAll('li a')
        brewies.forEach(brew => {
        brew.addEventListener('click', showBrewery)
    })

}

async function showBrewery(e) {
    console.log(e.target)
    let info = document.getElementById('info')
    let brewList = document.getElementById('brew-list')
    brewList.innerHTML = ""
    fetch(`https://api.openbrewerydb.org/breweries/${e.target.dataset.id}`)
    .then(res => res.json())
    .then(brew => console.log(brew))

}