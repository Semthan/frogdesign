document.addEventListener("DOMContentLoaded", function () {

  const nav = document.getElementById('nav')
  var desc = document.getElementById('desc')
  let backToTop = document.getElementById('btt')

  var position = desc.offsetTop - desc.offsetHeight

  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st >= position) {
      nav.classList.add("hidden")
      backToTop.classList.remove('hidden')
    }
    if (st <= position) {
      nav.classList.remove("hidden")
    }
    if (st <= 100) {
      backToTop.classList.add('hidden')
    }
    position = st;
  })

  let caseCards = document.getElementById('caseCards')
  for (let i in CardsList) {
    let card = document.createElement('div')
    let a = document.createElement('a')
    let div = document.createElement('div')
    let image = document.createElement('img')
    let content = document.createElement('div')
    let h5 = document.createElement('h5')
    let p = document.createElement('p')

    card.classList.add('card')
    div.classList.add('cardImage_container')

    image.src = CardsList[i].image
    image.classList.add('cardImage')

    content.classList.add('design_card_content')

    h5.innerText = CardsList[i].title
    p.innerText = CardsList[i].description

    caseCards.appendChild(card)
    card.appendChild(a)
    a.appendChild(div)
    a.appendChild(content)
    div.appendChild(image)
    content.appendChild(h5)
    content.appendChild(p)
  }

  let workSection = document.getElementById('ws')
  let btnContainer = document.createElement('div')
  let button = document.createElement('button')

  btnContainer.classList.add('load_more')
  button.classList.add('load_more_btn')

  button.innerText = 'Load More'

  workSection.appendChild(btnContainer)
  btnContainer.appendChild(button)

  button.addEventListener('click', function () {
    button.innerText = 'Loading..'
  })

  let sectors = document.getElementById('sectors_btn')
  let cap = document.getElementById('cap_btn')
  let sectorsDropdown = document.getElementById('sectors_dropdown')
  let capDropdown = document.getElementById('cap_dropdown')
  let closed = true
  sectors.addEventListener('click', function () {
    if (closed) {
      sectorsDropdown.classList.remove('hidden')
      capDropdown.classList.add('hidden')
      closed = false
    } else {
      sectorsDropdown.classList.add('hidden')
      closed = true
    }
  })

  cap.addEventListener('click', function () {
    if (closed) {
      capDropdown.classList.remove('hidden')
      sectorsDropdown.classList.add('hidden')
      closed = false
    } else {
      capDropdown.classList.add('hidden')
      closed = true
    }
  })
})