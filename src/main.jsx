import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './components/stores/index.jsx'
import AuthProvider from './components/services/auth.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
