const showing = el => {
  var windowTop = window.scrollY
  var windowBottom = windowTop + window.innerHeight
  var elemTop = el.offsetTop
  var elemBottom = elemTop + el.offsetHeight
  return ((elemBottom <= windowBottom) && (elemTop >= windowTop))
}

window.onscroll = () => {
  const animations = document.getElementsByClassName('animation')
  for (x of animations) {
    if (showing(x)) {
      x.classList.remove('showOut')
      x.classList.add('showIn')
    } else {
      x.classList.remove('showIn')
      x.classList.add('showOut')
    }
    console.log(x.classList)
  }
}
