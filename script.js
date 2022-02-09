document.addEventListener("DOMContentLoaded", function () {

  const nav = document.getElementById('nav')
  var desc = document.getElementById('desc')

  var position = desc.offsetTop - desc.offsetHeight

  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st >= position) {
      nav.classList.add("hide_navbar")
    } else if (st < position) {
      nav.classList.remove("hide_navbar")
    }
    position = st;
  })

  let caseCards = document.getElementById('caseCards')
  for (let i in dataList) {
    let card = document.createElement('div')
    let a = document.createElement('a')
    let div = document.createElement('div')
    let image = document.createElement('img')
    let content = document.createElement('div')
    let h5 = document.createElement('h5')
    let p = document.createElement('p')

    card.classList.add('card')
    div.classList.add('cardImage_container')

    image.src = dataList[i].image
    image.classList.add('cardImage')

    content.classList.add('design_card_content')

    h5.innerText = dataList[i].title
    p.innerText = dataList[i].description

    caseCards.appendChild(card)
    card.appendChild(a)
    a.appendChild(div)
    a.appendChild(content)
    div.appendChild(image)
    content.appendChild(h5)
    content.appendChild(p)
  }
})