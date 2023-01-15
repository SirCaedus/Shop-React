import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './NavBar.js'
import ItemListContainer from './ItemListContainer.js'
import Main from './Main.js'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  )
}

export default App;
