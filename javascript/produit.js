let url = new URLSearchParams(document.location.search);

let id = url.get('id');

const fetchCamera = async() => {
    camera = await fetch(`http://localhost:3000/api/cameras/${id}` ).then(res => res.json());
};

const appareil = document.getElementById('appareil');
//console.log(appareil);

let camera;

const showCamera = async() => {
    await fetchCamera();

    let item = document.createElement('div');
    item.classList.add("cameras-item");
	
    let img = document.createElement('img');
    img.classList.add("cameras-item__img");
    img.src = camera.imageUrl;

    let div = document.createElement('div')

    let title = document.createElement('h3');
    title.classList.add("cameras-item__name");
    title.innerText = camera.name;

    let descrTitre = document.createElement("p");
    descrTitre.classList.add("cameras-item__titre");
    descrTitre.innerText = 'Description :';

    let description = document.createElement("p");
    description.classList.add("cameras-item__descr");
    description.innerText = camera.description;

    let label = document.createElement("label");
    label.classList.add("cameras-item__titre");
    label.innerText = 'Lentilles ';

    let select = document.createElement("select");
    select.classList.add("cameras-item__lenses");

    const {lenses} = camera;
    
    /*lenses.forEach(lens => {
        const option = document.createElement('option');
        select.appendChild(option)
        option.textContent = lens
    });*/

    lenses.forEach(lens => {
        select.innerHTML += `<option>${lens}</option>`
    });


    let price = document.createElement("p");
    price.classList.add("cameras-item__price");
    price.textContent = 'Prix : '+numberWithSpace(camera.price)+'€';
    
    let abtn = document.createElement('button');
    abtn.classList.add("cameras-item__bouton");
    abtn.setAttribute('data-id', camera._id);
    abtn.innerText = "Ajouter au panier";

    item.appendChild(img);

    item.appendChild(div);
        div.appendChild(title);
        div.appendChild(descrTitre);
        div.appendChild(description);
        div.appendChild(label);
        div.appendChild(select);
        div.appendChild(price);

    item.appendChild(abtn);

    appareil.append(item);

    abtn.addEventListener("click", ()  => {
        document.location.href = "panier.html";
    });
};


showCamera();

let abtn = document.getElementByClassName("cameras-item__bouton")

function test(e,produit) {
    e.preventDefault();
    console.log(produit);
    window.location.href =
        `
            panier.html?id=${produit._id}
        `
}


/*class Panier{

    //Ajouter produit au panier
    acheterProduit(e) {
        e.preventDefault();
        if(e.target.classList.contains('cameras-item__bouton')) {
            const produit = e.target.parentElement.parentElement;
            this.lireDonneesProduits(produit);
        }
    }

    lireDonneesProduits(produit) {
        const infoProduit = {
            img : produit.querySelector('img').src,
            marque : produit.querySelector('h3').textContent,
            prix : produit.querySelector('p').textContent,
            id : produit.querySelector('button').getAttribute('data-id'),
            quantité : 1
        }
        this.ajouterPanier(infoProduit);
    }

    ajouterPanier(produit) {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src"${camera.imageUrl}" width=100>
            </td>
            <td>${camera.name}</td>
            <td>${camera.price}</td>
            <td>
                <a href="#" class="effacer-produit fas fa-times-circle" data-id="${camera._id}"/>
            </td>
        `;
        listeProduit.appendChild(row);
    }
}*/