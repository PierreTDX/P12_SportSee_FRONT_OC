import './404.scss'
import Error404 from '../../assets/img/404.gif'
import { Link } from 'react-router-dom'

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