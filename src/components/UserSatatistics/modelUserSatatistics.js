/**
 * @class ModelUserStatistics
 * @description Classe pour formater les statistiques de l'utilisateur.
 */

import Calorie from '../../assets/img/calories-icon.svg';
import Protein from '../../assets/img/protein-icon.svg';
import Carb from '../../assets/img/carbs-icon.svg';
import Fat from '../../assets/img/fat-icon.svg';

class ModelUserSatatistics {
  constructor(userData) {
    this.userData = userData;
  }

  // Méthode pour obtenir le tableau des statistiques formatées
  getFormattedData() {
    const icons = {
      calorieCount: Calorie,
      proteinCount: Protein,
      carbohydrateCount: Carb,
      lipidCount: Fat
    };

    return [
      { icon: icons.calorieCount, value: `${this.userData.keyData.calorieCount}kCal`, label: 'Calories' },
      { icon: icons.proteinCount, value: `${this.userData.keyData.proteinCount}g`, label: 'Proteines' },
      { icon: icons.carbohydrateCount, value: `${this.userData.keyData.carbohydrateCount}g`, label: 'Glucides' },
      { icon: icons.lipidCount, value: `${this.userData.keyData.lipidCount}g`, label: 'Lipides' },
    ];
  }
}

export default ModelUserSatatistics  