document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les éléments avec la classe "texteIndicateur"
    var grades = document.querySelectorAll(".texteIndicateur");

    var data = []; // Tableau pour stocker les données

    // Parcourt tous les éléments récupérés
    grades.forEach(function(grade) {
        // Récupère le contenu textuel de chaque élément
        var valeur = parseFloat(grade.textContent.trim()); // Convertit la note en nombre
        var titre = "Non communiqué";
        // Trouve l'élément parent .ui-carousel-item
        var parentItem = grade.closest('.ui-carousel-item');
        // Vérifie si l'élément parent existe et recherche .champsText2 à l'intérieur
        if (parentItem) {
            var sibling = parentItem.querySelector('.champsText2');
            if (sibling) {
                titre = sibling.textContent.trim();
            }
        }
        // Ajoute les données au tableau
        data.push({ "Matière": titre, "Note": valeur });
    });

    data.pop(); // Supprime le dernier élément du tableau

    // Création du tableau HTML
    var table = document.createElement("table");
    table.setAttribute("id", "myTable"); // Ajout de l'ID à la table
    var tbody = document.createElement("tbody");

    // Ajoute les lignes de données au tableau
    data.forEach(function(item) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = item["Matière"];
        cell2.textContent = item["Note"];

        // Ajoute des classes aux cellules en fonction de la note
        if (item["Note"] > 13) {
            cell2.classList.add("high-score");
        } else if (item["Note"] >= 10 && item["Note"] <= 13) {
            cell2.classList.add("medium-score");
        } else {
            cell2.classList.add("low-score");
        }
    });

    // Ajoute le corps du tableau à la table
    table.appendChild(tbody);

    // Sélectionne l'élément parent où le tableau doit être ajouté
    var parentElement = document.getElementById("form:j_idt745_content");

    // Ajoute le tableau comme enfant de l'élément parent
    parentElement.appendChild(table);
});
