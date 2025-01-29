function updateScale() {
    const dashboard = document.querySelector('.dashboard');
    if (!dashboard) return;

    const width = window.innerWidth;
    let scaleValue = 1;

    if (width <= 1024) {
        scaleValue = 0.7;
    } else if (width > 1024 && width <= 1440) {
        scaleValue = 0.7 + (1 - 0.7) * (width - 1024) / (1440 - 1024);
    }

    dashboard.style.transform = `scale(${scaleValue})`;
    dashboard.style.transformOrigin = "top left"; // Pour éviter les marges vides
}

// Observer le DOM pour s'assurer que `.dashboard` est bien présent
const observer = new MutationObserver(() => {
    if (document.querySelector('.dashboard')) {
        updateScale();
        observer.disconnect(); // On arrête d'observer une fois que l'élément est trouvé
    }
});

// Démarrer l'observation
observer.observe(document.body, { childList: true, subtree: true });

// Appliquer au chargement, au redimensionnement et au retour sur la page
window.addEventListener('resize', updateScale);
window.addEventListener('DOMContentLoaded', updateScale);
window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        updateScale();
    }
});

export default updateScale;