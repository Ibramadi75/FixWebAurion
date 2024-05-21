document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne l'élément <ul> contenant les éléments du carrousel
    var carouselList = document.querySelector(".ui-carousel-items");

    // Sélectionne tous les éléments <li> du carrousel
    var carouselItems = carouselList.children;

    // Convertit les éléments <li> en un tableau pour pouvoir utiliser les méthodes de tableau
    var itemsArray = Array.from(carouselItems);

    // Inverse l'ordre des éléments du tableau
    itemsArray.reverse();

    // Vide le contenu actuel de l'élément <ul>
    carouselList.innerHTML = "";

    // Ajoute les éléments inversés dans l'élément <ul>
    itemsArray.forEach(function(item) {
        carouselList.appendChild(item);
    });
});
