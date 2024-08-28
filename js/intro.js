body.onload = setTimeout(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  body.classList.add('loading')
}, 150)

setTimeout(() => {
  body.classList.remove('loading')
}, 2500)
