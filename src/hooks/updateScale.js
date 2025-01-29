// Fonction pour calculer l'échelle en fonction de la largeur de l'écran
function updateScale() {
    const dashboard = document.querySelector('.dashboard');
    if (!dashboard) return; // Sécurité si l'élément n'existe pas

    const width = window.innerWidth;
    let scaleValue = 1;

    if (width <= 1024) {
        scaleValue = 0.7;
    } else if (width > 1024 && width <= 1440) {
        scaleValue = 0.7 + (1 - 0.7) * (width - 1024) / (1440 - 1024);
    }

    dashboard.style.transform = `scale(${scaleValue})`;
}

// Appliquer immédiatement lors du premier chargement
updateScale();

// Appliquer l'échelle au redimensionnement et au chargement de la page
window.addEventListener('resize', updateScale);
window.addEventListener('load', updateScale);

export default updateScale;
