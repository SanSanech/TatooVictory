const menuToggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');
const closeMenu = document.querySelector('.close-menu');
const body = document.body;
const menuLinks = document.querySelectorAll('.menu-list a'); // Все ссылки меню

// Функция для закрытия меню
const closeMenuHandler = () => {
    overlay.classList.remove('active');
    body.classList.remove('menu-open');
};

// Открытие меню
menuToggle.addEventListener('click', () => {
    overlay.classList.add('active');
    body.classList.add('menu-open');
});

// Закрытие меню при клике на крестик
closeMenu.addEventListener('click', closeMenuHandler);



// Обработка кликов по ссылкам меню
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        // Закрываем меню
        closeMenuHandler();

        // Плавный скролл к якорю
        const targetId = link.getAttribute('href'); // Получаем значение атрибута href (например, "#главная")
        if (targetId && targetId.startsWith('#')) { // Проверяем, что это якорная ссылка
            const targetElement = document.querySelector(targetId); // Находим целевой элемент
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавный скролл
                    block: 'start' // Выравнивание элемента по верху экрана
                });
            }
        }
    });
});