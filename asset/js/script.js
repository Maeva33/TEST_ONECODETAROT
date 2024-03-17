// ANIMATION CARTES EN SURVOL
// Sélectionnez toutes les cartes
const cards = document.querySelectorAll('.play-card');

// Fonction pour appliquer l'animation de vague sur une carte
function applyWaveAnimation(card) {
    // Définir l'animation CSS
    card.style.transition = 'transform 0.5s ease-in-out';

    // Appliquer la transformation CSS pour l'effet de vague
    card.style.transform = 'scale(1.1)';
}

// Fonction pour réinitialiser la carte à son état initial après que le curseur quitte la carte
function resetCard(card) {
    // Réinitialiser la transformation CSS
    card.style.transform = 'scale(1)';
}

// Ajouter des gestionnaires d'événements pour chaque carte
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        applyWaveAnimation(card);
    });

    card.addEventListener('mouseleave', () => {
        resetCard(card);
    });
});