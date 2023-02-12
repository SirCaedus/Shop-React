import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from './Navigation/NavBar'
import Main from './Navigation/Main'
import Footer from './Navigation/Footer'
import CustomProvider from './CustomProvider'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar/>
                <Main/>
                <Footer/>
            </BrowserRouter>
            <ToastContainer/>
        </CustomProvider>
    )
}

export default App
