import './404.scss'
import { Link } from 'react-router-dom'

function Error() {

    return (
        <>
            <main className='error'>
                <h4>404</h4>
                <p className='message404'>Oups! La page que vous demandez n&apos;existe pas.</p>
                <Link to={'/'} className='backHome'><p>Retourner sur la page d&apos;accueil</p></Link>
            </main>
        </>
    )
}

export default Error