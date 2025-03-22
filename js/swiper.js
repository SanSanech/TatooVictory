const gallery = document.querySelector('.gallery_swiper');
const photoBlock = document.querySelector('.photo-block');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const photos = document.querySelectorAll('.photo-block img');

let currentIndex = 0;

// Функция для обновления позиции слайдера
function updateSlider() {
    const photoWidth = photos[0].clientWidth; // Ширина одной фотографии
    photoBlock.style.transform = `translateX(-${currentIndex * photoWidth}px)`;
}

// Переключение на предыдущий слайд
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = photos.length - 1; // Переход к последнему слайду
    }
    updateSlider();
});

// Переключение на следующий слайд
nextButton.addEventListener('click', () => {
    if (currentIndex < photos.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Переход к первому слайду
    }
    updateSlider();
});

// Адаптация слайдера при изменении размера окна
window.addEventListener('resize', updateSlider);