/**
 * @file index.jsx
 * @description Composant React affichant un indicateur de chargement.
 */

import './loader.scss'
import IconLoader from '../../assets/img/loader.gif'

/**
 * Composant affichant une animation de chargement.
 * @returns {JSX.Element} Composant Loader.
 */
function Loader() {

    return (
        <>
            <div className='loader'>
                <img src={IconLoader} alt="icon loader" style={{ width: "50px" }} />
                <p>Chargement</p>
            </div>
        </>
    )
}

export default Loader