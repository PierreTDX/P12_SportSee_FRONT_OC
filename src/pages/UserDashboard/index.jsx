/**
 * @file index.jsx
 * @description Composant React pour afficher le tableau de bord d'un utilisateur avec ses statistiques, ses activités, et ses performances.
 * Ce composant charge les données utilisateur depuis une API et les affiche dans différents graphiques et cartes de statistiques.
 */

import './userDashboard.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ErrorUser from '../../components/404user';
import UserActivity from '../../components/UserActivity';
import UserAverageSessions from '../../components/UserAverageSessions';
import UserPerformance from '../../components/UserPerformance';
import UserScore from '../../components/UserScore';
import Loader from '../../components/Loader';
import { fetchUserInfo, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance } from '../../api/apiService';
import UserStatisticCard from '../../components/UserSatatistics';
import ModelUserSatatistics from '../../components/UserSatatistics/modelUserSatatistics';

/**
 * Composant affichant le tableau de bord d'un utilisateur avec des graphiques et des cartes de statistiques.
 * Ce composant récupère les données utilisateur depuis une API, gère l'état de chargement, et affiche une erreur si nécessaire.
 * Les informations utilisateur sont affichées sous forme de graphiques et cartes statistiques.
 * 
 * @returns {JSX.Element} Le tableau de bord utilisateur avec ses données et statistiques.
 */
function UserDashboard() {
    const { id } = useParams();
    const userId = parseInt(id, 10);
    const [userData, setUserData] = useState(null);
    const [userActivity, setUserActivity] = useState(null);
    const [userSessions, setUserSessions] = useState(null);
    const [userPerformance, setUserPerformance] = useState(null);

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Ajout d'un état pour le chargement

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        console.log("🚀 ~ useEffect ~ signal:", signal)

        const getData = async () => {
            try {
                const userData = await fetchUserInfo(userId, signal);
                console.log("🚀 ~ getData ~ userData1:", userData)
                if (!signal.aborted) setUserData(userData);

                const userActivity = await fetchUserActivity(userId, signal);
                console.log("🚀 ~ getData ~ userActivity:", userActivity)
                if (!signal.aborted) setUserActivity(userActivity);

                const userSessions = await fetchUserAverageSessions(userId, signal);
                if (!signal.aborted) setUserSessions(userSessions);

                const userPerformance = await fetchUserPerformance(userId, signal);
                if (!signal.aborted) setUserPerformance(userPerformance);

            } catch (err) {
                console.log("🚀 ~ getData ~ err:", err);
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                if (!signal.aborted) {
                    setIsLoading(false); // Fin du chargement uniquement si la requête n'a pas été annulée
                }
            }
        };

        getData();

        // Cleanup: Annuler la requête uniquement si le composant est démonté ou si userId change
        return () => {
            controller.abort();
        };

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
                    <UserScore score={userData.score ?? userData.todayScore ?? 0} />
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