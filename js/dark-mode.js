// 변수 선언
const STORAGE_THEME_KEY = 'darkTheme'
const HTML_THEME_DATASET_KEY = 'data-color-scheme'
const HTML = document.documentElement
const TOGGLE_BUTTON_ID = 'gnb-dark-btn'

// 로컬 스토리지에 저장되어있는 json 데이터를 자바스크립트 객체로 변환한 값을 변수에 저장
const getJsonFromStorage = (key) => JSON.parse(localStorage.getItem(key))

// 로컬스토리지에 isDark 값을 저장하고 HTML의 data-color-scheme 속성을 isDark의 참/거짓 여부에 따라 참이면 다크,거짓이면 라이트 모드를 적용하는 함수
const updateTheme = (isDark) => {
  localStorage.setItem(STORAGE_THEME_KEY, isDark)
  HTML.setAttribute(HTML_THEME_DATASET_KEY, isDark ? 'dark' : 'light')
}

// "??" = 좌항의 값이 null/undefined면 우항의 값을 반환,그 외의 경우엔 좌항의 값을 반환.
// storage에 저장된 값이 없는 경우 (null) isDark = false로 취급되어 updateTheme에 따라 light 모드 적용됨, 만약 스토리지에 저장된 값이 있을 경우엔 사용자 설정 값이 다크모드냐 라이트모드냐에 따라 초기 설정이 적용됨.
const initTheme = () => {
  const isDark =
    getJsonFromStorage(STORAGE_THEME_KEY) ??
    window.matchMedia('(prefers-color-scheme: dark)').matches
  updateTheme(isDark)
}

// 스토리지에 저장된 값을 가져와 updateTheme 함수를 저장 값에 반대로 적용 => toggle의 원리
const toggleTheme = () => {
  const isDark = getJsonFromStorage(STORAGE_THEME_KEY)
  updateTheme(!isDark)
}

// 윈도우에 클릭이벤트를 달아놓음 = body 태그 전에 스크립트를 삽입하였기 때문에 특정 DOM 요소에 이벤트리스너를 추가할 수 없음.
// 내가 클릭한 요소의 부모요소의 id가 "TOGGLE_BUTTON_ID" 변수의 저장값과 일치한다면 toggleTheme 함수 실행, 아니라면 아무일도 일어나지 않는다.
window.addEventListener('click', (e) => {
  if (e.target.parentNode.id !== TOGGLE_BUTTON_ID) return
  toggleTheme()
})

// 사용자가 다크모드/라이트 모드를 사이트 내의 버튼이 아닌 시스템설정에서 변경하는 경우에 대응하기 위하여 prefers-color-scheme에 "change" 이벤트 리스너를 달아놓고 true와 false를 감지해 다크/라이트 모드 토글이 가능하게함.
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    const isDark = e.matches
    updateTheme(isDark)
  })

// 초기값 탐지 위해 사이트 로드시 initTheme 함수 실행.
initTheme()
