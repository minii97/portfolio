const etcWorkVideoLg = document.querySelectorAll(
  '.etc-work-item-lg .etc-work-video'
)

const etcWorkVideoSm = document.querySelectorAll(
  '.etc-work-item-sm .etc-work-video'
)

function playVideo() {
  etcWorkVideoLg.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.querySelector('video').play()
    })

    item.addEventListener('mouseleave', () => {
      item.querySelector('video').pause()
      setTimeout(() => {
        item.querySelector('video').currentTime = 0
      }, 700)
    })
  })

  etcWorkVideoSm.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.parentNode.classList.contains('playing')) {
        e.target.parentNode.classList.remove('playing')
        item.querySelector('video').pause()
        item.querySelector('.thumbnail').style.opacity = '1'
        setTimeout(() => {
          item.querySelector('video').currentTime = 0
        }, 700)
      } else {
        e.target.parentNode.classList.add('playing')
        item.querySelector('.thumbnail').style.opacity = '0'
        item.querySelector('video').play()
      }
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1200) {
        item.classList.remove('playing')
      }
      item.querySelector('video').pause()
      item.querySelector('.thumbnail').style.opacity = '1'
      setTimeout(() => {
        item.querySelector('video').currentTime = 0
      }, 700)
    })
  })
}

playVideo()
