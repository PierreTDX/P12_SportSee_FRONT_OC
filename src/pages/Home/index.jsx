import './home.scss'
import { Link } from 'react-router'
import Logo from '../../assets/img/logo.svg'

function Home() {

    return (
        <>
            <div className='home'>
                <img className="homeLogo" src={Logo} alt="Logo SportSee" />
                <Link to={`/user/12`}>User 12</Link>
                <Link to={`/user/18`}>User 18</Link>
            </div>
        </>
    )
}

export default Home