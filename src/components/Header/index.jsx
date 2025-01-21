import './header.scss'
import Logo from '../../assets/img/logo.svg'
import { NavLink, useParams } from 'react-router-dom'
import ScrollbarHover from "../../hooks/scrollbarHover"; // Importation du hook


function Header() {

  const { id } = useParams();

  return (
    <>
      <header className='header' ref={ScrollbarHover()}> {/* utilisation du Hook*/}
        <NavLink to="/"><img className="headerLogo" src={Logo} alt="Logo SportSee" /></NavLink>
        <nav className='navHeader'>
          <ul className='navUl'>
            <li><NavLink to={`/user/${id}`} className='navLink'>Accueil</NavLink></li>
            <li><NavLink to={`/user/${id}/profil`} className='navLink'>Profil</NavLink></li>
            <li><NavLink to={`/user/${id}/reglage`} className='navLink'>Réglage</NavLink></li>
            <li><NavLink to='#' className='navLink'>Communauté</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header