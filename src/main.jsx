import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Redux uchun Providerni import qilish
import './index.css';
import App from './App.jsx';
import ContextProvider from './Context/Context.jsx';
import store from './components/service/store.js'; // Redux storeni import qilish

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </StrictMode>
);
