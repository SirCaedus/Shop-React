import { Container } from 'react-bootstrap'
import GitHubImg from '../assets/images/github-mark.svg'


const Footer = () => {
    return(
        <Container fluid className='bgMain fontWhite footer'>
            Juan Martín González Mansilla. 
            App creada con React.
            <a position='end'href='https://github.com/SirCaedus/Shop-React-JuanGonzalezMansilla' target="_blank" rel="noopener noreferrer">
                <img src={GitHubImg} alt='logo de GitHub'/>
            </a>
        </Container>
    )
}



export default Footer