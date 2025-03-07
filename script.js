
document.addEventListener('DOMContentLoaded', (event) => {
// Le type et contentu de la requete de utilisateur
    const form = document.querySelector('#cherche'); // Le contenu
    const input = form.querySelector('input[type="text"]'); // Le type de contenu

// Soumission de la requete au JS
    const gifButton = document.querySelector('#submitGIF');
    const stickerButton = document.querySelector('#submitSticker');

// Details necessaire pour GIPHY    
    let searchType = ''; // GIFs or Stickers
    gifButton.addEventListener('click', () => searchType = 'gifs'); // GIFs
    stickerButton.addEventListener('click', () => searchType = 'stickers'); // Stickers
    const apiKey = 'IQQrp4vkNqq7bbsURXghOGyGtbZTa7fS'; // API clé

 // Valeurs pour afficher le reponse de GIPHY  
    const resultsDiv = document.querySelector('#results');

// Comportment de la formulaire (replissage et l'envoi au GIPHY) et gestion de la réponse
    form.addEventListener('submit', async (event) => {
        // Prevenir les envois vides
        event.preventDefault(); 
        // Supprimer les éspaces pour verfier que il y a contenu
        if (!input.value.trim()) {
        console.log('Empty search query');
        return;
    }
    // Suprimmer les éspaces autour les mots clés et les mettre dans l'envoi au GIPHY (le query)
    const query = encodeURIComponent(input.value.trim());
    // L'address du GIPHY (https://api.giphy.com/) et le requête (le text aprés .com/)
    const endpoint = `https://api.giphy.com/v1/${searchType}/search?api_key=IQQrp4vkNqq7bbsURXghOGyGtbZTa7fS&q=${query}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    // Gestion de la réponse (attendre un reponse JSON et apelle de fonction d'affichage)
    try {
        const response = await fetch(endpoint); // Attentre pour le reponse
        const data = await response.json(); // Le réponse attendu (le data) est en format JSON
        afficherResultats(data.data); // Donner le data au fonction d'affichage
    } catch (error) { // Quoi de faire si il n'y a pas d'un réponse
        console.error('Error fetching data:', error);
    }
});


// Fonction d'affichage de la résponse 
function afficherResultats (results) {
    resultsDiv.innerHTML = ''; // Clears previous results

    // Gestion de la cas de rien à voir
    if (results.length === 0) { 
        resultsDiv.innerHTML = '<p>Aucun résultat trouvé.</p>';
        return;
    }

    // Gestion de le a cas de quelque chose à voir
    results.forEach(result => { // Pour chaque item de la reponse ...
        const img = document.createElement('img'); // ... crée une element immage en HTML ...
        img.src = result.images.fixed_height.url; // ... d'une taille fixé et avec un URL ...
        img.alt = result.title; // ... et une titre.
        // Placer l'element (un enfant/Child avec un image) dans le resultsDiv de l'HTML (le parent.)
        resultsDiv.appendChild(img); 
    });
}
});
