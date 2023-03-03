/* Табы */
import tabs from './modules/tabs';
/* Таймер */
import timer from './modules/timer';
/* Модальное окно */
import modal from './modules/modal';
/* Карточки */
import cards from './modules/cards';
/* Формы */ 
import forms from './modules/forms';
/* Слайдер */
import slider from './modules/slider';
/* Калькулятор */
import calc from './modules/calc';

import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2023-05-20');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    forms('form', modalTimerId);
    slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		prewArrow: '.offer__slider-prev',
		nextArrow: '.offer__slider-next',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
    calc();
});