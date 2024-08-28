const cursorElement = document.querySelector('.cursor')
const cursorElementWidth = cursorElement.offsetWidth

const projectsThumbnail = document.querySelectorAll(
  '.projects-article-thumbnail'
)

const moveToYoutubeLink = document.querySelectorAll('.etc-work-youtube-link')

const phoneBtn = document.querySelector('.footer-phone-desc a')

const CursorActivatedElements = [menuBtn, watchBtn, phoneBtn]

let activatedElementName

function moveCursor(x, y) {
  cursorElement.style.transform = `translate(${x - cursorElementWidth / 2}px, ${
    y - cursorElementWidth
  }px)`
}
// /2 한 이유 = 원이 커서의 정중앙에 놓여지기 위해서.

function activeCursor(item) {
  item.addEventListener('mouseover', () => {
    activatedElementName = item.getAttribute('data-name')
    cursorElement.classList.add('cursor-active')
    cursorElement.classList.add(`cursor-${activatedElementName}`)

    item.addEventListener('mouseout', () => {
      cursorElement.classList.remove('cursor-active')
      cursorElement.classList.remove(`cursor-${activatedElementName}`)
    })
  })
}

body.addEventListener('mousemove', (e) => {
  window.requestAnimationFrame(function () {
    moveCursor(e.clientX, e.clientY)
  })
})

CursorActivatedElements.forEach((item) => {
  activeCursor(item)
})

projectsThumbnail.forEach((item) => {
  activeCursor(item)
})

moveToYoutubeLink.forEach((item) => {
  activeCursor(item)
})
