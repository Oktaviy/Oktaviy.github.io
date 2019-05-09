document.addEventListener('DOMContentLoaded', () => {

    const header    = document.querySelector('#header'),
          hamburger = document.querySelector('#hamburger'),
          menu      = document.querySelector('#list'),
          menuItems = document.querySelectorAll('.list__element'),
          dots      = document.querySelectorAll('.slider-dots__item'),
          slides    = document.querySelectorAll('.slider-img__item');


//   --------------------       slider            ---------------------------------------------//

    let imgLeft = document.querySelector('.slider-img__position');


    // --------- Удаляю у всех точек (dots) класс, который меняет цвет --------- //

    function dotsClassDelete() {
        dots.forEach(item => {
            item.classList.remove('slider-dots__item-active');
        });
    }

    // --------------------------------------------------------------------------//


    // ----- Переключение слайдера с помощью точек ----- //

    dots.forEach(item => {
        item.addEventListener('click', (e) => {
            imgLeft.style.left = e.target.dataset.number * -100 + '%';
            dotsClassDelete();
            item.classList.add('slider-dots__item-active');
        });
    });

    //-----------------------------------------------------//


    // ------ Переключение слайдера по таймеру ----- //

    function sliderSwitch() {
        
        let sliderTimer = setInterval(function() {
            let left = imgLeft.style.left.replace('%', '');

            left -= 100;
            if (left == -400) left = 0;
            imgLeft.style.left = left + '%';

            let i = left / -100;

            dotsClassDelete();
            dots[i].classList.add('slider-dots__item-active');
        }, 4000);


        // ----------- при наведении мыши таймер останавливается и запускается снова при уводе мыши -------------- //

        slides.forEach(item => {

            item.addEventListener('mouseover', () => {
                if (screen.width > 1100) {
                    clearInterval(sliderTimer);
                }    
            });

        });
        slides.forEach(item => {

            item.addEventListener('mouseout', () => {
                sliderTimer = setInterval(function() {
                    let left = imgLeft.style.left.replace('%', '');

                    left -= 100;
                    if (left == -400) left = 0;
                    imgLeft.style.left = left + '%';

                    let i = left / -100;

                    dotsClassDelete();
                    dots[i].classList.add('slider-dots__item-active');
                }, 4000);
            });

        });
    }

    // -------------------------------------------------------------------------------------------- //

    sliderSwitch();

//  ----------------          slider end         -----------------------------//


    // Универсальная функция, добавляет класс после определенного события на определенном элементе //

    function elemEvent(elem, secondElem = elem, event, className) {
        elem.addEventListener(event, function() {
            secondElem.classList.toggle(className);
        });
    }


    // Ищет в массиве или в объекте елемент //

    function toSort(arr, elem) {
        for(let i of arr) {
            if (i == elem) return true;
        }
    }



    function menuClose(e) {
        e.preventDefault();
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('list-active');
    }


    // меню - гамбургер становится крестиком //

    document.body.addEventListener('click', (e) => {
        if ( !( header.contains(e.target) )) {
            hamburger.classList.remove('hamburger-active');
            menu.classList.remove('list-active');
        }
    });


    // задает высоту контейнера для слайдера в соотношении 1.232 к 1 //

    if (screen.width <= 392) {
        document.querySelector('.slider-img').style.height = (screen.width * 0.87 * 1.2321428) + 'px';
    }

    hamburger.addEventListener('click', menuClose);

    menuItems.forEach(item => {
        item.addEventListener('click', menuClose);
    });

// ---------------------------      Перемещение между секциями          ---------------------------------//

    function windowScroll(href) {

        let windowCurrentPosition = window.scrollY;
        let elemOffset = document.querySelector(href).offsetTop;

        let winScroll = windowCurrentPosition - elemOffset;

        let k = 1;

        if (windowCurrentPosition < elemOffset) {
            let scrollTimer = setInterval(() => {
                k += 0.1;
                
                window.scrollBy(0, k);
                if (window.scrollY >= elemOffset) clearInterval(scrollTimer);
            }, 2);
         
        } else if (windowCurrentPosition > elemOffset) {
            let scrollTimer = setInterval(() => {
                k += 0.1;
                
                window.scrollBy(0, -k);
                if (window.scrollY <= elemOffset) clearInterval(scrollTimer);
            }, 2);
        
        } else {
            return false;
        }
    }

    menuItems.forEach(elem => {
        elem.addEventListener('click', function() {
            let href = this.dataset.href;
            windowScroll(href);
        });
    });


});