import mockDatas from "../data/mockDatas";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';

// Fonction pour récupérer les données mockées
const getMockData = (url, userId) => {
  switch (url) {
    case '': // Cas pour les données utilisateur
      return mockDatas.USER_MAIN_DATA.find((data) => data.id === userId); 
    case 'activity': // Cas pour les données d'activité utilisateur
      return mockDatas.USER_ACTIVITY.find((data) => data.userId === userId); 
    case 'average-sessions': // Cas pour les sessions moyennes utilisateur
      return mockDatas.USER_AVERAGE_SESSIONS.find((data) => data.userId === userId);
    case 'performance': // Cas pour les performances utilisateur
      return mockDatas.USER_PERFORMANCE.find((data) => data.userId === userId);
    default:
      return null;
  }
};

// Fonction pour récupérer les données mockées ou API
const fetchData = async (url, userId, signal) => {
  const SELECT_DATA_MOKED = localStorage.getItem('SELECT_DATA_MOKED') === 'true';
  if (USE_MOCK_DATA || SELECT_DATA_MOKED) {
    // Utiliser les données mockées si USE_MOCK_DATA est 'true'
    return getMockData(url, userId); // Passer userId pour récupérer les données mockées
  }

  try {
    // Utiliser les données API si USE_MOCK_DATA est 'false'
    const response = await fetch(`${API_BASE_URL}/user/${userId}/${url}`, {signal});
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error("Erreur lors de la récupération des données :", error);
      throw error; // Retourner l'erreur pour être gérée dans un composant React
    }
  }
};

export const fetchUserInfo = (id, signal) => {
  return fetchData('', id, signal); // Appel avec '' comme URL et 'id' comme paramètre
};

export const fetchUserActivity = (id, signal) => {
  return fetchData('activity', id, signal); // Appel avec 'activity' comme URL et 'id' comme paramètre
};

export const fetchUserAverageSessions = (id, signal) => {
  return fetchData('average-sessions', id, signal); // Appel avec 'average-sessions' comme URL et 'id' comme paramètre
};

export const fetchUserPerformance = (id, signal) => {
  return fetchData('performance', id, signal); // Appel avec 'performance' comme URL et 'id' comme paramètre
};