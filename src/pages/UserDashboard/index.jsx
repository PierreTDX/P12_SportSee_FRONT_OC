import './userDashboard.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ErrorUser from '../../components/404user';
import UserActivity from '../../components/UserActivity';
import UserAverageSessions from '../../components/UserAverageSessions';
import UserPerformance from '../../components/UserPerformance';
import UserScore from '../../components/UserScore';
import { fetchUserInfo, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../../api/apiService';
import Loader from '../../assets/img/loader.gif'
import UserStatisticCard from '../../components/UserSatatistics';
import ModelUserSatatistics from '../../components/UserSatatistics/modelUserSatatistics';
import updateScale from '../../hooks/updateScale';


function UserDashboard() {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userSessions, setUserSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);
    const [userScore, setUserScore] = useState(0); // État pour stocker le score ou todayScore

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Ajout d'un état pour le chargement

    //Hook pour appliquer l'échelle
    updateScale();

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
        return (
            <div>
                <img src={Loader} alt="icon loader" style={{ width: "50px" }} />
                <p>Chargement</p>
            </div>
        )
    }

    // Si une erreur est survenue, on affiche le composant d'erreur
    if (error) {
        return (
            <ErrorUser />
        );
    }

    // Utilisation de la classe pour formater les données
    const formatedStatistics = new ModelUserSatatistics(userData).getFormattedData();

    // Affichage des données utilisateur
    return (
        <div className='dashboard'>
            <div className='contentHeader'>
                <h1>Bonjour <span>{userData.userInfos?.firstName || 'Utilisateur'}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className='contentDatas'>
                <div className='contentCharts'>
                    <UserActivity activity={userActivity.sessions} />
                    <UserAverageSessions sessions={userSessions.sessions} />
                    <UserPerformance performances={userPerformance} />
                    <UserScore score={userScore} />
                </div>
                <div className='contentStatistics'>
                    {formatedStatistics.map((stat, index) => (
                        <UserStatisticCard
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;