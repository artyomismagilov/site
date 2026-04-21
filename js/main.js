window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
})

window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--scrollTop2', `${window.scrollY}`)
})
let stop1 = false
let stop2 = false
var delay = 0.1;
const firstBlock = document.querySelectorAll("#firstBlock");
const anotherBlocks = document.querySelectorAll("#anotherBlock");

window.addEventListener('scroll', e => {
    const scrollPosition = document.documentElement.scrollTop;
    // console.log(scrollPosition);
    if (scrollPosition >= 700 && scrollPosition <= 850 && stop1 == false) {
        console.log('ОК1')
        animateBlock(firstBlock)
        stop1 = true
    } else if (scrollPosition >= 1500 && scrollPosition <= 1600 && stop2 == false) {
        console.log('ОК2')
        animateBlock(anotherBlocks)
        stop2 = true
    } else if (scrollPosition <= 200) {
        clearAnimation()
        stop1 = false
        stop2 = false
    }


})

function animateBlock(block) {
    block.forEach(el => {
        el.style.animation = "blockLoaded 1.5s ease forwards";
        el.style.animationDelay = `${delay}s`;
        delay += 0.1;
    })
}

function clearAnimation() {
    firstBlock.forEach(el => {
        el.style.animation = "";
        el.style.animationDelay = ``;
    })
    anotherBlocks.forEach(el => {
        el.style.animation = "";
        el.style.animationDelay = ``;
    })
    delay = 0;
}


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
const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');
const close4 = document.querySelector('.close4');
const close5 = document.querySelector('.close5');
const close6 = document.querySelector('.close6');
const close7 = document.querySelector('.close7');
const close8 = document.querySelector('.close8');
const close9 = document.querySelector('.close9');
const glide = document.getElementById('glide');


// 1. Находим основные элементы
const glideElement = document.getElementById('glide');

// 2. Функции открытия и закрытия
function openModal(modalId) {
    if (glideElement) glideElement.style.display = 'none';
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.animation = "fadeIn 0.3s ease"
        setTimeout(() => {
            modal.style.display = 'flex';
        }, 300);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.animation = "fadeOut 0.3s ease"
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
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