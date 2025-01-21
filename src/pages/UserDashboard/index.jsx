import './userDashboard.scss';
import mockDatas from "../../data/mockDatas.json";
import { useParams } from 'react-router-dom';
import ErrorUser from '../../components/404user';

function UserDashboard() {
    const { id } = useParams(); // Récupération de l'ID depuis l'URL
    const userId = parseInt(id); // Conversion en nombre

    // Recherche des données utilisateur
    const userData = mockDatas.USER_MAIN_DATA.find((data) => data.id === userId);


    // Gestion des cas où l'utilisateur n'est pas trouvé
    if (!userData) {
        return <ErrorUser />;
    }

    return (
        <div className='dashboard'>
            <h1>Bonjour {userData.userInfos.firstName}</h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

        </div>
    );
}

export default UserDashboard