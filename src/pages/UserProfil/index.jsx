import './userProfil.scss'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ErrorUser from '../../components/404user';
import { fetchUserInfo, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../../api/apiService';
import Calorie from '../../assets/img/calories-icon.svg';
import Protein from '../../assets/img/protein-icon.svg';
import Carb from '../../assets/img/carbs-icon.svg';
import Fat from '../../assets/img/fat-icon.svg';


function UserProfil() {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userSessions, setUserSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [userScore, setUserScore] = useState(0); // État pour stocker le score ou todayScore

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Ajout d'un état pour le chargement

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = await fetchUserInfo(userId);
                setUserData(userData);

                // Récupérer le score ou todayScore
                const score = userData.score ?? userData.todayScore ?? 0;
                setUserScore(score);

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
        <div className='dashboard'>
            <div className='contentHeader'>
                <h1>{userData.userInfos?.firstName || 'Utilisateur'}</h1>
                <p>Âge : {userData.userInfos.age} ans</p>
            </div>
            <div className='contentDatas'>
                <div className='contentCharts'>
                    <div className="userActivity">
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
                                {userActivity.sessions?.length > 0 ? (
                                    userActivity.sessions.map((session, index) => (
                                        <tr key={index}>
                                            <td>{session.day}</td>
                                            <td>{session.kilogram} kg</td>
                                            <td>{session.calories} kcal</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3">Aucune activité disponible</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='userAverage'>
                        <h2>Durée moyenne des sessions :</h2>
                        <ul>
                            {userSessions.sessions.length > 0 ? (
                                userSessions.sessions.map((session) => (
                                    <li key={session.day}>Jour {session.day} : {session.sessionLength} min</li>
                                ))
                            ) : (
                                <li>Aucune session disponible</li>
                            )}
                        </ul>
                    </div>

                    <div className='userPerformance'>
                        <h2>Performances :</h2>
                        <ul>
                            {userPerformance.data.length > 0 ? (
                                userPerformance.data.map((perf) => (
                                    <li key={perf.kind}>
                                        {userPerformance.kind[perf.kind]} : {perf.value}
                                    </li>
                                ))
                            ) : (
                                <li>Aucune performance disponible</li>
                            )}
                        </ul>
                    </div>

                    <div className='userScore'>
                        <h2>Score :</h2>
                        <p>Score : {userScore}</p>
                    </div>
                </div>
                <div className='contentStatistics'>
                    <div className='statistic'>
                        <img src={Calorie} alt="icon energie" />
                        <div className='statisticData'>
                            <p>{userData.keyData.calorieCount}kCal</p>
                            <h2>Calories</h2>
                        </div>
                    </div>
                    <div className='statistic'>
                        <img src={Protein} alt="icon protéine" />
                        <div className='statisticData'>
                            <p>{userData.keyData.proteinCount}g</p>
                            <h2>Proteines</h2>
                        </div>
                    </div>
                    <div className='statistic'>
                        <img src={Carb} alt="icon glucide" />
                        <div className='statisticData'>
                            <p>{userData.keyData.carbohydrateCount}g</p>
                            <h2>Glucides</h2>
                        </div>
                    </div>
                    <div className='statistic'>
                        <img src={Fat} alt="icon lipide" />
                        <div className='statisticData'>
                            <p>{userData.keyData.lipidCount}g</p>
                            <h2>Lipides</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfil;