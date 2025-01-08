import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux uchun Providerni import qilish
import './index.css';
import App from './App.jsx';
import store from './components/service/store.js'; // Redux storeni import qilish
import './assets/sass/media.scss'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
