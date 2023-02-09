import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from './NavBar'
import Main from './Main'
import CustomProvider from './CustomProvider'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
            </BrowserRouter>
            <ToastContainer />
        </CustomProvider>
    )
}

export default App
