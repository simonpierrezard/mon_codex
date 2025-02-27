// Exemple d'un tableau de compagnons et de leur statut
const companions = [
    { name: "Wi-Féroce", acquired: true },
    { name: "HootSpot", acquired: false },
    { name: "RoGiga", acquired: true },
    { name: "FibeRenard", acquired: false },
    // Ajoute les autres compagnons ici
];

// Mise à jour de la liste des compagnons
function updateCompanionList() {
    const companionContainer = document.querySelector('.companions-list');
    companionContainer.innerHTML = ''; // Effacer la liste existante
    companions.forEach(companion => {
        const companionDiv = document.createElement('div');
        companionDiv.classList.add('companion');
        
        const statusClass = companion.acquired ? 'acquired' : 'not-acquired';
        companionDiv.innerHTML = `
            <img src="${companion.name.toLowerCase().replace(' ', '-')}.jpg" alt="${companion.name}">
            <h3>${companion.name}</h3>
            <p>Statut : <span class="status ${statusClass}">${companion.acquired ? 'Acquis' : 'Non Acquis'}</span></p>
        `;
        
        companionContainer.appendChild(companionDiv);
    });
}

// Fonction de filtrage
document.getElementById('filterButton').addEventListener('click', () => {
    const acquiredOnly = confirm('Filtrer les compagnons acquis ?');
    companions.forEach(companion => {
        if (acquiredOnly && !companion.acquired) {
            companion.acquired = false; // Masquer ceux non acquis
        }
    });
    updateCompanionList();
});

// Initialisation de la liste
updateCompanionList();
function updateProgression() {
    const acquiredCompanions = companions.filter(c => c.acquired);
    const total = companions.length;
    const progressionText = `${acquiredCompanions.length}/${total} compagnons collectés`;
    document.getElementById('progressionText').textContent = progressionText;
}

// Appel de la fonction chaque fois qu'un compagnon est acquis
updateProgression();
