import './userDashboard.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ErrorUser from '../../components/404user';
import { fetchUserInfo, fetchUserActivity } from '../../api/apiService';

function UserDashboard() {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Ajout d'un état pour le chargement

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = await fetchUserInfo(userId);
                setUserData(userData);

                const userActivity = await fetchUserActivity(userId);
                setUserActivity(userActivity);

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
        return <p>Chargement...</p>;
    }

    // Si une erreur est survenue, on affiche le composant d'erreur
    if (error) {
        return (
            <ErrorUser />
        );
    }

    // Affichage des données utilisateur
    return (
        <div className='dashboard'>
            <h1>Bonjour {userData.userInfos?.firstName || 'Utilisateur'}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <div className="user-activity">
                <h2>Activité quotidienne</h2>
                <table aria-label="Tableau d'activité quotidienne">
                    <thead>
                        <tr>
                            <th>Jour</th>
                            <th>Poids (kg)</th>
                            <th>Calories (kcal)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userActivity.sessions?.map((session, index) => (
                            <tr key={index}>
                                <td>{session.day}</td>
                                <td>{session.kilogram} kg</td>
                                <td>{session.calories} kcal</td>
                            </tr>
                        )) || (
                                <tr>
                                    <td>Aucune activité disponible</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDashboard;