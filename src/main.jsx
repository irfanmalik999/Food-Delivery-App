import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './components/StoreContext/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  // <BrowserRouter> React component jo React Router ka ek part hai, jo single page applications (SPA) mein navigation aur routing ka management karta hai, yahan <App/> component ko wrap karta hai jo routing aur navigation ke liye foundation provide karta hai. ⬜
 
  <BrowserRouter>
    <StoreContextProvider>
      <App/>
    </StoreContextProvider>
  </BrowserRouter>
)
