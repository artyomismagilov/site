window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
})

window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop2', `${window.scrollY}`)
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const id = link.getAttribute("href");
        const target = document.querySelector(id);

        if (target) {
            ScrollSmoother.get().scrollTo(target, true);
        }
    });
});



const open1 = document.getElementById('openWord1');
const open2 = document.getElementById('openWord2');
const open3 = document.getElementById('openWord3');
const open4 = document.getElementById('openWord4');
const open5 = document.getElementById('openWord5');
const open6 = document.getElementById('openWord6');
const open7 = document.getElementById('openWord7');
const open8 = document.getElementById('openWord8');
const open9 = document.getElementById('openWord9');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const modal5 = document.getElementById('modal5');
const modal6 = document.getElementById('modal6');
const modal7 = document.getElementById('modal7');
const modal8 = document.getElementById('modal8');
const modal9 = document.getElementById('modal9');
const close1= document.querySelector('.close1');
const close2= document.querySelector('.close2');
const close3= document.querySelector('.close3');
const close4= document.querySelector('.close4');
const close5= document.querySelector('.close5');
const close6= document.querySelector('.close6');
const close7= document.querySelector('.close7');
const close8= document.querySelector('.close8');
const close9= document.querySelector('.close9');
const glide = document.getElementById('glide');


// 1. Находим основные элементы
const glideElement = document.getElementById('glide');

// 2. Функции открытия и закрытия
function openModal(modalId) {
    if (glideElement) glideElement.style.display = 'none';
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
    if (glideElement) glideElement.style.display = 'flex';
}

// 3. Делегирование событий клика (для открытия модалок)
// Этот метод работает даже если слайды перетаскиваются или клонируются
if (glideElement) {
    glideElement.addEventListener('click', (e) => {
        // Ищем ближайший родительский элемент слайда с ID типа openWord1
        const slide = e.target.closest('.glide__slide');
        
        if (slide && slide.id) {
            // Извлекаем номер из ID (например, из "openWord8" получим "8")
            const number = slide.id.replace('openWord', '');
            if (number) {
                openModal('modal' + number);
            }
        }
    });
}

// 4. Закрытие модалок (по крестику и по фону)
document.addEventListener('click', (e) => {
    // Если кликнули по крестику
    if (e.target.classList.contains('close')) {
        // Ищем родительскую модалку, чтобы узнать её ID
        const modal = e.target.closest('.modal');
        if (modal) {
            closeModal(modal.id);
        }
    }

    // Если кликнули по самому фону модалки
    if (e.target.classList.contains('modal')) {
        closeModal(e.target.id);
    }
});

// function openModal(modalId, glideElement) {
//     return function() {
//         glideElement.style.display = 'none';
//         const modal = document.getElementById(modalId);
//         if (modal) {
//             modal.style.display = 'flex';
//         } else {
//             console.error('Модальное окно не найдено:', modalId);
//             glideElement.style.display = 'flex'; // Возвращаем обратно, если окна нет
//         }
//     }
// }


// function closeModal(modalId, glideElement) {
//     return function() {
//         const modal = document.getElementById(modalId);
//         if (modal) {
//             modal.style.display = 'none';
//         }
//         glideElement.style.display = 'flex';
//     }
// }

// const planets = [
//     { open: open1, modalId: 'modal1', closeClass: '.close1' },
//     { open: open2, modalId: 'modal2', closeClass: '.close2' },
//     { open: open3, modalId: 'modal3', closeClass: '.close3' },
//     { open: open4, modalId: 'modal4', closeClass: '.close4' },
//     { open: open5, modalId: 'modal5', closeClass: '.close5' },
//     { open: open6, modalId: 'modal6', closeClass: '.close6' },
//     { open: open7, modalId: 'modal7', closeClass: '.close7' },
//     { open: open8, modalId: 'modal8', closeClass: '.close8' },
//     { open: open9, modalId: 'modal9', closeClass: '.close9' }
// ];

// planets.forEach(planet => {
//     if (planet.open) {
//         planet.open.addEventListener('click', openModal(planet.modalId, glide));
        
//         const closeBtn = document.querySelector(planet.closeClass);
//         if (closeBtn) {
//             closeBtn.addEventListener('click', closeModal(planet.modalId, glide));
//         } else {
//             console.error('Кнопка закрытия не найдена:', planet.closeClass);
//         }
//     } else {
//         console.error('Элемент открытия не найден для:', planet.modalId);
//     }
// });

// document.querySelectorAll('.modal').forEach(modal => {
//     modal.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             const modalId = modal.id;
//             const planetIndex = planets.findIndex(p => p.modalId === modalId);
//             if (planetIndex !== -1 && planets[planetIndex].open) {
//                 glide.style.display = 'flex';
//                 modal.style.display = 'none';
//             }
//         }
//     });
// });