enum RoutePath {
  main = '/',
  aboutUs = '/about-us',
  formPage = '/form-page',
  notFound = '*',
}

enum PageTitles {
  main = 'Main',
  aboutUs = 'About Us',
  notFound = '404',
  formPage = 'Form',
}

enum LocalStoragePath {
  searchValue = 'searchValue',
}

const KEY_LOCAL_STORAGE = 'MetalKnock-React';

const LOCALE = 'en-US';

export { RoutePath, LocalStoragePath, PageTitles, KEY_LOCAL_STORAGE, LOCALE };
