import '../components/NavBar.css'
import { Link } from 'react-router-dom'

function Navbar(){

    return(
        <>
            <nav>
                <h1>
                    TechEdu
                </h1>
                <ul>
                    <Link to="/" >Home</Link>
                    <Link to="/quiz">Quiz</Link>
                    <Link to="/result">Results</Link>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;