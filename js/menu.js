const overlay = document.querySelector('.overlay')
const menuAside = document.querySelector('aside.menu')

const menuContact = menuAside.querySelector('.menu-contact')
const menuContactLink = menuContact.querySelectorAll('.menu-contact-item a')
const menuContactDefaultLogo = menuContact.querySelector(
  '.menu-contact-header-img'
)
const menuContactThumbnail = menuContact.querySelectorAll(
  '.menu-contact-header i'
)

const menuNav = menuAside.querySelector('.menu-nav')
const menuNavBtnList = menuNav.querySelectorAll('a')

function toggleClassList() {
  menuBtn.classList.toggle('is-active')
  overlay.classList.toggle('is-active')
  menuAside.classList.toggle('is-active')
  body.classList.toggle('menu-active')

  if (menuAside.classList.contains('is-active')) {
    menuBtn.setAttribute('data-name', 'close')
  } else {
    menuBtn.setAttribute('data-name', 'menu')
  }
}

function removeClassList() {
  menuBtn.classList.remove('is-active')
  overlay.classList.remove('is-active')
  menuAside.classList.remove('is-active')
  body.classList.remove('menu-active')
}

menuBtn.addEventListener('click', toggleClassList)

let focusingLink

function toggleThumbnailIcon() {
  focusingLink = this.className
  menuContactDefaultLogo.classList.remove('active')

  menuContactThumbnail.forEach(function (data) {
    if (data.getAttribute('data-id') == focusingLink) {
      data.classList.add('active')
    } else {
      data.classList.remove('active')
    }
  })
}

function changeThumbnailIconToDefault() {
  menuContactDefaultLogo.classList.add('active')
  menuContactThumbnail.forEach(function (data) {
    data.classList.remove('active')
  })
}

menuContactLink.forEach((items) => {
  items.addEventListener('mouseover', toggleThumbnailIcon)
  items.addEventListener('mouseout', changeThumbnailIconToDefault)
})

function scrollToNavBtn(e) {
  removeClassList()

  const tabId = e.currentTarget.parentNode.getAttribute('id')
  const tabPanel = document.querySelector(`[aria-labelledby="${tabId}"]`)

  const scrollAmount =
    tabPanel.getBoundingClientRect().top - (window.innerWidth >= 1199 ? 80 : 60)

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  })
}

menuNavBtnList.forEach((items) => {
  items.addEventListener('click', (e) => {
    e.preventDefault()
    scrollToNavBtn(e)
  })
})

window.addEventListener('resize', setHeightToMenuNavList)

setHeightToMenuNavList()

function setHeightToMenuNavList() {
  const mql = window.matchMedia('(max-width: 1199px)')

  const menuNavList = menuNav.querySelector('.menu-nav-list')
  const GNB_HEIGHT = 60

  if (mql.matches) {
    menuNavList.style.height = `${window.innerHeight - GNB_HEIGHT}px`
  } else {
    menuNavList.style.height = 'auto'
  }
}
