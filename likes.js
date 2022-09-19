const CountryPTag = document.querySelector('#Country')
const animePTag = document.querySelector('#Countrys')
const reloadButton = document.querySelector('#reload-Country-button')
const likeButton = document.querySelector('#like-button')
const likedCountrysContainer = document.querySelector('#liked-Country')

let currentCountry = {}
let likedCountrys = []

function saveCountry() {
  if (!likedCountrys.includes(currentCountry)) {
    likedCountrys.push(currentCountry)
    

    function removeCountry(event) {
      event.target.remove()
      const removeCountrys = likedCountrys.filter(likedCountry => {
        return likedCountry !== currentCountry
      }
        )
        likedCountrys = removeAnimeCountrys
    } 


    const li = document.createElement('li')
    li.innerText = currentCountry.Country
    likedCountrysContainer.append(li)
    li.addEventListener('click', event => removeCountry(event))
  } else {
    alert('Opps! You already have that country!')
  }
}



reloadButton.addEventListener('click', getCountry)

getAnimeCountry()

likeButton.addEventListener('click', saveCountry)