const MAIN_URL = `https://api.openbrewerydb.org`

 document.addEventListener('DOMContentLoaded', () =>{
    //document.getElementById('brews').addEventListener('click', grabBreweries)
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

        })
    
}