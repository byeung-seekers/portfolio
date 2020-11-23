// scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// scroll to top of element
export const scrollToElement = el => {
  const element = document.querySelector(el)
  window.scrollTo({ top: element.offsetTop, behavior: "smooth" })
}

// parallax movement that follows mouse direction
export const parallaxMouseMove = (e, offsetFactor, anim) => {
  const { clientX, clientY } = e
  const moveX = (clientX - window.innerWidth / 2) / offsetFactor
  const moveY = (clientY - window.innerHeight / 2) / offsetFactor
  anim.start({ x: moveX, y: moveY })
}

// encode form name and email input
export const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
