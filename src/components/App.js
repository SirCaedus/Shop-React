import NavBar from "./NavBar.js"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from "./ItemListContainer.js";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer contenido={'Balls'}/>
      <ItemListContainer contenido={'Meds'}/>
    </>
  )
}

export default App;
