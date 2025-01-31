/**
 * @file index.jsx
 * @description Composant React affichant l'en-tête avec la navigation, le logo.
 */

import './header.scss'
import Logo from '../../assets/img/logo.svg'
import { NavLink, useParams } from 'react-router-dom'
import ScrollbarHover from "../../hooks/scrollbarHover"; // Importation du hook

/**
 * Composant affichant l'en-tête avec le logo et la barre de navigation.
 * Utilise le hook `ScrollbarHover` pour gérer l'effet de survol sur la barre de défilement.
 * @returns {JSX.Element} Le composant Header avec la navigation.
 */
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
            <li><NavLink to={`/user/${id}/communaute`} className='navLink'>Communauté</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header