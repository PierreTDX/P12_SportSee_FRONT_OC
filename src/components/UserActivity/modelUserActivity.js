/**
 * @class ModelUserActivity
 * @description Classe pour formater les données d'activité d'un utilisateur.
 * Chaque entrée de session est transformée pour avoir un numéro de jour simple.
 */

class ModelUserActivity {
  constructor(data) {
    this.formattedData = data.map((entry, index) => ({
      day: index + 1, // Transformer la date en un simple numéro de jour
      calories: entry.calories,
      kilogram: entry.kilogram
    }));
  }

  getFormattedData() {
    return this.formattedData;
  }
}

export default ModelUserActivity;