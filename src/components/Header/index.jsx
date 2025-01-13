import './header.scss'
import Logo from '../../assets/img/logo.svg'
import { NavLink, useParams } from 'react-router-dom'

function Header() {

  const { id } = useParams();

  return (
    <>
      <header className='header'>
        <NavLink to="/"><img className="headerLogo" src={Logo} alt="Logo SportSee" /></NavLink>
        <nav className='navHeader'>
          <ul className='navUl'>
            <li><NavLink to={`/user/${id}`} className='navLink'>Accueil</NavLink></li>
            <li><NavLink to={`/user/${id}/profil`} className='navLink'>Profil</NavLink></li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header