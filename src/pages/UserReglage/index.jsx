import './userReglage.scss'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorUser from '../../components/404user';
import { fetchUserInfo, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../../api/apiService';


function UserReglage() {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userSessions, setUserSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Ajout d'un état pour le chargement

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = await fetchUserInfo(userId);
                setUserData(userData);

                const userActivity = await fetchUserActivity(userId);
                setUserActivity(userActivity);

                const userSessions = await fetchUserAverageSessions(userId);
                setUserSessions(userSessions);

                const userPerformance = await fetchUserPerformance(userId);
                setUserPerformance(userPerformance);

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
        <div className='profilUser'>
            <h1>{userData.userInfos.firstName} {userData.userInfos.lastName}</h1>
            <p>Données API</p>

            {/* Exemple d'affichage des données utilisateur */}
            <div className="user-stats">
                <h2>Statistiques principales :</h2>
                <ul>
                    <li>Âge : {userData.userInfos.age} ans</li>
                    <li>Calories : {userData.keyData.calorieCount} kcal</li>
                    <li>Protéines : {userData.keyData.proteinCount} g</li>
                    <li>Glucides : {userData.keyData.carbohydrateCount} g</li>
                    <li>Lipides : {userData.keyData.lipidCount} g</li>
                </ul>
            </div>

            {/* Exemple d'affichage des sessions d'activités */}
            {userActivity && userActivity.sessions && (
                <div className="user-activity">
                    <h2>Activité quotidienne</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Jour</th>
                                <th>Poids (kg)</th>
                                <th>Calories (kcal)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userActivity.sessions.map((session, index) => (
                                <tr key={index}>
                                    <td>{session.day}</td>
                                    <td>{session.kilogram} kg</td>
                                    <td>{session.calories} kcal</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Exemple d'affichage des performances */}
            {userPerformance && (
                <div className="user-performance">
                    <h2>Performances :</h2>
                    <ul>
                        {userPerformance.data.map((perf) => (
                            <li key={perf.kind}>
                                {userPerformance.kind[perf.kind]} : {perf.value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Exemple d'affichage des sessions moyennes */}
            {userSessions && (
                <div className="user-sessions">
                    <h2>Durée moyenne des sessions :</h2>
                    <ul>
                        {userSessions.sessions.map((session) => (
                            <li key={session.day}>Jour {session.day} : {session.sessionLength} min</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserReglage