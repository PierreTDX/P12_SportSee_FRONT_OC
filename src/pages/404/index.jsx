/**
 * @file index.jsx
 * @description Composant affichant une page d'erreur 404 avec un message et un lien vers la page d'accueil.
 * Ce composant est utilisé pour indiquer à l'utilisateur que la page demandée est introuvable.
 */

import './404.scss'
import Error404 from '../../assets/img/404.gif'
import { Link } from 'react-router-dom'

/**
 * Composant d'erreur 404 informant l'utilisateur que la page demandée est introuvable.
 * @returns {JSX.Element} La page d'erreur 404 avec un lien de retour à l'accueil.
 */
function Error() {

    return (
        <>
            <main className='error'>
                <img src={Error404} alt="erreur 404" />
                <p className='message404'>Oups! La page que vous demandez n&apos;existe pas.</p>
                <Link to={'/'} className='backHome'><p>Retourner sur la page d&apos;accueil</p></Link>
            </main>
        </>
    )
}

export default Error