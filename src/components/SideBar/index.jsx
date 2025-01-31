/**
 * @file index.jsx
 * @description Composant React affichant une barre latérale avec des icônes de navigation pour différentes activités sportives.
 */

import './sideBar.scss'
import Halter from '../../assets/img/halter.svg'
import Yoga from '../../assets/img/yoga.svg'
import Nage from '../../assets/img/nage.svg'
import Velo from '../../assets/img/velo.svg'
import { NavLink } from 'react-router-dom'
import ScrollbarHover from "../../hooks/scrollbarHover"; // Importation du hook

/**
 * Composant affichant une barre latérale de navigation avec des icônes de sports.
 * @returns {JSX.Element} Composant SideBar.
 */
function SideBar() {

  return (
    <>
      <aside className='sideBar' ref={ScrollbarHover()}> {/* utilisation du Hook*/}
        <nav className='navSideBar'>
          <NavLink to='#'>
            <div className='iconContent'>
              <img className="sideBarIcon" src={Yoga} alt="Icon yoga" />
            </div>
          </NavLink>
          <NavLink to='#'>
            <div className='iconContent'>
              <img className="sideBarIcon" src={Nage} alt="Icon nage" />
            </div>
          </NavLink>
          <NavLink to='#'>
            <div className='iconContent'>
              <img className="sideBarIcon" src={Velo} alt="Icon Vélo" />
            </div>
          </NavLink>
          <NavLink to='#'>
            <div className='iconContent'>
              <img className="sideBarIcon" src={Halter} alt="Icon halter" />
            </div>
          </NavLink>
        </nav>
        <p className='copyright'>Copyright, SportSee 2020</p>
      </aside>
    </>
  )
}

export default SideBar