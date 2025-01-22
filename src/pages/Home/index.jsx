import { useEffect, useState } from 'react';
import './home.scss';
import { Link } from 'react-router-dom'; // Corrigez l'import pour `react-router-dom`
import Logo from '../../assets/img/Logox1.gif';

function Home() {
    const [key, setKey] = useState(Date.now()); // Gestion du rechargement du GIF
    const [useMockData, setUseMockData] = useState(() => {
        // Récupérer la valeur initiale de localStorage ou fallback à true
        return localStorage.getItem('SELECT_DATA_MOKED') === 'true';
    });

    // Met à jour la clé à chaque montage de la page
    useEffect(() => {
        setKey(Date.now());
    }, []); // Le tableau de dépendances vide signifie que cela s'exécute uniquement au montage

    useEffect(() => {
        // Sauvegarde la valeur de `useMockData` dans localStorage à chaque changement
        localStorage.setItem('SELECT_DATA_MOKED', useMockData);
    }, [useMockData]);

    const toggleMockData = () => {
        setUseMockData((prev) => !prev);
    };

    return (
        <>
            <main className="home">
                <img
                    className="homeLogo"
                    src={`${Logo}?${key}`} // Ajout d'une clé unique pour forcer le rechargement
                    alt="Logo SportSee"
                />
                <Link to={`/user/12`} className="userLink">
                    User 12
                </Link>
                <Link to={`/user/18`} className="userLink">
                    User 18
                </Link>
                <div className="toggleMock">
                    <label>
                        <input
                            type="checkbox"
                            checked={useMockData}
                            onChange={toggleMockData}
                        />
                        Utiliser les données mockées quand l&apos;API n&apos;est pas connectée
                    </label>
                </div>
            </main>
        </>
    );
}

export default Home;