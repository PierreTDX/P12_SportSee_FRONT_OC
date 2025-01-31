/**
 * @class ModelUserAverageSessions
 * @description Classe pour formater et ajuster les données des sessions moyennes d'un utilisateur.
 * Elle calcule les moyennes avant lundi et après dimanche, et ajuste les durées des sessions, pour lisser la courbe en dehors du graphique.
 */

class ModelUserAverageSessions {
    constructor(sessions) {
      // Calcul des moyennes avant Lundi et après Dimanche
      this.beforeMonday = (sessions[0].sessionLength + sessions[1].sessionLength) / 2; // Moyenne de Lundi et Mardi
      this.afterSunday = (sessions[5].sessionLength + sessions[6].sessionLength) / 2; // Moyenne de Samedi et Dimanche
  
      // Mapper les jours (1 à 7) en lettres (L, M, M, J, V, S, D) + ajouter les nouveaux points avant et après
      this.data = [
        { day: "", sessionLength: this.beforeMonday + 20 }, // Ajouter 20 à la moyenne avant lundi
        ...sessions.map((session) => ({
          day: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1], // Utiliser les jours correspondants
          sessionLength: session.sessionLength + 20, // Ajouter 20 à la valeur de sessionLength
        })),
        { day: "", sessionLength: this.afterSunday + 20 }, // Ajouter 20 à la moyenne après dimanche
      ];
    }
  
    getFormattedData() {
      return this.data;
    }
  }
  
  export default ModelUserAverageSessions;  