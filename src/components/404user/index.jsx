/**
 * @file index.jsx
 * @description Composant React affichant une page d'erreur 404 personnalisée pour l'utilisateur.
 * Lorsque l'utilisateur n'est pas trouvé, ce composant affiche un message d'erreur et propose un lien pour revenir à la page d'accueil.
 */

import './404user.scss'
import Error404 from '../../assets/img/404.gif'
import { Link } from 'react-router-dom'

/**
 * Composant affichant une page d'erreur 404 personnalisée lorsque les données utilisateur sont introuvables.
 * Affiche un message d'erreur avec un lien permettant de revenir à la page d'accueil.
 *
 * @returns {JSX.Element} La page d'erreur 404 pour l'utilisateur.
 */
function ErrorUser() {

    return (
        <>
            <main className='errorUser'>
                <img src={Error404} alt="erreur 404" />
                <p className='message404User'>Oups! Données utilisateur non trouvées</p>
                <p className='message404User'>Veuillez vérifier que l&apos;Id utilisateur est correct</p>
                <p className='message404User'>ou que l&apos;API est bien connectée</p>
                <Link to={'/'} className='backHomeUser'><p>Retourner sur la page d&apos;accueil</p></Link>
            </main>
        </>
    )
}

export default ErrorUser