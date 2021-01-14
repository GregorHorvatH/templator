const CURRENCY = 'UAH';

const CURRENCY_EXCHANGE = {
  USD: 27.96,
  RUB: 0.38,
};

const BASKET = {
  elements: 4,
  price: 4000,
};

export const TOP_MENU = {
  catalog: {
    order: 1,
    title: 'Каталог',
    submenu: [
      {
        order: 1,
        title: 'VOIP оборудование',
        url: 'voip_equipment.html',
      },
      {
        order: 2,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
      },
    ],
  },
  about_company: {
    order: 2,
    title: 'О компании',
    submenu: [
      {
        order: 1,
        title: 'VOIP оборудование',
        url: 'voip_equipment.html',
      },
      {
        order: 2,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
      },
      {
        order: 3,
        title: 'Routers',
        url: 'routers.html',
      },
    ],
  },
  payment_delivery: {
    order: 3,
    title: 'Payment and delivery',
    url: 'payment_delivery.html',
  },
};

const MENU = [
  {
    order: 1,
    title: 'VOIP ОБОРУДОВАНИЕ',
    url: 'voip_equipment.html',
  },
  {
    order: 2,
    title: 'SKYPE оборудование',
    url: 'skype_equipment.html',
  },
  {
    order: 3,
    title: 'GSM оборудование',
    url: 'gsm_equipment.html',
  },
  {
    order: 4,
    title: 'VIDEO оборудование',
    url: 'video_equipment.html',
  },
];

const NEWS = [
  {
    date: '2021/01/01',
    title: 'Новинка от «Элтекс» - точка доступа WEP',
    description:
      'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
    img: 'https://same_url.jpg',
    url: 'voip_equipment.html',
  },
  {
    date: '2020/12/25',
    title: 'Новинка от компании Grandstream!',
    description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
    img: 'https://same_url.jpg',
    url: 'voip_equipment.html',
  },
  {
    date: '2021/01/14',
    title: 'WiFi точка доступа от компании Grandstream!',
    description: 'Уже скоро в продаже!',
    img: 'https://same_url.jpg',
    url: 'voip_equipment.html',
  },
];

const BANNER = [
  {
    order: 1,
    img: 'https://same_url.jpg',
    url: 'voip_equipment.html',
  },
  {
    order: 2,
    img: 'https://same_url2.jpg',
    url: 'voip_equipment.html',
  },
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
  {
    type: 'new',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    price: '1000',
    oldPrice: '1100',
    currency: 'UAH',
    date: '2021/01/01',
    url: 'new_items/item1.html',
  },
  {
    type: 'recommended',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    price: '300',
    oldPrice: '1100',
    currency: 'RUB',
    date: '2020/12/25',
    url: 'new_items/item.html',
  },
  {
    type: 'sale',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    price: '150',
    oldPrice: '200',
    currency: 'USD',
    date: '2021/01/13',
    url: 'https://same_url/item.html',
  },
];

const PROMOTIONS = [
  {
    title: 'Название акции',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
  },
  {
    title: 'Название акции 2',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
  },
];

const BUYING_RIGHT_NOW = [
  {
    title: 'Название товара',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
  },
  {
    title: 'Название товара 2',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
  },
];

// =========
import { badges } from './constants.js';

export const newsItems = {
  title: 'НОВИНКИ',
  badge: badges.NEW,
  items: [
    {
      id: 1,
      img: 'images/products/Mobile phone black.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '12 300 р.',
      price: '15 500 р.',
    },
    {
      id: 2,
      img: 'images/products/Router.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '11 300 р.',
      price: '15 500 р.',
    },
    {
      id: 3,
      img: 'images/products/Mobile phone white.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '10 300 р.',
      price: '15 500 р.',
    },
    {
      id: 4,
      img: 'images/products/Stacionar phone.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '13 300 р.',
      price: '15 500 р.',
    },
  ],
};

export const recomendedItems = {
  title: 'РЕКОМЕНДУЕМ',
  badge: badges.RECOMENDED,
  items: [
    {
      id: 1,
      img: 'images/products/Mobile phone white.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '12 300 р.',
      price: '15 500 р.',
    },
    {
      id: 2,
      img: 'images/products/Stacionar phone.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '11 300 р.',
      price: '15 500 р.',
    },
    {
      id: 3,
      img: 'images/products/Mobile phone black.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '10 300 р.',
      price: '15 500 р.',
    },
    {
      id: 4,
      img: 'images/products/Router.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '13 300 р.',
      price: '15 500 р.',
    },
  ],
};

export const discountItems = {
  title: 'Распродажа',
  badge: badges.DISCOUNT,
  items: [
    {
      id: 1,
      img: 'images/products/Mobile phone white.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '12 300 р.',
      price: '15 500 р.',
    },
    {
      id: 2,
      img: 'images/products/Stacionar phone.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '11 300 р.',
      price: '15 500 р.',
    },
    {
      id: 3,
      img: 'images/products/Mobile phone black.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '10 300 р.',
      price: '15 500 р.',
    },
    {
      id: 4,
      img: 'images/products/Router.png',
      name: 'IP телефон Siemens Gigaset C530A IP',
      discount: '13 300 р.',
      price: '15 500 р.',
    },
  ],
};

export const stockItems = {
  title: 'АКЦИИ',
  items: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ],
};

export default {
  newsItems,
  recomendedItems,
  discountItems,
  stockItems,
};
