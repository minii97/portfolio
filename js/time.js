const timeElement = document.querySelector('.gnb-time-content')

function paintTime() {
  const currentDate = new Date()

  const years = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const date = currentDate.getDate()
  const hours = String(currentDate.getHours()).padStart(2, '0')
  const minutes = String(currentDate.getMinutes()).padStart(2, '0')
  const seconds = currentDate.getSeconds()
  const ampm = currentDate.getHours() >= 12 ? 'pm' : 'am'

  const elementContent = `<time datetime="${years}-${month}-${date}-T${hours}:${minutes}:${seconds}TZD">${hours}:${minutes} </time>
<span class="ampm">${ampm}</span>`

  timeElement.innerHTML = elementContent
}

paintTime()

setInterval(paintTime, 1000)
