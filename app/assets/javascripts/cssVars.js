function changeColor(e) {
  document.querySelector('img').style.setProperty('--base', this.value)
  document.querySelector('.hl').style.setProperty('--base', this.value)
}

function changeImage(target) {
  const control = document.querySelector(`#${target.id}`)

  console.log(control.id)
  cssVar = `--${control.id}`

  const image = document.querySelector('img')

  image.style.setProperty(cssVar, control.value + control.dataset.sizing)
}

function handleChange(e) {
  window.currentAction = setInterval((() => { changeImage(e.target) }), 20)
  setTimeout(stopChangeImage, 10000)
}

function stopChangeImage() {
  clearInterval(window.currentAction)
}

function cssVars() {
  document.querySelectorAll('input').forEach((item) => {
    if (item.id === 'base') {return null}
    item.addEventListener('mousedown', handleChange.bind(document))
    item.addEventListener('mouseup', stopChangeImage.bind(document))
  })
  document.querySelector('#base').addEventListener('change', changeColor)
}

function startScript() {
  const identifier = document.body.firstElementChild.id;

  if (identifier === 'css-vars') { cssVars() };
}

window.addEventListener('load', startScript);
