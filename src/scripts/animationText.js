export default function typeWriterAnimation({ id, duration, pause, deleteTime, transitionDelay = 0, textes }) {
    const element = document.getElementById(id);
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textes[index];
        const speed = isDeleting ? deleteTime / currentText.length : duration / currentText.length;

        if (!isDeleting) {
            // Affichage progressif des lettres
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentText.length) {
                // Attendre avant de commencer à effacer
                setTimeout(() => isDeleting = true, pause);
            }
        } else {
            // Effacement progressif des lettres
            element.innerHTML = currentText.substring(0, charIndex);
            charIndex--;
            if (charIndex < 0) {
                // Attendre avant de passer au texte suivant
                setTimeout(() => {
                    isDeleting = false;
                    index = (index + 1) % textes.length;
                    charIndex = 0; // Réinitialiser l'index des caractères pour le nouveau texte
                    // Redémarrer l'animation avec le nouveau texte sans attendre l'effacement précédent
                    type();
                }, transitionDelay);
                return; // Arrêter l'exécution pour éviter de réécrire immédiatement après l'effacement
            }
        }

        // Replanifier la prochaine étape de l'animation
        setTimeout(type, speed);
    }

    type();
}