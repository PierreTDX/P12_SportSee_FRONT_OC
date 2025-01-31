/**
 * @class ModelUserScore
 * @description Classe pour formater et calculer le score de l'utilisateur.
 */

class ModelUserScore {
    constructor(score) {
      this.score = score;
    }
  
    // Méthode pour calculer les données du graphique
    getChartData() {
      return [
        { name: "Score+", value: this.score * 100 },
        { name: "Score-", value: 100 - (this.score * 100) },
      ];
    }
  
    // Méthode pour calculer le score en pourcentage
    getPercentage() {
      return this.score * 100;
    }
  }
  
  export default ModelUserScore;
  