enum RoutePath {
  main = '/',
  aboutUs = '/about-us',
  cardMaker = '/card-maker',
  notFound = '*',
}

enum PageTitles {
  main = 'Main',
  aboutUs = 'About Us',
  notFound = '404',
  cardMaker = 'Card Maker',
}

enum LocalStoragePath {
  searchValue = 'searchValue',
}

enum ApiPath {
  character = '/character',
}

const KEY_LOCAL_STORAGE = 'MetalKnock-React';

const LOCALE = 'en-US';

const API_BASE = 'https://rickandmortyapi.com/api';

const STATUS_ERROR = 404;

export {
  RoutePath,
  LocalStoragePath,
  PageTitles,
  ApiPath,
  KEY_LOCAL_STORAGE,
  LOCALE,
  API_BASE,
  STATUS_ERROR,
};
