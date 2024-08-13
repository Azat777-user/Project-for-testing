/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться 
между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже 
написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` 
менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и 
наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному 
переключению изображений.
*/

// create images array
const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]


// find element
const prev = document.getElementById('prev-button')
const next = document.getElementById('next-button')
const webTechImage = document.getElementById('web-tech-image')


let currentImageIndex = 0
webTechImage.src = WEB_TECH_IMAGES[currentImageIndex]
prev.disabled = true

// subscribe to events
prev.addEventListener('click', onShowPrevBtnClick)
next.addEventListener('click', onShowNextBtnClick)

// functions definitions
function onShowPrevBtnClick(){
  currentImageIndex--
  webTechImage.src = WEB_TECH_IMAGES[currentImageIndex]
  next.disabled = false

   // disabled prev button if need
  if(currentImageIndex === 0){
    webTechImage.src = WEB_TECH_IMAGES[WEB_TECH_IMAGES.length-1]
    prev.disabled = true
  }
}

function onShowNextBtnClick(){
  currentImageIndex++
  webTechImage.src = WEB_TECH_IMAGES[currentImageIndex]
  prev.disabled = false

  // disabled next button if need
  if(currentImageIndex === WEB_TECH_IMAGES.length-1){
    webTechImage.src = WEB_TECH_IMAGES[0]
    next.disabled = true
  }
}