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

const KEY_LOCAL_STORAGE = 'MetalKnock-React';

const LOCALE = 'en-US';

export { RoutePath, LocalStoragePath, PageTitles, KEY_LOCAL_STORAGE, LOCALE };
