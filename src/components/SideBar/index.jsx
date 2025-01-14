import './sideBar.scss'
import Halter from '../../assets/img/halter.svg'
import Yoga from '../../assets/img/yoga.svg'
import Nage from '../../assets/img/nage.svg'
import Velo from '../../assets/img/velo.svg'
import { NavLink } from 'react-router-dom'

function SideBar() {

  return (
    <>
      <aside className='sideBar'>
        <nav className='navSideBar'>
          <div className='iconContent'>
            <NavLink to='#'><img className="sideBarIcon" src={Yoga} alt="Icon yoga" /></NavLink>
          </div>
          <div className='iconContent'>
            <NavLink to='#'><img className="sideBarIcon" src={Nage} alt="Icon nage" /></NavLink>
          </div>
          <div className='iconContent'>
            <NavLink to='#'><img className="sideBarIcon" src={Velo} alt="Icon Vélo" /></NavLink>
          </div>
          <div className='iconContent'>
            <NavLink to='#'><img className="sideBarIcon" src={Halter} alt="Icon halter" /></NavLink>
          </div>
        </nav>
        <p className='copyright'>Copyright, SportSee 2020</p>
      </aside>
    </>
  )
}

export default SideBar