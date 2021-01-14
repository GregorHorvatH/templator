'use strict';
import {
  TOP_MENU,
  newsItems,
  recomendedItems,
  discountItems,
  stockItems,
} from './config.js';
import topMenuTemplate from './topMenu.js';
import sliderTemplate from './slider.js';
// import slider from './slider.js';

import productItemTemplate from './productItem.js';
import stockItemTemplate from './stockItem.js';

const refs = {
  topMenu: document.querySelector('#top-menu'),
  slider1: document.querySelector('#slider-1'),
  slider2: document.querySelector('#slider-2'),
  slider3: document.querySelector('#slider-3'),
  slider4: document.querySelector('#slider-4'),
};

refs.topMenu.insertAdjacentHTML('beforeend', topMenuTemplate(TOP_MENU));

refs.slider1.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(newsItems, productItemTemplate),
);

refs.slider2.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(recomendedItems, productItemTemplate),
);

refs.slider3.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(discountItems, productItemTemplate),
);

refs.slider4.insertAdjacentHTML(
  'beforeend',
  sliderTemplate(stockItems, stockItemTemplate),
);

// slider('#slider-1');
