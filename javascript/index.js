const results = document.getElementById('results');     //On va récuperer l'élément qui a l'id="results" et dans lequel les données récuperées dès l'API vont s'afficher

let produits;//Variable qui va stocker les données récuperées dès l'API

//API REQUEST avec des fonctions fléchéés pour extraire les produits souhaités
const fetchProduits = async() => {
    produits = await fetch('http://localhost:3000/api/cameras').then((res) => res.json());
};

const displayProduits = async() => {
    await fetchProduits();

    results.innerHTML = (
        produits
            .map(produit => (
                `
                    <li class="produit-item"><a href="produit.html?id=${produit._id}">
                        <img class="produit-item__img" src="${produit.imageUrl}" />
                        <h3 class="produit-item__name">${produit.name}<h3>
                        <p class="produit-item__price">Prix : ${numberWithSpace(produit.price / 100)} €</p>
                        <button onclick="test(event,${produit})" class="produit-item__bouton" id="produit-item__bouton">Plus de détails</button>
                    </a></li>
                `           
                )
            ).join('')
    );
};

displayProduits(); //Pour afficher les résultats de la recherche