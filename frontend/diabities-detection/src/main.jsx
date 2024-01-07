import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import Navbar from "./Componenet/Navbar.jsx"
import { Provider} from 'react-redux'
import store from './app/store.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>




    <Navbar    >


      <App />
    </Navbar>

  </Provider>,
)
