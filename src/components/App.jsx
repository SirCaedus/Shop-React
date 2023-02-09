import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import Main from './Main'
import CustomProvider from './CustomProvider'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App
