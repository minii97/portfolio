const darkModeBtn = document.querySelector('.gnb-dark-btn')

const DARK_MODE = 'dark-mode'
const LIGHT_MODE = 'light-mode'

function addAndRemoveClassToDarkModeBtn(mode1, mode2) {
  darkModeBtn.classList.add(mode1)
  darkModeBtn.classList.remove(mode2)
}

if (getJsonFromStorage(STORAGE_THEME_KEY)) {
  addAndRemoveClassToDarkModeBtn(DARK_MODE, LIGHT_MODE)
} else {
  addAndRemoveClassToDarkModeBtn(LIGHT_MODE, DARK_MODE)
}

darkModeBtn.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle(DARK_MODE)
  e.currentTarget.classList.toggle(LIGHT_MODE)
})
