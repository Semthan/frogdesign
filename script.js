document.addEventListener("DOMContentLoaded", function () {

  const nav = document.getElementById('nav')
  var desc = document.getElementById('desc')

  var position = desc.offsetTop /* - desc.offsetHeight */

  window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st >= position) {
      nav.classList.add("hide_navbar")
    } else if (st < position) {
      nav.classList.remove("hide_navbar")
    }
    position = st;
  })

  fetch("/cards.json")
    .then(res => res.json())
    .then((data) => {
      for (let cards in data) {
        console.log(data[cards])
      }
    })

})