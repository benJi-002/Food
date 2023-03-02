window.addEventListener('DOMContentLoaded', () => {

    /* Табы */
    const tabs = require('./modules/tabs'),
    /* Таймер */
          timer = require('./modules/timer'),
    /* Модальное окно */
          modal = require('./modules/modal'),
    /* Карточки */
          cards = require('./modules/cards'),
    /* Формы */ 
          form = require('./modules/forms'),
    /* Слайдер */
          slider = require('./modules/slider'),
    /* Калькулятор */
          calc = require('./modules/calc');

    tabs();
    timer();
    modal();
    cards();
    form();
    slider();
    calc();
});