let doc = document
let body = document.body
// Вытаскиваю все необходимые элементы на сайте
let colorBtn1 = doc.querySelectorAll('.color')[0]
let colorBtn2 = doc.querySelectorAll('.color')[1]
let images = doc.querySelectorAll('.image')
let macColor = doc.querySelector('.macbook-color')
let price = doc.querySelector('.price')
let models = doc.querySelectorAll('.model')
// Сохраняю в переменных пути к картинкам
let img1 = ['./images/macbookWhite1.svg', './images/macbookWhite2.jpg', './images/macbookWhite3.jpg']
let img2 = ['./images/macbookGrey1.jpg', './images/macbookGrey2.jpg', './images/macbookGrey3.jpg']

// Создаём слушатель событий на кнопки смена цвета
colorBtn1.addEventListener('click', () => {
    // Меняем картинку на странице
    for(let i = 0; i < images.length; i++) {
        images[i].src = img1[i]
    }
    // Меняем классы для смены стилей кнопок
    colorBtn1.className = 'color active'
    colorBtn2.className = 'color not-active'
    // Меняем текст 
    macColor.textContent = 'White'
})

colorBtn2.addEventListener('click', () => {
    // Меняем картинки на странице
    for(let i = 0; i < images.length; i++) {
        images[i].src = img2[i]
    }
    // Меняем классы для смены стилей кнопок
    colorBtn2.className = 'color active'
    colorBtn1.className = 'color not-active'
    // Меняем текст 
    macColor.textContent = 'Space grey'
})
// Вешаем слушатель событий на все кнопки выбора модели через цикл
for(let model of models) {
    model.addEventListener('click', () => {
        // Цикл чтобы сбросить у остальных кнопок стили
        for(let other of models) {
            other.style.border = '2px solid lightblue'
        }
        // Меняем стиль у нажатой кнопки
        model.style.border = '2px solid blue'
        // Проверяем какая кнопка нажата и меняем цену соответственно
        switch (model) {
            case models[0]:
                price.textContent = '$1,999'
                break;
            case models[1]:
                price.textContent = '$2,199'
                break;
            case models[2]:
                price.textContent = '$2,599'
                break;
            case models[3]:
                price.textContent = '$3,199'
                break;
        }
    })
}




// Находим элементы модалки.
let modal = doc.querySelector('.modal')
let close = doc.querySelector('.close')

// Вешаем слушатель событий. Убераем overflow чтобы убрать скролл
price.addEventListener('click', () => {
    burger.style.display = 'none'
    modal.style.display = 'grid'
    body.style.overflow = 'hidden'
    body.style.height = '500px'
})
// То же самое на кнопку закрытия
close.addEventListener('click', () => {
    modal.style.display = 'none'
    body.style.overflow = 'auto'
    burger.style.display = 'block'
})
// Находим элементы меню
let burger = doc.querySelector('.burger-menu')
let menu = doc.querySelector('.menu-full')
let close2 = doc.querySelector('.close2')

// Вешаем слушатель события. translate будет выдвигать меню слева
burger.addEventListener('click', () => {
    burger.style.display = 'none'
    menu.style.transform = 'translateX(0%)'
    body.style.overflow = 'hidden'

})
// Возращаем бургер и убираем меню на кнопку закрытия меню.
close2.addEventListener('click', () => {
    menu.style.transform = 'translateX(150%)'
    burger.style.display = 'block'
    body.style.overflow = 'auto'
})


// Параметры библиотеки
const swiper = new Swiper('.swiper', {
    // Optional parameters
    observer: true,
    observeParents: true,
    direction: 'horizontal',
    loop: true,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });