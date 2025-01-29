class ModelUserPerformance {
    constructor(performances) {
      // Correspondance des "kind" en français
      this.frenchKindMap = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité",
      };
  
      // Ordre préféré des sujets dans le graphique
      this.preferredOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
  
      // Construire dynamiquement les données pour le graphique et les trier
      this.data = performances.data
        .map((perf) => ({
          subject: this.frenchKindMap[performances.kind[perf.kind]], // Associer "kind" à son libellé et traduire "kind" en français
          A: perf.value,
        }))
        .sort((a, b) => this.preferredOrder.indexOf(a.subject) - this.preferredOrder.indexOf(b.subject)); // trier selon l'ordre préféré
    }
  
    getFormattedData() {
      return this.data;
    }
  }
  
  export default ModelUserPerformance;
  