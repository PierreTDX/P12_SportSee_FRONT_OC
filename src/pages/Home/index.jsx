import { useEffect, useState } from 'react';
import './home.scss';
import { Link } from 'react-router';
import Logo from '../../assets/img/Logox1.gif';

function Home() {
    const [key, setKey] = useState(Date.now()); // État pour gérer le rechargement du GIF

    useEffect(() => {
        // Met à jour la clé à chaque montage de la page
        setKey(Date.now());
    }, []); // Le tableau de dépendances vide signifie que cela s'exécute uniquement au montage

    return (
        <>
            <main className="home">
                {/* Ajout d'un paramètre unique au src du GIF */}
                <img
                    className="homeLogo"
                    src={`${Logo}?${key}`}
                    alt="Logo SportSee"
                />
                <Link to={`/user/12`} className="userLink">User 12</Link>
                <Link to={`/user/18`} className="userLink">User 18</Link>
            </main>
        </>
    );
}

export default Home;