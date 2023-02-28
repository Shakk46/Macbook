let doc = document 
// Вытаскиваю все необходимые элементы на сайте
let colorBtn1 = doc.querySelectorAll('.color')[0]
let colorBtn2 = doc.querySelectorAll('.color')[1]
let img = doc.querySelector('.image')
let macColor = doc.querySelector('.macbook-color')
let price = doc.querySelector('.price')
let models = doc.querySelectorAll('.model')
// Сохраняю в переменных пути к картинкам
let img1 = './images/macbook1.jpg'
let img2 = './images/mac_2.svg'

// Создаём слушатель событий на кнопки смена цвета
colorBtn1.addEventListener('click', () => {
    // Меняем картинку на странице
    img.src = img2
    // Меняем классы для смены стилей кнопок
    colorBtn1.className = 'color active'
    colorBtn2.className = 'color not-active'
    // Меняем текст 
    macColor.textContent = 'White'
})

colorBtn2.addEventListener('click', () => {
    // Меняем картинку на странице
    img.src = img1
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

