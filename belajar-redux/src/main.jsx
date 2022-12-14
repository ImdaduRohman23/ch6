import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux'
// import Person from './components/Person'
import { Provider } from 'react-redux'
import { fetchGitHubData } from './actions/person'
import "bootstrap/dist/css/bootstrap.min.css";

store.dispatch(fetchGitHubData());



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
