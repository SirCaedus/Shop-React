import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import Main from './Main'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
    </BrowserRouter>
  )
}

export default App
