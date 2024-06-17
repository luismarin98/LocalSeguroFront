import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <div className='w-screen h-screen bg-fondo bg-cover bg-center bg-fixed bg-no-repeat max-h-screen overflow-y-auto no-scrollbar:'>
          <App />
          <Toaster position='top-right' />
        </div>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);