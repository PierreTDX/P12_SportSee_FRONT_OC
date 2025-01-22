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
const fetchData = async (url, userId) => {
  if (USE_MOCK_DATA) {
    // Utiliser les données mockées si la variable d'environnement est vraie
    return getMockData(url, userId); // Passer userId pour récupérer les données mockées
  }

  try {
    // Utiliser les données API si la variable d'environnement est fausse
    const response = await fetch(`${API_BASE_URL}/user/${userId}/${url}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error; // Retourner l'erreur pour être gérée dans un composant React
  }
};

export const fetchUserInfo = (id) => {
  return fetchData('', id); // Appel avec '' comme URL et 'id' comme paramètre
};

export const fetchUserActivity = (id) => {
  return fetchData('activity', id); // Appel avec 'activity' comme URL et 'id' comme paramètre
};

export const fetchUserAverageSessions = (id) => {
  return fetchData('average-sessions', id); // Appel avec 'average-sessions' comme URL et 'id' comme paramètre
};

export const fetchUserPerformance = (id) => {
  return fetchData('performance', id); // Appel avec 'performance' comme URL et 'id' comme paramètre
};