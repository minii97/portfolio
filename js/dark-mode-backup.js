const darkModeBtn = document.querySelector('.gnb-dark-btn')

const savedStatus = localStorage.getItem('savedStatus')

function toggleDarkMode() {
  darkModeBtn.classList.toggle('dark-mode')
  darkModeBtn.classList.toggle('light-mode')

  if (document.querySelector('html').getAttribute('data-theme') == 'dark') {
    document.querySelector('html').setAttribute('data-theme', 'light')
  } else {
    document.querySelector('html').setAttribute('data-theme', 'dark')
  }

  changedStatus = document.querySelector('html').getAttribute('data-theme')

  localStorage.setItem('savedStatus', changedStatus)
}

function checkDefaultValue() {
  if (savedStatus == null) {
    document.querySelector('html').setAttribute('data-theme', 'dark')
    darkModeBtn.classList.add('dark-mode')
  } else {
    document.querySelector('html').setAttribute('data-theme', savedStatus)
    darkModeBtn.classList.add(`${savedStatus}-mode`)
  }
}

darkModeBtn.addEventListener('click', toggleDarkMode)

window.onload = checkDefaultValue()
