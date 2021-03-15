const results = document.getElementById('results');     //On va récuperer l'élément qui a l'id="results" et dans lequel les données récuperées dès l'API vont s'afficher

let produits;//Variable qui va stocker les données récuperées dès l'API

//API REQUEST avec des fonctions fléchéés pour récuperer les produits souhaités
const fetchProduits = async() => {
    produits = await fetch('http://localhost:3000/api/cameras').then((res) => res.json());
    console.log(produits);
};

/* La fonction précédent est équivalente à :
fetchProduits();
async function fetchProduits() {
    produits = await fetch('http://localhost:3000/api/cameras').then(res => res.json());
};
*/

const displayProduits = async() => {
    await fetchProduits();

    results.innerHTML = (
        produits
            .map(produit => (
                `
                    <li class="produit-item"><a href="produit.html">
                        <div class="produit-item__id">${produit._id}</div>
                        <img class="produit-item__img" src="${produit.imageUrl}" />
                        <h3 class="produit-item__name">${produit.name}<h3>
                        <p class="produit-item__price">Prix : ${numberWithSpace(produit.price)} €</p>
                        <button onclick="test(event,${produit})" class="produit-item__bouton">Plus de détails</button>
                    </a></li>
                `           
                )
            ).join('')
    );

    let btn = document.getElementById("test")
};

function test(e,produit) {
    e.preventDefault();
    console.log(produit);
    window.location.href =`produit.html?id=${produit._id}`
}

displayProduits(); //Pour afficher les résultats de la recherche

//Function pour séparer toutes les trois chiffres du 'price'
function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}





//Pour y aller à la fiche produit
/*const ficheProduit = document.getElementsById('btn');

Btn.addEventListener('click', () =>{

})*/


/*const appareil = document.getElementById('appareil');

const firstCamera = 'camera[0]';
const secondCamera = 'camera[1]';
const thirdCamera = 'camera[2]';
const fourthCamera = 'camera[3]';
const fifthCamera = 'camera[4]';

let cameras;

const fetchCameras = async() => {
    cameras = await fetch('http://localhost:3000/api/cameras').then(res => res.json());
};

const showCameras = async() => {
    await fetchCameras();

    appareil.innerHTML = (
        cameras
            .map(cameras => (
                `
                    <li class="cameras-item">
                        <img class="cameras-item__img" src="${cameras.imageUrl}" />
                        <form method="post" action=""> 
                            <h3 class="cameras-item__name">${cameras.name}<h3>
                            <p class="cameras-item__descr">${cameras.description}</p>
                            <label class="cameras-item__lens">Lentilles
                                <select>
                                    <option>${cameras.lenses[0]}</option>
                                    <option>${cameras.lenses[1]}</option>
                                    <option>${cameras.lenses[2]}</option>
                                </select>
                            </label>
                            <p class="cameras-item__price">Prix : ${numberWithSpace(cameras.price)} €</p>
                            <button onclick="window.open('http://127.0.0.1:5501/produit.html', '_self')" class="cameras-item__bouton">Ajouter au panier</button>
                        </form>
                    </li>
                `           
                )
            ).join('')
    )
};


showCameras();*/