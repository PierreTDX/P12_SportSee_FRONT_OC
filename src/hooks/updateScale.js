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

// Fonction pour surveiller les changements dans le DOM
function observeDashboard() {
    const targetNode = document.body;
    const observer = new MutationObserver(() => {
        updateScale();
    });

    observer.observe(targetNode, { childList: true, subtree: true });
}

// Appliquer le scale immédiatement et surveiller les changements
window.addEventListener('resize', updateScale);
window.addEventListener('DOMContentLoaded', () => {
    updateScale();
    observeDashboard();
});
window.addEventListener('load', updateScale);
window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        updateScale();
    }
});

export default updateScale;