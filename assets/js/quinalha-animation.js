const animations = document.getElementsByClassName('animation')

const showing = el => {
  const windowTop = window.scrollY
  const windowBottom = windowTop + window.innerHeight
  let elemTop = el.offsetTop
  let elemBottom = elemTop + el.offsetHeight
  return ((elemBottom >= windowBottom) || (elemBottom <= windowTop)) && ((elemTop <= windowTop) || (elemTop >= windowBottom))
}

window.onscroll = () => {
  for (x of animations) {
    if (!showing(x)) {
      x.classList.remove(x.dataset.leaveAnimate)
      x.classList.add(x.dataset.enterAnimate)
    } else {
      x.classList.remove(x.dataset.enterAnimate)
      x.classList.add(x.dataset.leaveAnimate)
    }
    console.log(x.classList)
  }
}
