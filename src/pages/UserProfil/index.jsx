import './userProfil.scss'
import mockDatas from "../../data/mockDatas.json";
import { useParams } from 'react-router-dom';
import ErrorUser from '../../components/404user';

function UserProfil() {
    const { id } = useParams(); // Récupération de l'ID depuis l'URL
    const userId = parseInt(id); // Conversion en nombre

    // Recherche des données utilisateur
    const userData = mockDatas.USER_MAIN_DATA.find((data) => data.id === userId);
    const userActivity = mockDatas.USER_ACTIVITY.find((data) => data.userId === userId);
    const userSessions = mockDatas.USER_AVERAGE_SESSIONS.find((data) => data.userId === userId);
    const userPerformance = mockDatas.USER_PERFORMANCE.find((data) => data.userId === userId);

    // Gestion des cas où l'utilisateur n'est pas trouvé
    if (!userData) {
        return <ErrorUser />;
    }

    return (
        <div className='profilUser'>
            <h1>Bonjour {userData.userInfos.firstName}</h1>

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

export default UserProfil