const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchData = async (url) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${url}`);
    
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
  return fetchData(`${id}`);
};

export const fetchUserActivity = (id) => {
  return fetchData(`${id}/activity`);
};

export const fetchUserAverageSessions = (id) => {
  return fetchData(`${id}/average-sessions`);
};

export const fetchUserPerformance = (id) => {
  return fetchData(`${id}/performance`);
};
