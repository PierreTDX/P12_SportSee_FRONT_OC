import './home.scss'
import { Link } from 'react-router'
import Logo from '../../assets/img/logo.svg'

function Home() {

    return (
        <>
            <main className='home'>
                <img className="homeLogo" src={Logo} alt="Logo SportSee" />
                <Link to={`/user/12`}>User 12</Link>
                <Link to={`/user/18`}>User 18</Link>
            </main>
        </>
    )
}

export default Home