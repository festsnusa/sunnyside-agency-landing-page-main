let burger = document.querySelector('.header__burger'),
  list = document.querySelector('.header__list'),
  headerLinks = document.querySelectorAll('.header__link'),
  contact = document.querySelector('.header__button'),
  images = document.querySelectorAll('.images__item'),
  galleryImages = document.querySelectorAll('#gallery__image')
  mediaQuery = window.matchMedia("(min-width: 700px)")

let imagesCollection = [
  'graphic-design',
  'photography'
],

imagesGallery = [
  'milkbottles',
  'orange',
  'cone',
  'sugar-cubes'
]

function fillImages(device) {

  images.forEach((image, i) => {
    image.style.backgroundImage = `url("./images/${device}/image-${imagesCollection[i]}.jpg")`
  })

  galleryImages.forEach((pic, j) => {
    pic.src = `./images/${device}/image-gallery-${imagesGallery[j]}.jpg`
  })
}

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active')
  list.classList.toggle('header__list_active')
})


function changeVisibility() {

  if (mediaQuery.matches) {
    burger.classList.remove('header__burger_active')
    burger.classList.add('header__burger_invisible')
    list.classList.remove('header__list_active')
    list.classList.add('header__list_flex')
    contact.classList.add('header__button_flex')

    headerLinks.forEach(headerLink => {
      headerLink.classList.add('header__link_flex')
    })

    fillImages('desktop')

    return
  }

  burger.classList.remove('header__burger_invisible')
  list.classList.remove('header__list_active')
  list.classList.remove('header__list_flex')
  contact.classList.remove('header__button_flex')

  headerLinks.forEach(headerLink => {
    headerLink.classList.remove('header__link_flex')
  })

  fillImages('mobile')

}

mediaQuery.addEventListener("change", () => changeVisibility())
window.addEventListener('DOMContentLoaded', () => changeVisibility())