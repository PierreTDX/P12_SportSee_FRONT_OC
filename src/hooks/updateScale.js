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
    dashboard.style.transformOrigin = "top left"; // Éviter les marges vides
}

// Exécuter `updateScale` après un petit délai pour s'assurer que le DOM est bien prêt
function delayedUpdateScale() {
    setTimeout(updateScale, 50); // Délai léger pour laisser le DOM se stabiliser
}

// Écouteurs d'événements pour déclencher `updateScale`
window.addEventListener('resize', updateScale);
window.addEventListener('DOMContentLoaded', delayedUpdateScale);
window.addEventListener('load', delayedUpdateScale);
window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        delayedUpdateScale();
    }
});

export default updateScale;