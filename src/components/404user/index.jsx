import './404user.scss'
import Error404 from '../../assets/img/404.gif'
import { Link } from 'react-router-dom'

function ErrorUser() {

    return (
        <>
            <main className='errorUser'>
                <img src={Error404} alt="erreur 404" />
                <p className='message404User'>Oups! Données utilisateur non trouvées</p>
                <p className='message404User'>Veuillez vérifier l'ID dans l'URL.</p>
                <Link to={'/'} className='backHomeUser'><p>Retourner sur la page d&apos;accueil</p></Link>
            </main>
        </>
    )
}

export default ErrorUser