import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from '../pages';
import { setupStore } from '../shared/store/store';
import './styles/index.scss';

export const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
