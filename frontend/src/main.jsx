import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/store';  // Make sure your store is correctly set up

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <>
        <App />
        <Toaster />
      </>
    </Provider>
  </StrictMode>
);
