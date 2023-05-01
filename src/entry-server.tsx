import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { characterApi } from './shared/store/services/characterService';
import { setupStore } from './shared/store/store';
import { HtmlContainer } from './HtmlContainer';
import App from './app';

const store = setupStore();

export async function render(url: string, res: Response, options?: object) {
  await store.dispatch(characterApi.endpoints.fetchCharacters.initiate(''));
  await Promise.all(store.dispatch(characterApi.util.getRunningQueriesThunk()));

  const preloadedState = store.getState();

  return renderToPipeableStream(
    <HtmlContainer preloadedState={preloadedState}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </HtmlContainer>,
    options
  );
}
