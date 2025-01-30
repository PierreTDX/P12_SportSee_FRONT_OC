import './userProfil.scss'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ErrorUser from '../../components/404user';
import Loader from '../../components/Loader';
import { fetchUserInfo } from '../../api/apiService';

function UserProfil() {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const [userData, setUserData] = useState(null);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Ajout d'un état pour le chargement

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = await fetchUserInfo(userId);
                setUserData(userData);

            } catch (err) {
                setError(err.message); // Gestion de l'erreur
            } finally {
                setIsLoading(false); // Fin du chargement
            }
        };

        getData();

    }, [userId]);

    // Affichage pendant le chargement
    if (isLoading) {
        return (
            <Loader />
        )
    }

    // Si une erreur est survenue, on affiche le composant d'erreur
    if (error) {
        return (
            <ErrorUser />
        );
    }

    // Affichage des données utilisateur
    return (
        <div className='profilUser'>
            <div className='contentHeader'>
                <h1>{userData.userInfos?.firstName || 'Utilisateur'}</h1>
                <p>{userData.userInfos?.age || 'non renseigné'} ans</p>
            </div>
        </div>
    );
}

export default UserProfil;